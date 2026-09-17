/* =========================================================
   Rabbithole — demo app.

   Reads NOTES/EDGES from notes.js and renders three panes: a vault tree,
   a markdown reader, and a prerequisite graph. Vanilla ES5, no build step
   and no CDN — if a dependency failed to load here there'd be nothing to
   read, and content rendering isn't polish.
   ========================================================= */
(function () {
  "use strict";

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------- ICONS */
  /* Same idiom as the portfolio: 24x24, stroke-only, currentColor. */
  var ICONS = {
    rabbit: '<path d="M9.4 11.2c-1.1-2.6-1.4-5.3-.5-6.9.8-1.4 2.2-.8 2.8.8.5 1.6.5 3.7.2 5.5"/>' +
            '<path d="M14.1 11.2c.5-2.6 1.1-5 2.1-6.3 1-1.2 2.1-.3 2.1 1.3 0 1.9-1 3.8-2.1 5"/>' +
            '<circle cx="12" cy="16" r="4.6"/><circle cx="10.4" cy="15.4" r=".85" fill="currentColor" stroke="none"/>',
    burrow: '<path d="M2.5 19.5h19"/>' +
            '<path d="M4 19.5c0-5.2 3.6-9 8-9s8 3.8 8 9"/>' +
            '<path d="M9 19.5v-3a3 3 0 0 1 6 0v3"/>',
    tunnel: '<path d="M9 5.5l6 6.5-6 6.5"/>',
    carrot: '<path d="M11 9.5 5.6 17a3.4 3.4 0 0 0 4.8 4.8L18 16.4z"/>' +
            '<path d="M13.6 8.2c.6-1.9 2.2-3.4 4.2-3.9-.2 2-1.4 3.8-3.1 4.7"/>' +
            '<path d="M11.6 7.4c-.9-1.5-.9-3.4 0-4.9 1.3 1.1 2 2.8 1.9 4.5"/>',
    paw:    '<ellipse cx="12" cy="15.5" rx="4.2" ry="3.4"/><circle cx="6.6" cy="11" r="1.9"/>' +
            '<circle cx="12" cy="8.4" r="1.9"/><circle cx="17.4" cy="11" r="1.9"/>',
    graph:  '<circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="16" r="2.4"/><circle cx="12" cy="6" r="2.4"/>' +
            '<path d="M11 8.2 7.1 15.7M13.3 7.6l3.9 6.3"/>',
    chevron:'<path d="M9 5.5l6 6.5-6 6.5"/>'
  };
  function icon(n) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICONS[n] + "</svg>";
  }
  /* Paw marker for markdown bullets, as a data: URI so CSS can use it.
     Filled rather than stroked — at 11px an outline just reads as mud. */
  var PAW_URI = 'url("data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#d08a5e">' +
    ICONS.paw + "</svg>"
  ) + '")';

  /* ---------------------------------------------------- INDEX */
  var byName = {}, byPath = {};
  NOTES.forEach(function (n) {
    byName[n.name.toLowerCase()] = n;
    byPath[n.path] = n;
  });

  var degree = {};
  EDGES.forEach(function (e) {
    degree[e.from] = (degree[e.from] || 0) + 1;
    degree[e.to]   = (degree[e.to]   || 0) + 1;
  });

  /* Obsidian-style resolution: exact path, then path suffix on a clean
     segment boundary, then basename. Ported from the real app's graph.ts. */
  function resolve(target) {
    if (!target) return null;
    var t = target.replace(/\.md$/i, "").trim();
    if (byPath[t]) return byPath[t];
    if (byPath[t + ".md"]) return byPath[t + ".md"];
    var lower = t.toLowerCase(), hit = null;
    Object.keys(byPath).forEach(function (p) {
      var pl = p.replace(/\.md$/i, "").toLowerCase();
      if (!hit && (pl === lower || pl.slice(-(lower.length + 1)) === "/" + lower)) hit = byPath[p];
    });
    return hit || byName[lower] || null;
  }

  /* ---------------------------------------------------- MARKDOWN */
  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function href(note) { return "#" + encodeURIComponent(note.path); }

  function renderInline(s) {
    var tokens = [];
    function stash(html) { tokens.push(html); return "\u0000" + (tokens.length - 1) + "\u0000"; }

    /* Code spans first, so the payoff matrices' `(Firm A's profit, ...)`
       survives every pass below untouched. */
    s = s.replace(/`([^`]+)`/g, function (m, code) {
      return stash("<code>" + escapeHtml(code) + "</code>");
    });

    /* Wikilinks before markdown links, and resolved against the RAW target —
       escaping first would turn "Consumer & Producer Surplus" into
       "&amp;" and the lookup would miss. */
    s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, target, alias) {
      var note = resolve(target);
      var text = escapeHtml(alias || target);
      if (!note) return stash('<span class="wl unresolved" title="Not in this demo slice">' + text + "</span>");
      return stash('<a class="wl" href="' + href(note) + '">' + text + "</a>");
    });

    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (m, text, url) {
      return stash('<a class="ext" href="' + escapeHtml(url) + '" target="_blank" rel="noopener">' +
                   escapeHtml(text) + "</a>");
    });

    s = escapeHtml(s);
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");

    return s.replace(/\u0000(\d+)\u0000/g, function (m, i) { return tokens[+i]; });
  }

  function cells(line) {
    var row = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    return row.split("|").map(function (c) { return c.trim(); });
  }

  function renderTable(rows) {
    var head = cells(rows[0]);
    var body = rows.slice(2).map(cells);
    var html = '<div class="md-table-wrap"><table><thead><tr>';
    head.forEach(function (c) { html += "<th>" + renderInline(c) + "</th>"; });
    html += "</tr></thead><tbody>";
    body.forEach(function (r) {
      html += "<tr>";
      r.forEach(function (c) {
        /* The note annotates its Nash cells with a trailing arrow — pick it up. */
        var nash = /←\s*Nash/.test(c) ? ' class="nash"' : "";
        html += "<td" + nash + ">" + renderInline(c) + "</td>";
      });
      html += "</tr>";
    });
    return html + "</tbody></table></div>";
  }

  var RE = {
    h:      /^(#{1,3})\s+(.*)$/,
    hr:     /^---\s*$/,
    table:  /^\|/,
    check:  /^-\s+\[[ xX]\]\s+(.*)$/,
    ul:     /^[-*]\s+(.*)$/,
    ol:     /^\d+\.\s+(.*)$/,
    q:      /^Q:\s*(.*)$/,
    a:      /^A:\s*(.*)$/
  };

  function renderBlocks(lines) {
    var out = [], i = 0;

    function collect(test) {
      var got = [];
      while (i < lines.length && test(lines[i])) got.push(lines[i++]);
      return got;
    }

    while (i < lines.length) {
      var line = lines[i];

      if (!line.trim()) { i++; continue; }

      var m = RE.h.exec(line);
      if (m) {
        var lvl = m[1].length;
        out.push("<h" + lvl + ">" + renderInline(m[2]) + "</h" + lvl + ">");
        i++; continue;
      }

      if (RE.hr.test(line)) { out.push("<hr>"); i++; continue; }

      if (RE.table.test(line)) {
        out.push(renderTable(collect(function (l) { return RE.table.test(l); })));
        continue;
      }

      /* Q:/A: pairs — the shape the vault's Questions sections actually use.
         The answer can contain tables and lists, so it re-enters this loop. */
      if (RE.q.test(line)) {
        var q = RE.q.exec(line)[1];
        i++;
        var ans = [];
        while (i < lines.length && !RE.q.test(lines[i]) && !/^##\s/.test(lines[i])) {
          ans.push(lines[i].replace(RE.a, "$1"));
          i++;
        }
        out.push('<div class="qa"><p class="q">' + renderInline(q) + "</p>" +
                 '<div class="a">' + renderBlocks(ans) + "</div></div>");
        continue;
      }

      if (RE.check.test(line)) {
        var checks = collect(function (l) { return RE.check.test(l); });
        out.push('<ul class="links">' + checks.map(function (l) {
          return '<li><span class="box"></span><span>' + renderInline(RE.check.exec(l)[1]) + "</span></li>";
        }).join("") + "</ul>");
        continue;
      }

      if (RE.ul.test(line)) {
        var items = collect(function (l) { return RE.ul.test(l) && !RE.check.test(l); });
        out.push('<ul class="md">' + items.map(function (l) {
          return "<li>" + renderInline(RE.ul.exec(l)[1]) + "</li>";
        }).join("") + "</ul>");
        continue;
      }

      if (RE.ol.test(line)) {
        var ords = collect(function (l) { return RE.ol.test(l); });
        out.push('<ol class="md">' + ords.map(function (l) {
          return "<li>" + renderInline(RE.ol.exec(l)[1]) + "</li>";
        }).join("") + "</ol>");
        continue;
      }

      /* paragraph: run on until a blank line or the start of another block */
      var para = collect(function (l) {
        return l.trim() && !RE.h.test(l) && !RE.hr.test(l) && !RE.table.test(l) &&
               !RE.ul.test(l) && !RE.ol.test(l) && !RE.q.test(l);
      });
      if (para.length) out.push("<p>" + renderInline(para.join(" ")) + "</p>");
      else i++;
    }
    return out.join("\n");
  }

  var mdCache = {};
  function renderMarkdown(path, src) {
    if (!mdCache[path]) mdCache[path] = renderBlocks(src.split("\n"));
    return mdCache[path];
  }

  /* ---------------------------------------------------- TREE */
  /* Folders before notes, then A→Z — same ordering as the real app's tree.ts. */
  function buildTree() {
    var root = { name: "", dir: true, children: [] }, dirs = { "": root };
    function ensureDir(p) {
      if (dirs[p]) return dirs[p];
      var cut = p.lastIndexOf("/");
      var parent = ensureDir(cut < 0 ? "" : p.slice(0, cut));
      var node = { name: p.slice(cut + 1), path: p, dir: true, children: [] };
      dirs[p] = node;
      parent.children.push(node);
      return node;
    }
    NOTES.forEach(function (n) {
      var cut = n.path.lastIndexOf("/");
      ensureDir(n.path.slice(0, cut)).children.push({
        name: n.name, path: n.path, dir: false, note: n
      });
    });
    (function sort(node) {
      node.children.sort(function (a, b) {
        if (a.dir !== b.dir) return a.dir ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
      node.children.forEach(function (c) { if (c.dir) sort(c); });
    })(root);
    return root;
  }

  function treeHtml(node, depth) {
    return '<ul role="group">' + node.children.map(function (c) {
      if (c.dir) {
        var isRoot = depth === 0;
        return '<li data-d="' + (depth + 1) + '" role="treeitem" aria-expanded="true">' +
                 '<button class="row folder" type="button" data-dir="' + escapeHtml(c.path) + '">' +
                   '<span class="tw">' + icon("chevron") + "</span>" +
                   '<span class="ic">' + icon(isRoot ? "burrow" : "tunnel") + "</span>" +
                   '<span class="nm">' + escapeHtml(c.name) + "</span>" +
                 "</button>" + treeHtml(c, depth + 1) +
               "</li>";
      }
      var stub = c.note.body ? "" : " stub";
      return '<li role="treeitem">' +
               '<a class="row leaf' + stub + '" href="' + href(c.note) + '" data-path="' + escapeHtml(c.path) + '">' +
                 '<span class="ic">' + icon("carrot") + "</span>" +
                 '<span class="nm">' + escapeHtml(c.name) + "</span>" +
               "</a>" +
             "</li>";
    }).join("") + "</ul>";
  }

  function renderTree() {
    $("#tree").innerHTML = '<div role="tree">' + treeHtml(buildTree(), 0) + "</div>";
    $$("#tree .row.folder").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var li = btn.parentNode;
        var open = !li.classList.toggle("collapsed");
        li.setAttribute("aria-expanded", String(open));
      });
    });
  }

  /* ---------------------------------------------------- GRAPH */
  /* Positions are authored, not simulated. Nine-ish nodes don't need physics,
     and a force layout would re-roll the arrangement on every load — which
     would throw away the one thing this graph exists to show: the spine
     running top-to-bottom from first principles down to the frontier. */
  var LAYOUT = {
    "Scarcity & Opportunity Cost":      { x: 160, y: 36,  s: "Scarcity" },
    "Supply and Demand":                { x: 160, y: 104, s: "Supply & Demand" },
    "Elasticity":                       { x: 52,  y: 180, s: "Elasticity" },
    "Market Structures":                { x: 160, y: 180, s: "Market Struct." },
    "Externalities":                    { x: 272, y: 180, s: "Externalities" },
    "Consumer & Producer Surplus":      { x: 30,  y: 262, s: "Surplus" },
    "Factor Markets & Labour":          { x: 95,  y: 262, s: "Factor Mkts" },
    "Game Theory & Oligopoly":          { x: 180, y: 262, s: "Game Theory" },
    "Information Asymmetry":            { x: 272, y: 262, s: "Info Asym." },
    "Tax Incidence & Deadweight Loss":  { x: 28,  y: 340, s: "Tax Incidence" },
    "Price Controls":                   { x: 114, y: 340, s: "Price Controls" },
    "Public Goods & Common Resources":  { x: 272, y: 340, s: "Public Goods" },
    "Price Discrimination":             { x: 92,  y: 416, s: "Price Discrim." },
    "Antitrust & Regulation":           { x: 196, y: 416, s: "Antitrust" }
  };

  var adjacency = {};
  EDGES.forEach(function (e) {
    (adjacency[e.from] = adjacency[e.from] || {})[e.to] = 1;
    (adjacency[e.to]   = adjacency[e.to]   || {})[e.from] = 1;
  });

  function renderGraph(current) {
    var svg = '<svg viewBox="0 0 320 452" role="img" aria-label="Prerequisite graph">';

    EDGES.forEach(function (e, i) {
      var a = LAYOUT[e.from], b = LAYOUT[e.to];
      if (!a || !b) return;
      svg += '<line class="g-edge ' + e.kind + '" data-i="' + i + '" ' +
             'x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '"></line>';
    });

    NOTES.forEach(function (n) {
      var p = LAYOUT[n.name];
      if (!p) return;
      var r = 5 + Math.min(degree[n.name] || 1, 5);
      var cls = "g-node " + n.fm.status + (n.body ? "" : " stub") + (n.name === current ? " here" : "");
      svg += '<g class="' + cls + '" data-name="' + escapeHtml(n.name) + '" tabindex="0" role="link" ' +
             'aria-label="' + escapeHtml(n.name) + '">' +
               "<title>" + escapeHtml(n.name + " — " + n.fm.status +
                 (n.fm.confidence != null ? ", confidence " + n.fm.confidence + "/5" : "")) + "</title>" +
               (n.name === current ? '<circle class="g-halo" cx="' + p.x + '" cy="' + p.y + '" r="' + (r + 6) + '"></circle>' : "") +
               '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + r + '"></circle>' +
               '<text x="' + p.x + '" y="' + (p.y + r + 11) + '">' + escapeHtml(p.s) + "</text>" +
             "</g>";
    });

    $("#graphWrap").innerHTML = svg + "</svg>";
    $("#graphWrap").firstChild.classList.add("graph");

    $$("#graphWrap .g-node").forEach(function (g) {
      var name = g.getAttribute("data-name");
      function go() {
        var n = byName[name.toLowerCase()];
        if (n) location.hash = encodeURIComponent(n.path);
      }
      g.addEventListener("click", go);
      g.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); go(); }
      });
      g.addEventListener("mouseenter", function () { highlight(name); });
      g.addEventListener("focus", function () { highlight(name); });
      g.addEventListener("mouseleave", clearHighlight);
      g.addEventListener("blur", clearHighlight);
    });

    $("#legend").innerHTML =
      '<li><span class="sw here"></span>Open note</li>' +
      '<li><span class="sw known"></span>Known</li>' +
      '<li><span class="sw frontier"></span>Frontier</li>' +
      '<li><span class="sw edge"></span>Prerequisite</li>' +
      '<li><span class="sw edge-link"></span>Mentioned in the note</li>';
  }

  function highlight(name) {
    var wrap = $("#graphWrap .graph");
    if (!wrap) return;
    wrap.classList.add("dim");
    var near = adjacency[name] || {};
    $$(".g-node", wrap).forEach(function (g) {
      var n = g.getAttribute("data-name");
      g.classList.toggle("adj", n === name || !!near[n]);
    });
    $$(".g-edge", wrap).forEach(function (l) {
      var e = EDGES[+l.getAttribute("data-i")];
      l.classList.toggle("adj", e.from === name || e.to === name);
    });
  }
  function clearHighlight() {
    var wrap = $("#graphWrap .graph");
    if (!wrap) return;
    wrap.classList.remove("dim");
    $$(".adj", wrap).forEach(function (el) { el.classList.remove("adj"); });
  }

  /* ---------------------------------------------------- SCORES */
  /* importance / interest / confidence are editable. There's no backend, so
     edits live in localStorage keyed by note path — without persistence,
     dragging a slider and navigating away would silently lose the change. */
  var EDITS_KEY = "rabbithole-edits";
  var FIELDS = ["importance", "interest", "confidence"];

  function loadEdits() {
    try { return JSON.parse(localStorage.getItem(EDITS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveEdit(path, field, value) {
    var all = loadEdits();
    (all[path] = all[path] || {})[field] = value;
    try { localStorage.setItem(EDITS_KEY, JSON.stringify(all)); } catch (e) {}
  }
  function clearEdits(path) {
    var all = loadEdits();
    delete all[path];
    try { localStorage.setItem(EDITS_KEY, JSON.stringify(all)); } catch (e) {}
  }
  function scoreOf(note, field) {
    var edit = loadEdits()[note.path];
    return (edit && edit[field] != null) ? edit[field] : (note.fm[field] || 0);
  }
  function isEdited(note) {
    var edit = loadEdits()[note.path];
    if (!edit) return false;
    return FIELDS.some(function (f) {
      return edit[f] != null && edit[f] !== (note.fm[f] || 0);
    });
  }

  /* ---------------------------------------------------- READER */
  function meter(field, value) {
    var pct = (value / 5) * 100;
    return '<label class="meter" style="--fill:' + pct + '%">' +
             '<span class="m-lbl">' + escapeHtml(field) + "</span>" +
             '<input type="range" min="0" max="5" step="1" value="' + value + '" data-field="' + field + '">' +
             '<output>' + value + "</output>" +
           "</label>";
  }

  function renderNote(note) {
    var fm = note.fm;
    var html = "<h1>" + escapeHtml(note.name) + "</h1>";

    html += '<div class="meta">' +
              '<span class="pill ' + fm.status + '">' + escapeHtml(fm.status) + "</span>" +
              FIELDS.map(function (f) { return meter(f, scoreOf(note, f)); }).join("") +
              '<span class="mono">' + escapeHtml(fm.space) + "</span>" +
              (fm.last_reviewed ? '<span class="mono">reviewed ' + escapeHtml(fm.last_reviewed) + "</span>" : "") +
              '<button class="reset" type="button" hidden>reset</button>' +
            "</div>";

    if (fm.prerequisites && fm.prerequisites.length) {
      html += '<div class="prereqs"><span class="lbl">Prerequisites</span>' +
        fm.prerequisites.map(function (p) {
          var target = resolve(p);
          return target
            ? '<a class="chip" href="' + href(target) + '">' + escapeHtml(p) + "</a>"
            : '<span class="chip">' + escapeHtml(p) + "</span>";
        }).join("") + "</div>";
    }

    if (note.body) {
      /* Drop the note's own H1 — the header above already shows the title. */
      html += renderMarkdown(note.path, note.body.replace(/^#\s+.*\n/, ""));
    } else {
      html += '<div class="stub-card">' +
                '<span class="burrow">' + icon("burrow") + "</span>" +
                (note.lede ? '<p class="lede">' + escapeHtml(note.lede) + "</p>" : "") +
                "<p>This tunnel hasn't been dug in the demo slice — the full note lives in the vault.</p>" +
              "</div>";
    }

    $("#note").innerHTML = html;
    $("#reader").scrollTop = 0;
    wireScores(note);
  }

  /* Sliders write straight to localStorage. `input` fires on drag and on
     arrow keys, so keyboard editing works without any extra handling. */
  function wireScores(note) {
    var resetBtn = $(".reset", $("#note"));

    function syncReset() { resetBtn.hidden = !isEdited(note); }

    $$("#note .meter input").forEach(function (input) {
      var label = input.parentNode;
      input.addEventListener("input", function () {
        var value = +input.value;
        label.style.setProperty("--fill", (value / 5) * 100 + "%");
        $("output", label).textContent = value;
        saveEdit(note.path, input.getAttribute("data-field"), value);
        syncReset();
      });
    });

    resetBtn.addEventListener("click", function () {
      clearEdits(note.path);
      $$("#note .meter input").forEach(function (input) {
        var value = note.fm[input.getAttribute("data-field")] || 0;
        input.value = value;
        input.parentNode.style.setProperty("--fill", (value / 5) * 100 + "%");
        $("output", input.parentNode).textContent = value;
      });
      syncReset();
    });

    syncReset();
  }

  function renderCrumbs(note) {
    var parts = note.path.replace(/\.md$/, "").split("/");
    $("#crumbs").innerHTML = parts.map(function (p, i) {
      var last = i === parts.length - 1;
      return '<span class="c' + (last ? " here" : "") + '">' + escapeHtml(p) + "</span>" +
             (last ? "" : '<span class="sep">' + icon("chevron") + "</span>");
    }).join("");
  }

  /* ---------------------------------------------------- ROUTER */
  var DEFAULT = "Economics/Topics/Firms & Competition/Game Theory & Oligopoly.md";

  function currentPath() {
    var h = location.hash.replace(/^#/, "");
    if (!h) return DEFAULT;
    var decoded;
    try { decoded = decodeURIComponent(h); } catch (e) { decoded = h; }
    return byPath[decoded] ? decoded : DEFAULT;
  }

  function show() {
    var note = byPath[currentPath()];
    if (!note) return;

    renderNote(note);
    renderCrumbs(note);
    renderGraph(note.name);

    $$("#tree .row.leaf").forEach(function (a) {
      var here = a.getAttribute("data-path") === note.path;
      a.classList.toggle("here", here);
      a.parentNode.setAttribute("aria-selected", String(here));
      if (here) {
        /* reveal it if an ancestor folder was collapsed */
        var p = a.parentNode;
        while (p && p !== document) {
          if (p.classList && p.classList.contains("collapsed")) {
            p.classList.remove("collapsed");
            p.setAttribute("aria-expanded", "true");
          }
          p = p.parentNode;
        }
        a.scrollIntoView({ block: "nearest", behavior: REDUCED ? "auto" : "smooth" });
      }
    });

    closePanels();
  }

  /* ---------------------------------------------------- PANELS (narrow screens) */
  function closePanels() {
    $("#treePane").classList.remove("open");
    $("#graphPane").classList.remove("open");
    $("#drawerBtn").setAttribute("aria-expanded", "false");
    $("#graphBtn").setAttribute("aria-expanded", "false");
    $("#scrim").hidden = true;
  }
  function togglePanel(pane, btn) {
    var open = !pane.classList.contains("open");
    closePanels();
    if (open) {
      pane.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      $("#scrim").hidden = false;
    }
  }

  /* ---------------------------------------------------- INIT */
  $("#brandMark").innerHTML = icon("rabbit");
  $("#drawerBtn").innerHTML = icon("burrow");
  $("#graphBtn").innerHTML = icon("graph");
  document.documentElement.style.setProperty("--paw", PAW_URI);

  renderTree();
  show();

  window.addEventListener("hashchange", show);
  $("#drawerBtn").addEventListener("click", function () { togglePanel($("#treePane"), this); });
  $("#graphBtn").addEventListener("click", function () { togglePanel($("#graphPane"), this); });
  $("#scrim").addEventListener("click", closePanels);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanels(); });

  /* An idle ear twitch, rarely, and never when motion is unwelcome. */
  if (!REDUCED) {
    setInterval(function () {
      var m = $("#brandMark");
      m.classList.add("twitch");
      setTimeout(function () { m.classList.remove("twitch"); }, 420);
    }, 8000);
  }
})();
