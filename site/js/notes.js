/* Notes page: contents, search, study checkboxes, reading progress, print. */
(function () {
  const EQS = window.EQS;
  const sidebar = document.getElementById("notesSidebar");
  const toc = document.getElementById("toc");
  const search = document.getElementById("tocSearch");
  const progress = document.getElementById("readingProgress");
  const main = document.getElementById("notesMain");
  const expandAll = document.getElementById("expandAll");
  const collapseAll = document.getElementById("collapseAll");
  const printBtn = document.getElementById("printBtn");
  const menuToggle = document.getElementById("menuToggle");
  if (!toc || !main) return;

  const chapters = Array.from(main.querySelectorAll(".chapter"));
  const links = [];

  chapters.forEach((chapter, index) => {
    const h2 = chapter.querySelector("h2");
    if (!h2) return;
    const clone = h2.cloneNode(true);
    const noEl = clone.querySelector(".ch-no");
    if (noEl) noEl.remove();
    const title = clone.textContent.replace(/\s+/g, " ").trim();
    const number = String(index + 1).padStart(2, "0");
    const li = document.createElement("li");
    li.className = "toc-h2";
    li.dataset.text = (title + " " + number).toLowerCase();
    li.innerHTML =
      '<a href="#' + chapter.id + '"><span class="toc-no">' + number + "</span><span>" + EQS.esc(title) + "</span></a>";
    toc.appendChild(li);
    links.push({ a: li.querySelector("a"), el: chapter });

    Array.from(chapter.querySelectorAll("h3")).forEach((h3) => {
      if (!h3.id) return;
      const h3clone = h3.cloneNode(true);
      const hno = h3clone.querySelector(".h-no");
      if (hno) hno.remove();
      const text = h3clone.textContent.replace(/\s+/g, " ").trim();
      const sub = document.createElement("li");
      sub.className = "toc-h3";
      sub.dataset.text = text.toLowerCase();
      sub.innerHTML = '<a href="#' + h3.id + '">' + EQS.esc(text) + "</a>";
      toc.appendChild(sub);
      links.push({ a: sub.querySelector("a"), el: h3 });
    });
  });

  /* Study checkboxes, one per chapter. */
  const STUDY_KEY = "eqs_notes_chapters_v1";
  let studied = EQS.store.get(STUDY_KEY, {});
  if (!studied || typeof studied !== "object") studied = {};

  function updateStudyProgress() {
    const studyChapters = chapters.filter((c) => c.id !== "ch-plan");
    const total = studyChapters.length;
    const done = studyChapters.filter((c) => studied[c.id]).length;
    const el = document.getElementById("studyProgress");
    if (el) el.textContent = done + " / " + total + " chapters marked studied";
  }

  chapters.forEach((chapter) => {
    if (chapter.id === "ch-plan") return;
    const label = document.createElement("label");
    label.className = "chapter-check";
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!studied[chapter.id];
    cb.setAttribute("aria-label", "Mark chapter studied");
    const span = document.createElement("span");
    span.textContent = "Studied";
    label.appendChild(cb);
    label.appendChild(span);
    const lede = chapter.querySelector(".chapter-lede");
    if (lede && lede.parentNode) lede.parentNode.insertBefore(label, lede.nextSibling);
    else chapter.insertBefore(label, chapter.firstChild);
    cb.addEventListener("change", () => {
      studied[chapter.id] = cb.checked;
      EQS.store.set(STUDY_KEY, studied);
      updateStudyProgress();
    });
  });

  const practiceTopic = {
    "ch-foundations": "foundations",
    "ch-demand-supply": "demand-supply",
    "ch-elasticity": "elasticity",
    "ch-consumer-choice": "consumer-choice",
    "ch-costs-competition": "costs-competition",
    "ch-monopoly": "monopoly",
    "ch-government-failure": "government-failure",
    "ch-macro-measurement": "macro-measurement",
    "ch-productivity": "productivity",
    "ch-growth": "growth",
    "ch-institutions": "institutions",
    "ch-policy": "policy"
  };

  chapters.forEach((chapter) => {
    const topic = practiceTopic[chapter.id];
    const back = chapter.querySelector(".back-to-top");
    const link = document.createElement("a");
    link.className = "btn small";
    link.style.marginRight = "8px";
    if (topic) {
      link.href = "practice.html?topic=" + topic;
      link.textContent = "Practice this topic →";
    } else {
      link.href = "exam.html";
      link.textContent = "Sit the full exam →";
    }
    if (back && back.parentNode) back.parentNode.insertBefore(link, back);
    const bank = document.createElement("a");
    bank.className = "btn small";
    bank.style.marginRight = "8px";
    bank.href = topic ? "questions.html?topic=" + topic : "questions.html";
    bank.textContent = "Question bank →";
    if (back && back.parentNode) back.parentNode.insertBefore(bank, back);
  });

  const studyProgress = document.createElement("div");
  studyProgress.id = "studyProgress";
  studyProgress.className = "hint";
  studyProgress.style.marginTop = "12px";
  if (printBtn && printBtn.parentNode) printBtn.parentNode.insertBefore(studyProgress, printBtn);
  updateStudyProgress();

  /* Search filters the contents list. */
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      Array.from(toc.children).forEach((li) => {
        li.style.display = !q || (li.dataset.text || "").includes(q) ? "" : "none";
      });
    });
  }

  /* Expand / collapse worked problems. */
  if (expandAll) {
    expandAll.addEventListener("click", () => {
      main.querySelectorAll("details").forEach((d) => (d.open = true));
    });
  }
  if (collapseAll) {
    collapseAll.addEventListener("click", () => {
      main.querySelectorAll("details").forEach((d) => (d.open = false));
    });
  }
  if (printBtn) printBtn.addEventListener("click", () => window.print());
  window.addEventListener("beforeprint", () => {
    main.querySelectorAll("details").forEach((d) => (d.open = true));
  });

  if (menuToggle) {
    if (window.innerWidth <= 820) sidebar.classList.add("collapsed");
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  /* Reading progress and active TOC entry. */
  function onScroll() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    progress.style.width = pct + "%";

    let active = null;
    for (const item of links) {
      const top = item.el.getBoundingClientRect().top;
      if (top <= 130) active = item;
      else break;
    }
    links.forEach((item) => item.a.classList.toggle("active", item === active));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) setTimeout(() => target.scrollIntoView({ block: "start" }), 300);
  }
})();
