/* =========================================================
   Sarang Vineesh — Product Portfolio
   Renders everything in data.js, then wires the interactions.
   ========================================================= */
(function () {
  "use strict";

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var P  = DATA.profile;
  var REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var TONES = { accent: "var(--accent)", muted: "var(--tx3)", ink: "var(--tx)" };

  /* Hand-drawn line-icon set (24x24, stroke=currentColor) replacing emoji everywhere. */
  var ICONS = {
    rocket: '<path d="M12 2.5c2.4 2 3.8 5.3 3.8 8.7 0 2-.5 3.9-1.1 5.4l-2.7 2.7-2.7-2.7c-.6-1.5-1.1-3.4-1.1-5.4 0-3.4 1.4-6.7 3.8-8.7z"/><circle cx="12" cy="10" r="1.5"/><path d="M8.7 15.3l-2.3.9.9-3.1"/><path d="M15.3 15.3l2.3.9-.9-3.1"/>',
    dollar: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M9.3 9.8c0-1.1 1.2-1.9 2.7-1.9s2.7.8 2.7 1.9-1.2 1.6-2.7 1.9-2.7.8-2.7 1.9 1.2 1.9 2.7 1.9 2.7-.8 2.7-1.9"/>',
    "trending-up": '<polyline points="3,17 9,11 13,15 21,6"/><polyline points="14,6 21,6 21,13"/>',
    "chart-bar": '<line x1="5" y1="19" x2="5" y2="11"/><line x1="12" y1="19" x2="12" y2="4.5"/><line x1="19" y1="19" x2="19" y2="14.5"/><line x1="3" y1="19" x2="21" y2="19"/>',
    flask: '<path d="M9.5 3h5"/><path d="M10.3 3v6.2l-5 8.7a1.8 1.8 0 0 0 1.6 2.6h10.2a1.8 1.8 0 0 0 1.6-2.6l-5-8.7V3"/><line x1="8.2" y1="14.5" x2="15.8" y2="14.5"/>',
    target: '<circle cx="12" cy="12" r="8.3"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
    device: '<rect x="7" y="2.5" width="10" height="19" rx="2.2"/><line x1="10.5" y1="18.3" x2="13.5" y2="18.3"/>',
    bolt: '<polygon points="13,2 4.5,13.5 11,13.5 10,22 19.5,10 13,10"/>',
    disc: '<ellipse cx="12" cy="11.5" rx="9" ry="4.6"/><ellipse cx="12" cy="11.5" rx="4.4" ry="2.1"/>',
    building: '<path d="M4 9.5l8-6 8 6"/><rect x="4" y="9.5" width="16" height="11.5"/><line x1="9" y1="21" x2="9" y2="13.5"/><line x1="15" y1="21" x2="15" y2="13.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.6 6.4l8.4 6.8 8.4-6.8"/>',
    briefcase: '<rect x="3" y="7.5" width="18" height="12" rx="2"/><path d="M8.3 7.5v-2a1.8 1.8 0 0 1 1.8-1.8h3.8a1.8 1.8 0 0 1 1.8 1.8v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
    phone: '<path d="M6 3h3l1.4 4.4-2 1.6a12.4 12.4 0 0 0 6.6 6.6l1.6-2 4.4 1.4v3a2 2 0 0 1-2 2C10.6 20 4 13.4 4 5a2 2 0 0 1 2-2z"/>',
    "file-text": '<path d="M7 2.5h6.5l4.5 4.5v13.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1z"/><path d="M13.5 2.5v4.5h4.5"/><line x1="8.5" y1="12.5" x2="15.5" y2="12.5"/><line x1="8.5" y1="16" x2="15.5" y2="16"/>',
    "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="8,7 17,7 17,16"/>',
    sparkle: '<path d="M12 3v18M4.5 8.2l15 7.6M19.5 8.2l-15 7.6"/>',
    "circle-dot": '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>'
  };
  function icon(name, cls) {
    var d = ICONS[name];
    if (!d) return "";
    return '<svg class="icon-svg' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
           'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + "</svg>";
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }
  function rich(parts) {
    return parts.map(function (p) {
      return p.hl ? '<span class="hl' + p.hl + '">' + esc(p.text) + "</span>" : esc(p.text);
    }).join("");
  }

  /* ---------------------------------------------------- THEME */
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("sv-theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);
  $("#themeBtn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("sv-theme", next); } catch (e) {}
    drawStars();
  });

  /* ---------------------------------------------------- HERO */
  $("#heroName").textContent = P.firstName;
  $("#heroRole").textContent = P.role;
  $("#heroSubRole").textContent = P.subRole;
  $("#heroTag").innerHTML = rich(P.tagline);
  $("#heroTag2").innerHTML = rich(P.subTagline);
  document.title = P.fullName + " | " + P.role;

  $("#heroChips").innerHTML = P.chips.map(function (c) {
    return "<li>" + esc(c) + "</li>";
  }).join("");

  $("#heroStats").innerHTML = DATA.heroStats.map(function (s) {
    return '<li><span class="ic">' + icon(s.icon) + "</span><span>" +
           '<span class="v">' + esc(s.value) + "</span>" +
           '<span class="l">' + esc(s.label) + "</span></span></li>";
  }).join("");

  $("#ctaEmail").href = "mailto:" + P.email;
  $("#ctaLinkedIn").href = P.linkedin;
  $("#ctaResume").href = P.resume;
  $("#navResume").href = P.resume;

  /* ---------------------------------------------------- KPI TILES */
  $("#kpiGrid").innerHTML = DATA.kpis.map(function (k, i) {
    return '<article class="kpi reveal" style="--kc:' + (TONES[k.tone] || TONES.c) + ";--i:" + i + '">' +
             '<div class="n" data-count="' + k.count + '" data-prefix="' + esc(k.prefix) + '" data-suffix="' + esc(k.suffix) + '">' +
               esc(k.prefix) + "0" + esc(k.suffix) +
             "</div>" +
             '<div class="l">' + esc(k.label) + "</div>" +
             '<div class="s">' + esc(k.note) + "</div>" +
           "</article>";
  }).join("");

  /* ---------------------------------------------------- CAREER RAIL */
  (function () {
    var months = function (ym) { var p = ym.split("-"); return (+p[0]) * 12 + (+p[1]) - 1; };
    var now = new Date();
    var nowM = now.getFullYear() * 12 + now.getMonth();
    var roles = DATA.experience.slice().reverse();

    var segs = roles.map(function (r, i) {
      var a = months(r.start);
      var b = r.end ? months(r.end) : nowM;
      return { r: r, len: Math.max(1, b - a), color: i === roles.length - 1 ? TONES.accent : TONES.muted };
    });
    var total = segs.reduce(function (s, x) { return s + x.len; }, 0);

    $("#rail").innerHTML = segs.map(function (s) {
      return '<div class="rail-seg" style="--sc:' + s.color + ";flex:" + s.len + ' 0 0" title="' +
             esc(s.r.role + " · " + s.r.company + " · " + s.r.period) + '"><span>' +
             esc(s.r.company) + "</span></div>";
    }).join("");

    $("#railLegend").innerHTML = segs.map(function (s) {
      return '<li style="--sc:' + s.color + '"><i></i><span><b>' + esc(s.r.company) +
             "</b> — " + esc(s.r.role) + ' <em>(' + s.len + " mo)</em></span></li>";
    }).join("");

    $("#railSpan").textContent = roles[0].period.split("—")[0].trim() + " → Present · " + total + " months";
  })();

  /* ---------------------------------------------------- ABOUT */
  $("#aboutCopy").innerHTML = DATA.about.paragraphs.map(function (p) {
    return "<p>" + esc(p) + "</p>";
  }).join("");

  $("#aboutAvatar").textContent = P.initials;
  $("#aboutMeta").innerHTML =
    "<dl>" +
      '<div class="row"><dt>Role</dt><dd>' + esc(P.subRole) + "</dd></div>" +
      '<div class="row"><dt>Based in</dt><dd>' + esc(P.location) + "</dd></div>" +
      '<div class="row"><dt>Email</dt><dd><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a></dd></div>" +
      '<div class="row"><dt>Phone</dt><dd>' + esc(P.phone) + "</dd></div>" +
      '<div class="row"><dt>LinkedIn</dt><dd><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">/in/sarangv</a></dd></div>' +
    "</dl>";

  $("#aboutChips").innerHTML = DATA.about.chips.map(function (c) {
    return "<li>" + esc(c) + "</li>";
  }).join("");

  $("#expGrid").innerHTML = DATA.expertise.map(function (e, i) {
    return '<article class="exp-card reveal" style="--i:' + i + '">' +
             '<div class="ic">' + icon(e.icon) + "</div>" +
             "<h4>" + esc(e.title) + "</h4><p>" + esc(e.desc) + "</p>" +
             "<ul>" + e.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
           "</article>";
  }).join("");

  /* ---------------------------------------------------- TIMELINE */
  $("#timeline").innerHTML = DATA.experience.map(function (j, i) {
    return '<div class="tl-item reveal' + (j.current ? " cur" : "") + '" style="--i:' + i + '"><div class="tl-card">' +
             (j.current ? '<span class="badge-now"><i></i>Current</span>' : "") +
             '<div class="tl-top"><div>' +
               '<h3 class="tl-role">' + esc(j.role) +
                 (j.note ? '<span class="tl-note">' + esc(j.note) + "</span>" : "") +
               "</h3>" +
               '<p class="tl-co">' + esc(j.company) + "</p>" +
             "</div>" +
             '<div class="tl-when">' + esc(j.period) + "<br>" + esc(j.location) + "</div></div>" +
             '<p class="tl-blurb">' + esc(j.blurb) + "</p>" +
             '<ul class="tl-points">' + j.points.map(function (p) {
                 return "<li><b>" + esc(p.b) + "</b>" + esc(p.t) + "</li>";
               }).join("") + "</ul>" +
           "</div></div>";
  }).join("");

  /* ---------------------------------------------------- SKILLS */
  (function () {
    var all = [];
    DATA.skillGroups.forEach(function (g) {
      g.items.forEach(function (i) { all.push({ key: g.key, name: i }); });
    });

    $("#skillFilters").innerHTML =
      '<button class="filter on" role="tab" data-key="all">' + icon("sparkle") + " All <span class=\"ct\">(" + all.length + ")</span></button>" +
      DATA.skillGroups.map(function (g) {
        return '<button class="filter" role="tab" data-key="' + g.key + '">' + icon(g.icon) + " " +
               esc(g.name) + ' <span class="ct">(' + g.items.length + ")</span></button>";
      }).join("");

    $("#skillGrid").innerHTML = all.map(function (s, i) {
      return '<li class="reveal" style="--i:' + (i % 16) + '" data-key="' + s.key + '">' + esc(s.name) + "</li>";
    }).join("");

    $$("#skillFilters .filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        $$("#skillFilters .filter").forEach(function (b) { b.classList.remove("on"); });
        btn.classList.add("on");
        var k = btn.dataset.key;
        $$("#skillGrid li").forEach(function (li) {
          li.classList.toggle("hide", k !== "all" && li.dataset.key !== k);
        });
      });
    });
  })();

  /* ---------------------------------------------------- PROJECTS */
  (function () {
    var statusClass = function (s) {
      return s === "Shipped" ? "shipped" : s === "Ongoing" ? "ongoing" : "progress";
    };

    function renderProjects(list, gridSel, btnSel) {
      var grid = $(gridSel);
      grid.innerHTML = list.map(function (p, i) {
        return '<article class="proj reveal' + (p.featured ? "" : " hidden extra") + '" style="--i:' + (i % 6) + '">' +
                 '<div class="proj-head">' +
                   '<span class="tag-status ' + statusClass(p.status) + '">' + esc(p.status) + "</span>" +
                   '<span class="tag-kind">' + esc(p.kind) + "</span>" +
                   '<span class="proj-no">' + String(i + 1).padStart(2, "0") + "</span>" +
                 "</div>" +
                 "<h4>" + esc(p.title) + "</h4><p>" + esc(p.desc) + "</p>" +
                 '<ul class="proj-metrics">' + p.metrics.map(function (m) {
                     return "<li>" + esc(m) + "</li>";
                   }).join("") + "</ul>" +
                 '<ul class="proj-tags">' + p.tags.map(function (t) {
                     return "<li>#" + esc(t) + "</li>";
                   }).join("") + "</ul>" +
               "</article>";
      }).join("");

      var btn = $(btnSel);
      var extras = $$(".proj.extra", grid);
      if (!extras.length) { btn.style.display = "none"; return; }
      var open = false;
      btn.addEventListener("click", function () {
        open = !open;
        extras.forEach(function (el) {
          el.classList.toggle("hidden", !open);
          if (open) requestAnimationFrame(function () { el.classList.add("in"); });
        });
        btn.textContent = open ? "Show fewer projects" : "View more projects";
      });
    }

    renderProjects(DATA.workProjects, "#workProjGrid", "#workMoreBtn");
    renderProjects(DATA.hobbyProjects, "#hobbyProjGrid", "#hobbyMoreBtn");
  })();

  /* ---------------------------------------------------- CERTS / EDUCATION / BEYOND */
  $("#certList").innerHTML = DATA.certifications.map(function (c) {
    return '<li><span><span class="t">' + esc(c.name) + '</span><br><span class="d">' +
           esc(c.detail) + "</span></span></li>";
  }).join("");

  $("#eduList").innerHTML = DATA.education.map(function (e) {
    return '<li><span><span class="t">' + esc(e.school) + '</span><br><span class="d">' +
           esc(e.detail) + '</span></span><span class="w">' + esc(e.period) + "</span></li>";
  }).join("");

  $("#beyondGrid").innerHTML = DATA.beyond.map(function (b, i) {
    return '<article class="beyond reveal" style="--i:' + i + '"><div class="ic">' + icon(b.icon) + "</div><div>" +
           "<h4>" + esc(b.title) + "</h4><p>" + esc(b.desc) + "</p></div></article>";
  }).join("");

  /* ---------------------------------------------------- CONTACT */
  $("#contactGrid").innerHTML = [
    { ic: "mail",      k: "Email",    v: P.email,    go: "Write to me",     href: "mailto:" + P.email },
    { ic: "briefcase", k: "LinkedIn", v: "/in/sarangv", go: "Connect",      href: P.linkedin, blank: true },
    { ic: "phone",     k: "Phone",    v: P.phone,    go: "Call or text",    href: "tel:" + P.phone.replace(/\s/g, "") },
    { ic: "file-text", k: "Resume",   v: "PDF, one page", go: "Download",   href: P.resume, dl: true }
  ].map(function (c, i) {
    return '<a class="cc reveal" style="--i:' + i + '" href="' + esc(c.href) + '"' +
           (c.blank ? ' target="_blank" rel="noopener"' : "") + (c.dl ? " download" : "") + ">" +
           '<span class="ic">' + icon(c.ic) + '</span><span class="k">' + esc(c.k) + "</span>" +
           '<span class="v">' + esc(c.v) + '</span><span class="go">' + esc(c.go) + " →</span></a>";
  }).join("");

  $("#footCopy").textContent = "© " + new Date().getFullYear() + " " + P.fullName;

  /* ---------------------------------------------------- NAV */
  var nav = $("#nav"), links = $("#navLinks"), burger = $("#burger");
  burger.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    burger.classList.toggle("x", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      burger.classList.remove("x");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  var navAnchors = $$("#navLinks a");
  var sections = navAnchors.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);
  var progressBar = $("#scrollProgress");
  var heroEl = $(".hero"), heroInEl = $(".hero-in"), heroGlowEl = $(".hero-glow");

  function onScroll() {
    nav.classList.toggle("stuck", window.scrollY > 24);
    var y = window.scrollY + 140, cur = null;
    sections.forEach(function (s) { if (s.offsetTop <= y) cur = s.id; });
    navAnchors.forEach(function (a) {
      a.classList.toggle("on", a.getAttribute("href") === "#" + cur);
    });

    if (progressBar) {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    }

    if (!REDUCED && heroEl && heroInEl) {
      var p = Math.min(1, window.scrollY / (heroEl.offsetHeight || 1));
      heroInEl.style.setProperty("--heroY", (p * -50).toFixed(1) + "px");
      heroInEl.style.setProperty("--heroScale", (1 - p * 0.06).toFixed(3));
      heroInEl.style.setProperty("--heroOpacity", Math.max(0, 1 - p * 1.4).toFixed(3));
      if (heroGlowEl) heroGlowEl.style.setProperty("--glowY", (p * 40).toFixed(1) + "px");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------- POINTER-REACTIVE CARDS */
  if (!REDUCED) {
    $$(".kpi, .exp-card, .proj, .tl-card, .beyond, .cc").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        card.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
        card.style.setProperty("--rx", ((0.5 - py) * 6).toFixed(2) + "deg");
        card.style.setProperty("--ry", ((px - 0.5) * 8).toFixed(2) + "deg");
        card.style.setProperty("--ty", "-4px");
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--ty", "0px");
      });
    });

    $$(".btn").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var mx = Math.max(-7, Math.min(7, (e.clientX - r.left - r.width / 2) * 0.28));
        var my = Math.max(-7, Math.min(7, (e.clientY - r.top - r.height / 2) * 0.35)) - 2;
        btn.style.setProperty("--bx", mx.toFixed(1) + "px");
        btn.style.setProperty("--by", my.toFixed(1) + "px");
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.setProperty("--bx", "0px");
        btn.style.setProperty("--by", "0px");
      });
    });
  }

  /* ---------------------------------------------------- REVEAL + COUNTERS + BARS */
  function countUp(el) {
    var target = +el.dataset.count;
    var pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    if (REDUCED || document.hidden) { el.textContent = pre + target + suf; return; }
    var t0 = null, dur = 1100;
    function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - k, 3);
      el.textContent = pre + Math.round(target * e) + suf;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) show(en.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  function show(el) {
    el.classList.add("in");
    $$("[data-count]", el).forEach(countUp);
    $$(".bar i", el).forEach(function (b) { b.style.width = b.dataset.pct + "%"; });
    io.unobserve(el);
  }

  $$(".reveal").forEach(function (el) { io.observe(el); });

  /* Failsafe: if the observer never reports (background tab, suspended page,
     no-layout edge cases), reveal anything at or above the fold anyway so the
     page can never be left blank. */
  function failsafe() {
    $$(".reveal:not(.in)").forEach(function (el) {
      if (document.hidden || el.getBoundingClientRect().top < window.innerHeight * 1.2) show(el);
    });
  }
  window.addEventListener("load", function () { setTimeout(failsafe, 1400); });
  document.addEventListener("visibilitychange", failsafe);

  /* ---------------------------------------------------- STARFIELD */
  var cv = $("#stars"), ctx = cv.getContext("2d"), stars = [], raf = null;

  function seed() {
    var n = Math.min(190, Math.round(window.innerWidth * window.innerHeight / 9000));
    stars = [];
    for (var i = 0; i < n; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        r: Math.random() * 1.25 + 0.35,
        o: Math.random() * 0.55 + 0.18,
        vy: (Math.random() * 0.16 + 0.04) / 1000,
        tw: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.14 ? 1 : 0
      });
    }
  }

  function sizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = cv.offsetWidth * dpr;
    cv.height = cv.offsetHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawStars(t) {
    var w = cv.offsetWidth, h = cv.offsetHeight;
    var cs = getComputedStyle(document.documentElement);
    var base = cs.getPropertyValue("--star").trim();
    var accentRgb = cs.getPropertyValue("--accent-rgb").trim();
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var tw = REDUCED ? 1 : 0.65 + 0.35 * Math.sin((t || 0) / 900 + s.tw);
      ctx.beginPath();
      ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.hue
        ? "rgba(" + accentRgb + "," + (s.o * tw).toFixed(3) + ")"
        : "rgba(" + base + "," + (s.o * tw).toFixed(3) + ")";
      ctx.fill();
    }
  }

  function loop(t) {
    for (var i = 0; i < stars.length; i++) {
      stars[i].y -= stars[i].vy;
      if (stars[i].y < -0.02) { stars[i].y = 1.02; stars[i].x = Math.random(); }
    }
    drawStars(t);
    raf = requestAnimationFrame(loop);
  }

  function boot() { sizeCanvas(); seed(); REDUCED ? drawStars(0) : (cancelAnimationFrame(raf), raf = requestAnimationFrame(loop)); }
  boot();

  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(boot, 160);
  });

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
    else if (!REDUCED && !raf) raf = requestAnimationFrame(loop);
  });

  /* ---------------------------------------------------- SIDE RAILS */
  /* Decorative icon constellations in the wide gutters either side of the
     content column. Two-layer structure: an outer .doodle-wrap that GSAP
     ScrollTrigger drives for scroll-linked parallax (progressive — no-op if
     GSAP fails to load), and an inner .doodle that idle-floats via plain CSS
     regardless, so the rail is never inert. */
  (function () {
    var leftRail = $("#railLeft"), rightRail = $("#railRight");
    if (!leftRail || !rightRail) return;

    var RAIL_DEFS = {
      left: [
        { icon: "target",     top: 9,  inset: 26, size: 26, dur: 6.4, delay: .2 },
        { icon: "circle-dot", top: 27, inset: 62, size: 15, dur: 5.2, delay: 1.1 },
        { icon: "sparkle",    top: 47, inset: 38, size: 20, dur: 7.1, delay: .6 },
        { icon: "chart-bar",  top: 66, inset: 70, size: 24, dur: 6.8, delay: 1.6 },
        { icon: "disc",       top: 85, inset: 30, size: 22, dur: 5.8, delay: .9 }
      ],
      right: [
        { icon: "bolt",            top: 13, inset: 30, size: 20, dur: 5.6, delay: .4 },
        { icon: "arrow-up-right",  top: 32, inset: 64, size: 18, dur: 6.2, delay: 1.3 },
        { icon: "circle-dot",      top: 51, inset: 42, size: 14, dur: 5.0, delay: .1 },
        { icon: "flask",           top: 70, inset: 24, size: 24, dur: 7.0, delay: 1.8 },
        { icon: "sparkle",         top: 88, inset: 58, size: 20, dur: 6.6, delay: .7 }
      ]
    };

    function build(rail, defs, side) {
      rail.innerHTML = defs.map(function (d) {
        return '<span class="doodle-wrap" style="top:' + d.top + '%;' + side + ':' + d.inset + 'px">' +
                 '<span class="doodle" style="width:' + d.size + 'px;height:' + d.size + 'px;' +
                 'animation-duration:' + d.dur + 's;animation-delay:' + d.delay + 's">' +
                   icon(d.icon) +
                 '</span></span>';
      }).join("");
    }
    build(leftRail, RAIL_DEFS.left, "left");
    build(rightRail, RAIL_DEFS.right, "right");

    if (!REDUCED && window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      $$(".side-rail .doodle-wrap").forEach(function (el, idx) {
        var depth = 50 + (idx % 5) * 24;
        gsap.to(el, {
          y: (idx % 2 === 0 ? -1 : 1) * depth,
          ease: "none",
          scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.6 }
        });
      });
    }
  })();

  /* ---------------------------------------------------- SMOOTH SCROLL (Lenis, progressive) */
  if (!REDUCED && window.Lenis) {
    var lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    if (window.gsap) {
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
      if (window.ScrollTrigger) lenis.on("scroll", ScrollTrigger.update);
    } else {
      requestAnimationFrame(function tick(time) { lenis.raf(time); requestAnimationFrame(tick); });
    }
  }
})();
