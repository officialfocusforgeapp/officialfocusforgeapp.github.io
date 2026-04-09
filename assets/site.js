const SUPPORT_EMAIL = "officialfocusforgeapp@gmail.com";
const PLAY_URL = "https://play.google.com/store/apps/details?id=app.focusforge";
const MEMBERSHIP_PLANS = [
  {
    "name": "Free",
    "tag": "Start with the core controls",
    "monthly": null,
    "yearly": null,
    "summary": "Protect up to 3 apps.",
    "features": [
      "Protect up to 3 apps",
      "Basic blocking control",
      "Baseline schedules and testing"
    ]
  },
  {
    "name": "Apprentice",
    "tag": "Most solo users",
    "monthly": "$4.99/mo",
    "yearly": "$49.99/yr",
    "summary": "Unlimited solo blocking and stricter control.",
    "features": [
      "Unlimited solo app blocking",
      "Schedules and Lock In sessions",
      "Addict Mode",
      "Custom block media",
      "Theme Studio",
      "Profile customization"
    ]
  },
  {
    "name": "Journeyman Partner",
    "tag": "Shared accountability",
    "monthly": "$8.99/mo",
    "yearly": "$79.99/yr",
    "summary": "Adds one partner seat and partner workflows.",
    "features": [
      "Everything in Apprentice",
      "One shared partner seat",
      "Partner sessions",
      "Partner alerts",
      "Approval-state workflows"
    ]
  },
  {
    "name": "Journeyman Family",
    "tag": "Household controls",
    "monthly": "$12.99/mo",
    "yearly": "$119.99/yr",
    "summary": "Parent controls with linked child devices.",
    "features": [
      "Everything in Apprentice",
      "Parent controls",
      "Up to 3 linked child devices",
      "Household scheduling",
      "Family management tools"
    ]
  },
  {
    "name": "Journeyman Total",
    "tag": "Partner + Family",
    "monthly": "$16.99/mo",
    "yearly": "$159.99/yr",
    "summary": "Combines partner and family control layers.",
    "features": [
      "Everything in Apprentice",
      "Partner seat and alerts",
      "Parent controls",
      "Up to 3 linked child devices",
      "Combined accountability workflows"
    ]
  },
  {
    "name": "Master Smith",
    "tag": "Flagship tier",
    "monthly": "$19.99/mo",
    "yearly": "$179.99/yr",
    "summary": "Adds recovery depth and higher-end customization.",
    "features": [
      "Everything in Journeyman Total",
      "Recovery Tools",
      "Custom profile photos",
      "Deeper premium limits",
      "Future flagship additions"
    ]
  }
];

function renderPlans() {
  const host = document.querySelector('[data-membership-grid]');
  if (!host) return;
  host.innerHTML = MEMBERSHIP_PLANS.map((plan, index) => {
    const price = plan.monthly
      ? `<div class="plan-price">${plan.monthly}<span>${plan.yearly}</span></div>`
      : `<div class="plan-price">Free<span>No subscription required</span></div>`;
    const featured = plan.name === 'Apprentice' ? ' price-card--featured' : '';
    return `
      <article class="price-card${featured}" aria-label="${plan.name} plan">
        <div class="price-top">
          <div>
            <div class="plan-name">${plan.name}</div>
            <div class="plan-tag">${plan.tag}</div>
          </div>
          ${price}
        </div>
        <p class="plan-summary">${plan.summary}</p>
        <ul class="policy-list">${plan.features.map(item => `<li>${item}</li>`).join('')}</ul>
      </article>`;
  }).join('');
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
}

function setSupportEmail() {
  document.querySelectorAll('[data-support-email]').forEach(el => {
    if (el.tagName === 'A') el.href = `mailto:${SUPPORT_EMAIL}`;
    el.textContent = SUPPORT_EMAIL;
  });
}

function setActiveNav() {
  const path = window.location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('[data-page]').forEach(link => {
    if (link.dataset.page === path || (link.dataset.page === '/' && path === '/')) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function bindNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }));
}

function bindReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || !items.length) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlans();
  setYear();
  setSupportEmail();
  setActiveNav();
  bindNav();
  bindReveal();
});
