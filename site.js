const SITE = {
  supportEmail: "officialfocusforgeapp@gmail.com",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=app.focusforge",
  nav: [
    { label: "Home", href: "/" },
    { label: "Use Cases", href: "/use-cases/" },
    { label: "Memberships + Features", href: "/memberships/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Support", href: "/support/" }
  ],
  plans: [
    {
      name: "Free",
      tag: "Starter",
      priceMonthly: "$0",
      priceYearly: "Always free",
      blurb: "Start with 3 Apps + 3 Websites, basic blocking, and limited Planner access.",
      bullets: [
        "3 Apps + 3 Websites",
        "Limited Planner access",
        "Manual blocking controls",
        "Core block screen",
        "Upgrade path into stricter systems"
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Apprentice",
      tag: "Best starting point",
      priceMonthly: "$4.99/mo",
      priceYearly: "$49.99/yr",
      blurb: "Unlimited solo control with Full Planner Access, stricter blocking, and customization.",
      bullets: [
        "Unlimited solo blocking",
        "Full Planner Access",
        "Lock Ins and saved schedules",
        "Addict Mode",
        "Custom block media",
        "Theme Studio",
        "Profile customization"
      ],
      featured: true,
      cta: "Try for free",
      ctaType: "trial"
    },
    {
      name: "Journeyman Partner",
      tag: "Shared accountability",
      priceMonthly: "$8.99/mo",
      priceYearly: "$67.67/yr",
      blurb: "Bring one partner into the loop for approvals, alerts, and shared sessions.",
      bullets: [
        "One shared partner seat",
        "Partner sessions",
        "Partner alerts",
        "Approval-state workflows"
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Journeyman Family",
      tag: "Household controls",
      priceMonthly: "$9.99/mo",
      priceYearly: "$79.99/yr",
      blurb: "Parent controls for linked child devices and household scheduling.",
      bullets: [
        "Parent controls",
        "Up to 3 linked child devices",
        "Household scheduling",
        "Family management controls"
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Journeyman Total",
      tag: "Partner + Family",
      priceMonthly: "$12.99/mo",
      priceYearly: "$89.99/yr",
      blurb: "Combine partner accountability with family management in one tier.",
      bullets: [
        "Includes Partner features",
        "Includes Family features",
        "Shared accountability + household control",
        "Broader premium depth"
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Master Smith",
      tag: "Flagship tier",
      priceMonthly: "$19.99/mo",
      priceYearly: "$179.99/yr",
      blurb: "Recovery-focused tools, deeper customization, and the highest premium limits.",
      bullets: [
        "Recovery Tools",
        "Custom profile photos",
        "Deeper premium limits",
        "Future flagship additions"
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    }
  ],
  faqs: [
    {
      q: "What does FocusForge actually do?",
      a: "It blocks apps and websites, runs strict Lock In sessions, stores schedules, and layers progression, accountability, family controls, and recovery tools around those restrictions."
    },
    {
      q: "How strict can it get?",
      a: "That depends on the rules you set. FocusForge is built for stronger interventions than a basic timer app, including Addict Mode, partner approval states, and harder-to-exit session flows."
    },
    {
      q: "Why does the app request Accessibility?",
      a: "Accessibility is used so FocusForge can detect the foreground app and, in supported browsers, visible browser text that looks like a domain or URL so selected app and website rules can be enforced. It is not intended for password capture, messaging apps, or general-purpose screen recording."
    },
    {
      q: "What is Usage Access for?",
      a: "Usage Access is optional. When enabled, it powers app-time insights and projections."
    },
    {
      q: "Do cloud features rely on outside providers?",
      a: "Yes. Signed-in and cloud-backed features may use Firebase for account sync, notifications, social and family features, selected media sync, and crash diagnostics, and Google Play for subscription billing."
    },
    {
      q: "How do I delete account data?",
      a: "Use the live Delete Account page linked in the footer for cloud-backed deletion requests. Local on-device data can be exported or cleared from the app Privacy screen."
    }
  ]
};

function normalizePath(pathname) {
  if (!pathname) return "/";
  const cleaned = pathname.replace(/index\.html$/, "");
  return cleaned.endsWith("/") ? cleaned : `${cleaned}/`;
}

function renderNav() {
  document.querySelectorAll("[data-nav]").forEach((mount) => {
    const current = normalizePath(window.location.pathname);
    mount.innerHTML = SITE.nav.map((item) => {
      const active = current === normalizePath(item.href) ? 'is-active' : '';
      return `<a class="${active}" href="${item.href}">${item.label}</a>`;
    }).join("");
  });

  document.querySelectorAll("[data-google-play]").forEach((el) => {
    el.setAttribute("href", SITE.googlePlayUrl);
  });
  document.querySelectorAll("[data-support-email]").forEach((el) => {
    el.textContent = SITE.supportEmail;
    el.setAttribute("href", `mailto:${SITE.supportEmail}`);
  });
}

function renderPlans() {
  document.querySelectorAll("[data-plan-grid]").forEach((mount) => {
    const isRail = mount.hasAttribute('data-plan-rail');
    mount.classList.add(isRail ? 'plan-rail' : 'plan-grid');
    mount.innerHTML = SITE.plans.map((plan) => {
      const isTrial = plan.ctaType === 'trial';
      const href = isTrial ? '#trial' : SITE.googlePlayUrl;
      const attrs = isTrial
        ? 'href="#trial" data-trial-modal="true"'
        : `href="${href}" target="_blank" rel="noopener noreferrer"`;
      const hasYearlyPrice = plan.priceYearly && plan.priceYearly !== 'Always free';
      const monthlyPrice = hasYearlyPrice ? `${plan.priceMonthly} or` : plan.priceMonthly;
      const yearlyPriceClass = hasYearlyPrice ? 'plan-price plan-price--yearly' : 'tiny-note';
      const yearlyPriceMatch = hasYearlyPrice
        ? String(plan.priceYearly).match(/^(.*?)(\s*\([^)]*\))$/)
        : null;
      const yearlyPriceMarkup = yearlyPriceMatch
        ? `<div class="${yearlyPriceClass}"><span class="plan-price__value">${yearlyPriceMatch[1].trim()}</span><span class="plan-price__savings">${yearlyPriceMatch[2].trim()}</span></div>`
        : `<div class="${yearlyPriceClass}">${plan.priceYearly}</div>`;
      return `
      <article class="plan-card" data-featured="${plan.featured}">
        <div class="plan-badge">${plan.tag}</div>
        <h3>${plan.name}</h3>
        <div class="plan-price plan-price--monthly">${monthlyPrice}</div>
        ${yearlyPriceMarkup}
        <p class="plan-sub">${plan.blurb}</p>
        <ul class="feature-list">
          ${plan.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
        <div class="plan-footer">
          <a class="button ${plan.featured ? 'button--primary' : 'button--secondary'} button--small" ${attrs}>${plan.cta}</a>
        </div>
      </article>`;
    }).join("");
  });
}

function renderTrialModal() {
  if (document.querySelector('[data-trial-modal-root]')) return;
  const modal = document.createElement('div');
  modal.className = 'trial-modal';
  modal.setAttribute('hidden', 'hidden');
  modal.setAttribute('data-trial-modal-root', 'true');
  modal.innerHTML = `
    <div class="trial-modal__backdrop" data-trial-close="true"></div>
    <div class="trial-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="trial-modal-title">
      <button class="trial-modal__close" type="button" aria-label="Close" data-trial-close="true">×</button>
      <div class="trial-modal__eyebrow">Free Trial</div>
      <h2 id="trial-modal-title">Access a Free Trial in the App!</h2>
      <p class="trial-modal__note">(New Users Only)</p>
      <div class="trial-modal__actions">
        <a class="button button--primary" href="${SITE.googlePlayUrl}" target="_blank" rel="noopener noreferrer">Open Google Play</a>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function setupTrialModal() {
  renderTrialModal();
  const modal = document.querySelector('[data-trial-modal-root]');
  if (!modal) return;
  const open = () => {
    modal.hidden = false;
    document.body.classList.add('modal-open');
  };
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
  };
  document.querySelectorAll('[data-trial-modal="true"]').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      open();
    });
  });
  modal.addEventListener('click', (event) => {
    if (event.target instanceof HTMLElement && event.target.hasAttribute('data-trial-close')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });
}

function renderFaqs() {
  document.querySelectorAll("[data-faq-list]").forEach((mount) => {
    mount.classList.add("faq-list");
    mount.innerHTML = SITE.faqs.map((item, idx) => `
      <details class="faq-item" ${idx === 0 ? 'open' : ''}>
        <summary class="faq-question"><span>${item.q}</span><span aria-hidden="true">+</span></summary>
        <div class="faq-answer">${item.a}</div>
      </details>
    `).join("");
  });
}

function setupDetails() {
  document.querySelectorAll('.faq-question').forEach((summary) => {
    summary.addEventListener('click', (event) => {
      const details = event.currentTarget.parentElement;
      const isOpen = details.hasAttribute('open');
      document.querySelectorAll('.faq-item[open]').forEach((item) => {
        if (item !== details) item.removeAttribute('open');
      });
      if (isOpen) {
        event.preventDefault();
        details.removeAttribute('open');
      }
    });
  });
}

function setupMobileNav() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('[data-nav-toggle]');
  if (!header || !toggle) return;
  toggle.addEventListener('click', () => {
    const next = !header.classList.contains('is-open');
    header.classList.toggle('is-open', next);
    toggle.setAttribute('aria-expanded', String(next));
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) {
      header.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function setupArticleNav() {
  document.querySelectorAll('.article-nav').forEach((nav) => {
    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    const header = document.querySelector('.site-header');
    const headerOffset = () => (header ? header.offsetHeight + 20 : 96);
    const sections = links
      .map((link) => {
        const id = link.getAttribute('href');
        return id ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    const setActive = (id) => {
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href');
        if (!id || !id.startsWith('#')) return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        const top = window.scrollY + target.getBoundingClientRect().top - headerOffset();
        history.replaceState(null, '', id);
        window.scrollTo({ top, behavior: 'smooth' });
        setActive(id.slice(1));
      });
    });

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target && visible.target.id) setActive(visible.target.id);
    }, { rootMargin: `-${headerOffset()}px 0px -55% 0px`, threshold: [0.2, 0.4, 0.65] });

    sections.forEach((section) => observer.observe(section));

    if (window.location.hash) {
      const hashed = document.querySelector(window.location.hash);
      if (hashed) {
        setTimeout(() => {
          const top = window.scrollY + hashed.getBoundingClientRect().top - headerOffset();
          window.scrollTo({ top, behavior: 'auto' });
          setActive(hashed.id);
        }, 0);
      }
    } else if (sections[0] && sections[0].id) {
      setActive(sections[0].id);
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderPlans();
  renderFaqs();
  setupTrialModal();
  setupDetails();
  setupMobileNav();
  setupArticleNav();
  setYear();
});
