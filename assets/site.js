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
      tone: "free",
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
      badge: "Favorite!",
      tone: "apprentice",
      priceMonthly: "$4.99/mo",
      priceYearly: "$49.99/yr",
      blurb: "Unlimited solo control with stricter blocking, deeper customization, and 3x Ember Shard earnings.",
      bullets: [
        "Unlimited solo blocking",
        "Lock Ins and saved schedules",
        "Addict Mode",
        "Earn Ember Shards at 3x the normal rate",
        "Custom block media",
        "Theme Studio",
        "Profile customization"
      ],
      promoCards: [
        {
          text: "Free Dragon Included!",
          tone: "dragon"
        }
      ],
      featured: true,
      cta: "Try for free",
      ctaType: "trial"
    },
    {
      name: "Journeyman Partner",
      tag: "Shared accountability",
      badge: "Two Memberships Included!",
      tone: "partner",
      priceMonthly: "$8.99/mo",
      priceYearly: "$67.67/yr",
      blurb: "Includes every Apprentice perk for both people on the plan, including 3x Ember Shard earnings, plus a shared partner seat for approvals, alerts, and shared sessions.",
      bullets: [
        "All Apprentice perks for you and your partner, including 3x Ember Shard earnings",
        "One shared partner seat",
        "Partner sessions",
        "Partner alerts",
        "Approval-state workflows"
      ],
      promoCards: [
        {
          text: "Free Dragon Included!",
          tone: "dragon"
        }
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Journeyman Family",
      tag: "Household controls",
      badge: "For you and your kids!",
      tone: "family",
      priceMonthly: "$9.99/mo",
      priceYearly: "$79.99/yr",
      blurb: "Includes every Apprentice perk across the plan, including linked child devices and 3x Ember Shard earnings, plus parent controls and household scheduling.",
      bullets: [
        "All Apprentice perks for the parent account and linked child devices, including 3x Ember Shard earnings",
        "Parent controls",
        "Up to 3 linked child devices",
        "Household scheduling",
        "Family management controls"
      ],
      promoCards: [
        {
          text: "Free Dragon Included!",
          tone: "dragon"
        }
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Journeyman Total",
      tag: "Partner + Family",
      badge: "A Family Favorite!",
      tone: "total",
      priceMonthly: "$12.99/mo",
      priceYearly: "$89.99/yr",
      blurb: "Includes every Apprentice perk for everyone on the plan, including your partner, linked child devices, and 3x Ember Shard earnings, plus the full Partner and Family feature set.",
      bullets: [
        "All Apprentice perks for you, your partner, and linked child devices, including 3x Ember Shard earnings",
        "Includes all Partner features",
        "Includes all Family features",
        "Shared accountability + household control",
        "Broader premium depth"
      ],
      promoCards: [
        {
          text: "Free Dragon Included!",
          tone: "dragon"
        }
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play"
    },
    {
      name: "Master Smith",
      tag: "Flagship tier",
      badge: "VIP",
      tone: "master",
      priceMonthly: "$19.99/mo",
      priceYearly: "$179.99/yr",
      blurb: "Keeps every Apprentice perk on the account, plus recovery-focused tools, deeper customization, and the highest premium limits.",
      bullets: [
        "All Apprentice perks stay included, including 3x Ember Shard earnings",
        "Recovery Tools",
        "Custom profile photos",
        "Deeper premium limits",
        "Future flagship additions"
      ],
      promoCards: [
        {
          text: "Free Dragon Included!",
          tone: "dragon"
        },
        {
          text: "Free Monthly Ember Shards Package",
          tone: "ember"
        }
      ],
      featured: false,
      cta: "Get on Google Play",
      ctaType: "play",
      highlightBullet: "Future flagship additions"
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
      const ariaCurrent = active ? ' aria-current="page"' : '';
      return `<a class="${active}" href="${item.href}"${ariaCurrent}>${item.label}</a>`;
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
    mount.innerHTML = SITE.plans.map((plan, index) => {
      const isTrial = plan.ctaType === 'trial';
      const isActive = Boolean(plan.featured);
      const href = isTrial ? '#trial' : SITE.googlePlayUrl;
      const promoCards = Array.isArray(plan.promoCards) ? plan.promoCards : [];
      const attrs = isTrial
        ? 'href="#trial" data-trial-modal="true"'
        : `href="${href}" target="_blank" rel="noopener noreferrer"`;
      const buttonClass = isTrial ? 'button--primary' : 'button--secondary';
      const promoBadgeClass = ["plan-badge", "plan-badge--promo"];
      if (plan.badgeStyle) promoBadgeClass.push(`plan-badge--${plan.badgeStyle}`);
      const promoBadge = plan.badge ? `<div class="${promoBadgeClass.join(" ")}">${plan.badge}</div>` : '';
      return `
      <article class="plan-card${isActive ? ' is-active' : ''}" data-plan-index="${index}" data-featured="${plan.featured}" data-plan-tone="${plan.tone}">
        <div class="plan-badge-row">
          <div class="plan-badge plan-badge--primary">${plan.tag}</div>
          ${promoBadge}
        </div>
        <h3>${plan.name}</h3>
        <div class="plan-price">${plan.priceMonthly}</div>
        <div class="tiny-note">${plan.priceYearly}</div>
        <p class="plan-sub">${plan.blurb}</p>
        <ul class="feature-list plan-features">
          ${plan.bullets.map((bullet) => bullet === plan.highlightBullet
            ? `<li class="feature-list__item feature-list__item--flagship"><span class="feature-list__callout">Flagship additions</span><span>${bullet}</span></li>`
            : `<li>${bullet}</li>`).join("")}
        </ul>
        ${promoCards.length ? `
        <div class="plan-mini-card-group" aria-label="Included bonuses">
          ${promoCards.map((card) => `
            <div class="plan-mini-card plan-mini-card--${card.tone || 'dragon'}">
              <span class="plan-mini-card__text">${card.text}</span>
            </div>
          `).join("")}
        </div>` : ''}
        <div class="plan-footer">
          <a class="button ${buttonClass} button--small plan-card__cta" ${attrs}>${plan.cta}</a>
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
      <details class="faq-item${idx === 0 ? ' is-active' : ''}" ${idx === 0 ? 'open' : ''}>
        <summary class="faq-question"><span>${item.q}</span><span aria-hidden="true">+</span></summary>
        <div class="faq-answer">${item.a}</div>
      </details>
    `).join("");
  });
}

function setupDetails() {
  const items = Array.from(document.querySelectorAll('.faq-item'));
  if (!items.length) return;

  const setActiveItem = (activeItem) => {
    items.forEach((item) => {
      const isActive = item === activeItem && item.hasAttribute('open');
      item.classList.toggle('is-active', isActive);
    });
  };

  items.forEach((item) => {
    const summary = item.querySelector('.faq-question');
    if (!summary) return;
    summary.addEventListener('click', (event) => {
      event.preventDefault();
      const shouldOpen = !item.hasAttribute('open');

      items.forEach((other) => {
        if (other !== item) {
          other.removeAttribute('open');
          other.classList.remove('is-active');
        }
      });

      if (shouldOpen) {
        item.setAttribute('open', '');
        setActiveItem(item);
      } else {
        item.removeAttribute('open');
        setActiveItem(null);
      }
    });
  });

  setActiveItem(items.find((item) => item.hasAttribute('open')) || null);
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
    if (!sections.length) return;

    let activeId = '';
    let ticking = false;
    let pendingTargetId = '';
    let pendingTargetTimer = 0;

    const setActive = (id) => {
      if (!id || activeId === id) return;
      activeId = id;
      links.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
      sections.forEach((section) => {
        section.classList.toggle('is-active', section.id === id);
      });
    };

    const clearPendingTarget = () => {
      if (pendingTargetTimer) window.clearTimeout(pendingTargetTimer);
      pendingTargetTimer = 0;
      pendingTargetId = '';
    };

    const setPendingTarget = (id) => {
      clearPendingTarget();
      pendingTargetId = id;
      pendingTargetTimer = window.setTimeout(() => {
        clearPendingTarget();
        requestSync();
      }, 900);
    };

    const targetIsComfortablyVisible = (target) => {
      const offset = headerOffset();
      const rect = target.getBoundingClientRect();
      const topBound = offset + 12;
      const bottomBound = window.innerHeight - 24;
      const visibleTop = Math.max(rect.top, topBound);
      const visibleBottom = Math.min(rect.bottom, bottomBound);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const requiredHeight = Math.min(Math.max(rect.height * 0.38, 96), 220);
      return visibleHeight >= requiredHeight;
    };

    const scrollToSection = (target, behavior) => {
      const top = window.scrollY + target.getBoundingClientRect().top - headerOffset();
      window.scrollTo({ top, behavior });
    };

    const computeActiveSection = () => {
      const offset = headerOffset();
      const topBound = offset + 18;
      const bottomBound = window.innerHeight - 24;
      const targetCenter = Math.max(topBound + 110, Math.min(window.innerHeight * 0.4, bottomBound - 110));
      let current = null;
      let bestScore = -Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, topBound);
        const visibleBottom = Math.min(rect.bottom, bottomBound);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        if (!visibleHeight) return;

        const visibleCenter = visibleTop + visibleHeight / 2;
        const distancePenalty = Math.abs(visibleCenter - targetCenter);
        const score = visibleHeight * 3 - distancePenalty;

        if (score > bestScore) {
          bestScore = score;
          current = section;
        }
      });

      if (current) return current;

      const firstVisible = sections.find((section) => section.getBoundingClientRect().bottom > offset + 24);
      return firstVisible || sections[sections.length - 1];
    };

    const syncActiveSection = () => {
      ticking = false;
      if (pendingTargetId) {
        const pendingTarget = sections.find((section) => section.id === pendingTargetId);
        if (!pendingTarget) {
          clearPendingTarget();
        } else if (!targetIsComfortablyVisible(pendingTarget)) {
          setActive(pendingTargetId);
          return;
        } else {
          clearPendingTarget();
        }
      }
      const current = computeActiveSection();
      if (current?.id) setActive(current.id);
    };

    const requestSync = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(syncActiveSection);
    };

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href');
        if (!id || !id.startsWith('#')) return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        history.replaceState(null, '', id);
        setActive(id.slice(1));
        if (!targetIsComfortablyVisible(target)) {
          setPendingTarget(target.id);
          scrollToSection(target, 'smooth');
        } else {
          clearPendingTarget();
        }
      });
    });

    window.addEventListener('scroll', requestSync, { passive: true });
    window.addEventListener('resize', requestSync);

    if (window.location.hash) {
      const hashed = document.querySelector(window.location.hash);
      if (hashed) {
        setTimeout(() => {
          setActive(hashed.id);
          if (!targetIsComfortablyVisible(hashed)) {
            scrollToSection(hashed, 'auto');
            clearPendingTarget();
          } else {
            requestSync();
          }
        }, 0);
      }
    } else if (sections[0] && sections[0].id) {
      setActive(sections[0].id);
      requestSync();
    }
  });
}

function setupPlanRails() {
  document.querySelectorAll('.plan-rail').forEach((rail) => {
    const cards = Array.from(rail.querySelectorAll('.plan-card'));
    if (!cards.length) return;
    const interactiveSelector = 'a, button, input, textarea, select, summary, [role="button"]';

    rail.tabIndex = 0;
    rail.setAttribute('role', 'region');
    rail.setAttribute('aria-label', 'Membership plans');

    let pointerActive = false;
    let dragMoved = false;
    let startX = 0;
    let startScrollLeft = 0;
    let activeIndex = cards.findIndex((card) => card.dataset.featured === 'true');
    let hasInteracted = false;
    let ticking = false;

    if (activeIndex < 0) activeIndex = 0;

    const setActiveCard = (nextIndex) => {
      const boundedIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
      activeIndex = boundedIndex;
      cards.forEach((card, index) => {
        const isActive = index === boundedIndex;
        card.classList.toggle('is-active', isActive);
      });
    };

    const updateEdgePadding = () => {
      const sampleCard = cards[0];
      if (!sampleCard) return;
      const cardWidth = sampleCard.getBoundingClientRect().width;
      const endPadding = Math.max((rail.clientWidth - cardWidth) / 2, 0);
      rail.style.setProperty('--rail-edge-padding-start', '0px');
      rail.style.setProperty('--rail-edge-padding-end', `${endPadding}px`);
    };

    const centerCardInRail = (index, behavior = 'auto') => {
      const target = cards[index];
      if (!target) return;
      const railRect = rail.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const delta = (targetRect.left + targetRect.width / 2) - (railRect.left + railRect.width / 2);
      rail.scrollTo({ left: rail.scrollLeft + delta, behavior });
    };

    const computeCenteredCardIndex = () => {
      const railRect = rail.getBoundingClientRect();
      const railCenter = railRect.left + railRect.width / 2;
      let bestIndex = activeIndex;
      let bestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const visibleLeft = Math.max(rect.left, railRect.left);
        const visibleRight = Math.min(rect.right, railRect.right);
        const visibleWidth = Math.max(0, visibleRight - visibleLeft);
        if (!visibleWidth) return;

        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - railCenter) - (visibleWidth / rect.width) * 24;
        if (distance < bestDistance) {
          bestDistance = distance;
          bestIndex = index;
        }
      });

      return bestIndex;
    };

    const syncActiveCard = () => {
      ticking = false;
      if (!hasInteracted) return;
      setActiveCard(computeCenteredCardIndex());
    };

    const requestSync = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(syncActiveCard);
    };

    const isInteractiveTarget = (target) =>
      target instanceof Element && Boolean(target.closest(interactiveSelector));

    const activateCard = (nextIndex, behavior = 'smooth') => {
      hasInteracted = true;
      setActiveCard(nextIndex);
      centerCardInRail(nextIndex, behavior);
    };

    const endDrag = (event, { activate = false } = {}) => {
      if (!pointerActive) return;
      const shouldActivate =
        activate &&
        !dragMoved &&
        !isInteractiveTarget(event?.target);

      pointerActive = false;
      rail.classList.remove('is-dragging');
      if (event && typeof event.pointerId === 'number' && rail.hasPointerCapture?.(event.pointerId)) {
        rail.releasePointerCapture(event.pointerId);
      }

      if (shouldActivate) {
        const card = event.target instanceof Element ? event.target.closest('.plan-card') : null;
        const nextIndex = card ? cards.indexOf(card) : -1;
        if (nextIndex >= 0) activateCard(nextIndex);
      }
    };

    rail.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      if (isInteractiveTarget(event.target)) return;
      pointerActive = true;
      hasInteracted = true;
      dragMoved = false;
      startX = event.clientX;
      startScrollLeft = rail.scrollLeft;
      rail.classList.add('is-dragging');
      rail.setPointerCapture?.(event.pointerId);
    });

    rail.addEventListener('pointermove', (event) => {
      if (!pointerActive) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 6) dragMoved = true;
      rail.scrollLeft = startScrollLeft - delta;
    });

    rail.addEventListener('pointerup', (event) => endDrag(event, { activate: true }));
    rail.addEventListener('pointercancel', endDrag);
    rail.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') endDrag(event);
    });

    rail.addEventListener('click', (event) => {
      if (isInteractiveTarget(event.target)) {
        dragMoved = false;
        return;
      }
      const card = event.target instanceof Element ? event.target.closest('.plan-card') : null;
      if (!dragMoved && card) {
        const nextIndex = cards.indexOf(card);
        if (nextIndex >= 0 && nextIndex !== activeIndex) activateCard(nextIndex);
        return;
      }
      if (!dragMoved) return;
      event.preventDefault();
      event.stopPropagation();
      dragMoved = false;
    }, true);

    updateEdgePadding();
    setActiveCard(activeIndex);

    rail.addEventListener('scroll', () => {
      hasInteracted = true;
      requestSync();
    }, { passive: true });

    rail.addEventListener('keydown', (event) => {
      let nextIndex = activeIndex;

      if (event.key === 'ArrowRight') nextIndex += 1;
      else if (event.key === 'ArrowLeft') nextIndex -= 1;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = cards.length - 1;
      else return;

      event.preventDefault();
      nextIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
      activateCard(nextIndex, 'auto');
    });

    window.addEventListener('resize', () => {
      updateEdgePadding();
      hasInteracted = true;
      requestSync();
    });
  });
}

const HOURS_COUNTER_FORMATTER = new Intl.NumberFormat('en-US');
const HOURS_COUNTER_ANIMATION_MS = 760;

function parseHoursCounterEpoch(counter) {
  const rawValue = counter.dataset.hoursCounterEpoch;
  if (!rawValue) return Date.now();

  const numericValue = Number(rawValue);
  if (Number.isFinite(numericValue)) return numericValue;

  const parsedValue = Date.parse(rawValue);
  return Number.isFinite(parsedValue) ? parsedValue : Date.now();
}

function createHoursCounterCell(digit) {
  const cell = document.createElement('span');
  cell.className = 'hours-counter-cell';
  cell.textContent = String(digit);
  return cell;
}

function createHoursCounterDigit(previousDigit, nextDigit, shouldAnimate, isNewDigit) {
  const digit = document.createElement('span');
  digit.className = 'hours-counter-digit';
  if (isNewDigit) digit.classList.add('is-new');

  const track = document.createElement('span');
  track.className = 'hours-counter-track';

  const delta = shouldAnimate ? (nextDigit - previousDigit + 10) % 10 : 0;
  const sequence = delta === 0 ? [nextDigit] : Array.from({ length: delta + 1 }, (_, index) => (previousDigit + index) % 10);

  sequence.forEach((digitValue) => {
    track.append(createHoursCounterCell(digitValue));
  });

  if (delta > 0) {
    track.dataset.tickerSteps = String(delta);
    track.dataset.tickerTargetDigit = String(nextDigit);
  }

  digit.append(track);
  return digit;
}

function createHoursCounterSeparator(character) {
  const separator = document.createElement('span');
  separator.className = 'hours-counter-separator';
  separator.textContent = character;
  return separator;
}

function finalizeHoursCounterTrack(track) {
  if (track.dataset.tickerSettled === 'true') return;
  track.dataset.tickerSettled = 'true';

  const finalDigit = Number(track.dataset.tickerTargetDigit || 0);
  track.classList.remove('is-animating');
  track.style.transform = 'translateY(0)';
  track.replaceChildren(createHoursCounterCell(finalDigit));
}

function runAfterNextPaint(callback) {
  if (document.visibilityState !== 'visible') {
    window.setTimeout(callback, 16);
    return;
  }

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(callback);
  });
}

function animateHoursCounter(counter) {
  const tracks = Array.from(counter.querySelectorAll('.hours-counter-track[data-ticker-steps]'));
  if (!tracks.length) return;

  runAfterNextPaint(() => {
    tracks.forEach((track) => {
      const steps = Number(track.dataset.tickerSteps || 0);
      if (!steps) return;
      const firstCell = track.firstElementChild instanceof HTMLElement ? track.firstElementChild : null;
      const cellHeight = firstCell?.getBoundingClientRect().height || 0;
      const translateY = cellHeight > 0
        ? `translateY(-${cellHeight * steps}px)`
        : `translateY(calc(${steps} * -1em))`;

      const finalize = () => finalizeHoursCounterTrack(track);

      // Force the browser to commit the starting layout before enabling the transition.
      track.getBoundingClientRect();
      track.classList.add('is-animating');
      track.style.transform = translateY;
      track.addEventListener('transitionend', finalize, { once: true });
      window.setTimeout(finalize, HOURS_COUNTER_ANIMATION_MS + 120);
    });
  });
}

function renderHoursCounter(counter, value, shouldAnimate) {
  const safeValue = Math.max(0, value);
  const previousValue = Number(counter.dataset.hoursCounterValue || safeValue);
  const formattedValue = HOURS_COUNTER_FORMATTER.format(safeValue);
  const nextDigits = String(safeValue);
  const previousDigits = String(Math.max(0, previousValue));
  const totalDigits = nextDigits.length;
  const fragment = document.createDocumentFragment();
  let digitIndex = 0;

  for (const character of formattedValue) {
    if (/\d/.test(character)) {
      const placeFromRight = totalDigits - digitIndex - 1;
      const previousIndex = previousDigits.length - placeFromRight - 1;
      const previousDigit = previousIndex >= 0 ? Number(previousDigits[previousIndex]) : 0;
      const nextDigit = Number(character);
      const isNewDigit = previousIndex < 0;

      fragment.append(createHoursCounterDigit(
        shouldAnimate ? previousDigit : nextDigit,
        nextDigit,
        shouldAnimate,
        isNewDigit
      ));

      digitIndex += 1;
      continue;
    }

    fragment.append(createHoursCounterSeparator(character));
  }

  counter.replaceChildren(fragment);
  counter.dataset.hoursCounterValue = String(safeValue);
  counter.setAttribute('aria-label', `${formattedValue} hours regained through FocusForge`);

  if (shouldAnimate) animateHoursCounter(counter);
}

function setupHoursCounter() {
  document.querySelectorAll('[data-hours-counter]').forEach((counter) => {
    if (counter.dataset.counterBound === 'true') return;
    counter.dataset.counterBound = 'true';

    const startValue = Number(counter.dataset.hoursCounterStart || 0);
    const step = Number(counter.dataset.hoursCounterStep || 5);
    const intervalMs = Number(counter.dataset.hoursCounterInterval || 1500);
    const epochMs = parseHoursCounterEpoch(counter);

    const getCurrentValue = () => {
      const elapsedMs = Math.max(0, Date.now() - epochMs);
      const increments = Math.floor(elapsedMs / intervalMs);
      return Math.max(0, startValue + increments * step);
    };

    const syncCounter = (shouldAnimate) => {
      const nextValue = getCurrentValue();
      const currentValue = Number(counter.dataset.hoursCounterValue || Number.NaN);
      const animateUpdate = shouldAnimate && Number.isFinite(currentValue) && nextValue !== currentValue;
      renderHoursCounter(counter, nextValue, animateUpdate);
    };

    const scheduleNextSync = () => {
      const elapsedMs = Math.max(0, Date.now() - epochMs);
      const remainderMs = elapsedMs % intervalMs;
      const delayMs = remainderMs === 0 ? intervalMs : intervalMs - remainderMs;

      window.setTimeout(() => {
        syncCounter(true);
        scheduleNextSync();
      }, delayMs);
    };

    syncCounter(false);
    scheduleNextSync();

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') syncCounter(false);
    });
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
  setupPlanRails();
  setupHoursCounter();
  setYear();
});
