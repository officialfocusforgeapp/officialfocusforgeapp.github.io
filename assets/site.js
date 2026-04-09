const SUPPORT_EMAIL = 'officialfocusforgeapp@gmail.com';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=app.focusforge';

const MEMBERSHIP_PLANS = [
  {
    id: 'free',
    name: 'Free',
    tag: 'Starter',
    monthly: 'Free',
    yearly: 'Free',
    priceMonthlyValue: 'Free',
    priceYearlyValue: 'Free',
    summary: 'Protect up to 3 apps with the core blocking system.',
    features: [
      'Protect up to 3 apps',
      'Manual blocking rules',
      'Basic Lock In access',
      'Core schedules and saved rules',
      'Local device controls'
    ],
    ctaLabel: 'Start free',
    ctaHref: PLAY_STORE_URL
  },
  {
    id: 'apprentice',
    name: 'Apprentice',
    tag: 'Best solo value',
    monthly: '$4.99/mo',
    yearly: '$49.99/yr',
    priceMonthlyValue: '$4.99',
    priceYearlyValue: '$49.99',
    periodMonthly: '/mo',
    periodYearly: '/yr',
    summary: 'Unlimited solo control with stricter sessions and deeper personalization.',
    features: [
      'Unlimited solo blocking',
      'Saved schedules',
      'Addict Mode',
      'Custom block media',
      'Theme Studio',
      'Profile customization'
    ],
    ctaLabel: 'Choose Apprentice',
    ctaHref: PLAY_STORE_URL
  },
  {
    id: 'journeyman-partner',
    name: 'Journeyman Partner',
    tag: 'Shared accountability',
    monthly: '$8.99/mo',
    yearly: '$79.99/yr',
    priceMonthlyValue: '$8.99',
    priceYearlyValue: '$79.99',
    periodMonthly: '/mo',
    periodYearly: '/yr',
    summary: 'Adds one shared partner seat for approvals, sessions, and alerts.',
    features: [
      'Everything in Apprentice',
      'One shared partner seat',
      'Partner sessions',
      'Partner alerts',
      'Approval-state workflows'
    ],
    ctaLabel: 'Choose Partner',
    ctaHref: PLAY_STORE_URL
  },
  {
    id: 'journeyman-family',
    name: 'Journeyman Family',
    tag: 'Parent controls',
    monthly: '$12.99/mo',
    yearly: '$119.99/yr',
    priceMonthlyValue: '$12.99',
    priceYearlyValue: '$119.99',
    periodMonthly: '/mo',
    periodYearly: '/yr',
    summary: 'Built for households with linked child devices and shared schedules.',
    features: [
      'Everything in Apprentice',
      'Parent controls',
      'Up to 3 linked child devices',
      'Household scheduling',
      'Family-focused device oversight'
    ],
    ctaLabel: 'Choose Family',
    ctaHref: PLAY_STORE_URL
  },
  {
    id: 'journeyman-total',
    name: 'Journeyman Total',
    tag: 'Partner + Family',
    monthly: '$16.99/mo',
    yearly: '$159.99/yr',
    priceMonthlyValue: '$16.99',
    priceYearlyValue: '$159.99',
    periodMonthly: '/mo',
    periodYearly: '/yr',
    summary: 'Combines partner accountability with family controls in one plan.',
    features: [
      'Everything in Journeyman Partner',
      'Everything in Journeyman Family',
      'Partner sessions and approvals',
      'Parent controls for linked devices'
    ],
    ctaLabel: 'Choose Total',
    ctaHref: PLAY_STORE_URL
  },
  {
    id: 'master-smith',
    name: 'Master Smith',
    tag: 'Flagship',
    monthly: '$19.99/mo',
    yearly: '$179.99/yr',
    priceMonthlyValue: '$19.99',
    priceYearlyValue: '$179.99',
    periodMonthly: '/mo',
    periodYearly: '/yr',
    summary: 'Recovery Tools, deeper premium limits, and the highest customization ceiling.',
    features: [
      'Everything in Journeyman Total',
      'Recovery Tools',
      'Custom profile photos',
      'Deeper premium limits',
      'Future flagship additions'
    ],
    ctaLabel: 'Choose Master Smith',
    ctaHref: PLAY_STORE_URL,
    featured: true
  }
];

function renderMembershipPlans(mode = 'monthly') {
  const host = document.querySelector('[data-membership-grid]');
  if (!host) return;

  host.innerHTML = MEMBERSHIP_PLANS.map((plan) => {
    const price = mode === 'yearly' ? plan.yearly : plan.monthly;
    const priceValue = mode === 'yearly' ? plan.priceYearlyValue : plan.priceMonthlyValue;
    const period = mode === 'yearly' ? (plan.periodYearly || '') : (plan.periodMonthly || '');
    const featuredClass = plan.featured ? ' plan-card--featured' : '';
    const aria = `${plan.name} plan`;

    return `
      <article class="plan-card${featuredClass}" aria-label="${aria}">
        <div class="plan-head">
          <div class="plan-name-row">
            <div>
              <span class="plan-tag">${plan.tag}</span>
              <h3 class="plan-name">${plan.name}</h3>
            </div>
          </div>
          <div class="plan-price">
            ${priceValue}
            ${period ? `<small>${period}</small>` : ''}
            ${plan.id === 'free' ? '' : `<span>${price}</span>`}
          </div>
          <p class="plan-summary">${plan.summary}</p>
        </div>
        <ul class="plan-features">
          ${plan.features.map((feature) => `<li>${feature}</li>`).join('')}
        </ul>
        <div class="plan-actions">
          <a class="button button--secondary" href="${plan.ctaHref}" target="_blank" rel="noreferrer">${plan.ctaLabel}</a>
        </div>
      </article>
    `;
  }).join('');
}

function initMembershipToggle() {
  const toggles = document.querySelectorAll('[data-membership-mode]');
  if (!toggles.length) return;

  let mode = 'monthly';
  renderMembershipPlans(mode);

  toggles.forEach((button) => {
    button.addEventListener('click', () => {
      mode = button.dataset.membershipMode || 'monthly';
      toggles.forEach((item) => item.classList.toggle('is-active', item === button));
      renderMembershipPlans(mode);
    });
  });
}

function initNav() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });

  document.addEventListener('click', (event) => {
    const withinNav = nav.contains(event.target);
    const withinToggle = toggle.contains(event.target);
    if (!withinNav && !withinToggle) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

function initFaq() {
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach((card) => {
    card.addEventListener('toggle', () => {
      if (!card.open) return;
      faqCards.forEach((other) => {
        if (other !== card) other.open = false;
      });
    });
  });
}

function initReveal() {
  const items = document.querySelectorAll('[data-reveal]');
  if (!items.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function setSupportEmail() {
  document.querySelectorAll('[data-support-email]').forEach((node) => {
    if (node.tagName.toLowerCase() === 'a') {
      node.textContent = SUPPORT_EMAIL;
      node.href = `mailto:${SUPPORT_EMAIL}`;
    } else {
      node.textContent = SUPPORT_EMAIL;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMembershipToggle();
  initFaq();
  initReveal();
  setYear();
  setSupportEmail();
});
