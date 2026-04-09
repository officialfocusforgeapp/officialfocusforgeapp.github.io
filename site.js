:root {
  --bg: #07090d;
  --bg-elevated: rgba(16, 19, 28, 0.9);
  --bg-panel: rgba(19, 24, 35, 0.84);
  --bg-soft: rgba(255, 255, 255, 0.04);
  --surface: #0e121a;
  --surface-2: #111725;
  --surface-3: #151d2b;
  --text: #f4f1e8;
  --text-strong: #fffaf0;
  --text-muted: #b7b6b1;
  --text-subtle: #8e96a5;
  --line: rgba(255, 255, 255, 0.08);
  --line-strong: rgba(255, 255, 255, 0.14);
  --accent: #f59a2c;
  --accent-2: #d7b25e;
  --accent-cool: #7ec7ff;
  --accent-rose: #f277b0;
  --accent-green: #a3d44d;
  --success: #8ed07a;
  --warning: #f0c15a;
  --danger: #ff7d67;
  --shadow-lg: 0 24px 90px rgba(0, 0, 0, 0.45);
  --shadow-md: 0 16px 48px rgba(0, 0, 0, 0.32);
  --shadow-sm: 0 10px 24px rgba(0, 0, 0, 0.18);
  --radius-1: 14px;
  --radius-2: 20px;
  --radius-3: 28px;
  --content-max: 1200px;
  --content-narrow: 860px;
  --nav-height: 76px;
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-serif: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Palatino, Georgia, serif;
  --transition-fast: 160ms ease;
  --transition-base: 280ms cubic-bezier(.2,.8,.2,1);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  font-family: var(--font-sans);
  color: var(--text);
  background:
    radial-gradient(circle at 20% 0%, rgba(245, 154, 44, 0.18), transparent 26%),
    radial-gradient(circle at 84% 12%, rgba(126, 199, 255, 0.12), transparent 22%),
    linear-gradient(180deg, #0a0d13 0%, #06070b 38%, #07090d 100%);
  line-height: 1.6;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(120deg, rgba(255,255,255,0.03), transparent 18%, transparent 82%, rgba(255,255,255,0.025)),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.012) 0 1px, transparent 1px 80px);
  opacity: 0.32;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

img, svg {
  display: block;
  max-width: 100%;
}

button,
input,
textarea,
select {
  font: inherit;
}

button {
  color: inherit;
}

main,
section,
header,
footer,
article,
nav {
  position: relative;
}

.container {
  width: min(calc(100% - 2rem), var(--content-max));
  margin: 0 auto;
}

.container--narrow {
  width: min(calc(100% - 2rem), var(--content-narrow));
  margin: 0 auto;
}

.skip-link {
  position: absolute;
  left: 1rem;
  top: -3rem;
  background: var(--text);
  color: #000;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  z-index: 1000;
}

.skip-link:focus {
  top: 1rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(20px);
  background: rgba(8, 10, 15, 0.66);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.site-header__inner {
  min-height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.9rem;
  min-width: 0;
}

.brand__mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background:
    radial-gradient(circle at 30% 28%, rgba(255, 248, 230, 0.9), transparent 24%),
    linear-gradient(160deg, rgba(245,154,44,0.95), rgba(130,72,14,0.95));
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.35),
    0 10px 30px rgba(245,154,44,0.24);
  position: relative;
  overflow: hidden;
}

.brand__mark::before,
.brand__mark::after {
  content: "";
  position: absolute;
  inset: 0;
}

.brand__mark::before {
  background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.14) 100%);
}

.brand__mark::after {
  clip-path: polygon(28% 12%, 54% 12%, 64% 28%, 84% 37%, 76% 52%, 58% 46%, 60% 86%, 42% 86%, 44% 45%, 24% 54%, 16% 36%, 36% 28%);
  background: linear-gradient(180deg, rgba(25,18,14,0.95), rgba(54,39,29,0.95));
  transform: scale(0.82);
}

.brand__text {
  min-width: 0;
}

.brand__name {
  display: block;
  font-size: 1rem;
  line-height: 1.1;
  letter-spacing: 0.03em;
  font-weight: 700;
  color: var(--text-strong);
}

.brand__sub {
  display: block;
  font-size: 0.77rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-subtle);
  margin-top: 0.18rem;
}

.nav-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.03);
}

.nav-toggle__bar,
.nav-toggle__bar::before,
.nav-toggle__bar::after {
  width: 18px;
  height: 2px;
  border-radius: 999px;
  background: var(--text);
  display: block;
  position: relative;
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.nav-toggle__bar::before,
.nav-toggle__bar::after {
  content: "";
  position: absolute;
  left: 0;
}

.nav-toggle__bar::before { top: -6px; }
.nav-toggle__bar::after { top: 6px; }

.nav-toggle[aria-expanded="true"] .nav-toggle__bar {
  background: transparent;
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar::before {
  top: 0;
  transform: rotate(45deg);
}

.nav-toggle[aria-expanded="true"] .nav-toggle__bar::after {
  top: 0;
  transform: rotate(-45deg);
}

.site-nav {
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 1rem;
  width: min(360px, calc(100vw - 2rem));
  padding: 1rem;
  border-radius: 20px;
  background: rgba(10, 13, 19, 0.95);
  border: 1px solid var(--line-strong);
  box-shadow: var(--shadow-lg);
  opacity: 0;
  transform: translateY(-0.4rem);
  pointer-events: none;
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.site-nav.is-open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.site-nav__list,
.footer-nav,
.legal-hub__links,
.article-nav {
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-nav__list {
  display: grid;
  gap: 0.4rem;
}

.site-nav__link {
  display: block;
  padding: 0.8rem 0.9rem;
  border-radius: 12px;
  color: var(--text-muted);
}

.site-nav__link:hover,
.site-nav__link:focus-visible,
.footer-nav a:hover,
.footer-nav a:focus-visible,
.legal-hub__links a:hover,
.legal-hub__links a:focus-visible,
.inline-link:hover,
.inline-link:focus-visible {
  color: var(--text-strong);
}

.site-nav__link:hover,
.site-nav__link:focus-visible {
  background: rgba(255,255,255,0.04);
}

.site-nav__actions {
  margin-top: 0.8rem;
  padding-top: 0.9rem;
  border-top: 1px solid var(--line);
  display: grid;
  gap: 0.7rem;
}

.hero {
  padding: 3.5rem 0 1.2rem;
}

.hero__grid {
  display: grid;
  gap: 1.5rem;
  align-items: stretch;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
  font-size: 0.83rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.eyebrow::before {
  content: "";
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--accent-2), var(--accent));
  box-shadow: 0 0 18px rgba(245,154,44,0.45);
}

.hero h1,
.article-hero h1 {
  margin: 1rem 0 1rem;
  font-family: var(--font-serif);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.04em;
  color: var(--text-strong);
}

.hero h1 {
  font-size: clamp(2.7rem, 7vw, 5.9rem);
  max-width: 12ch;
}

.hero__lede,
.article-hero__lede,
.section__lede {
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: var(--text-muted);
  max-width: 62ch;
}

.hero__actions,
.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1.4rem;
}

.button,
.button:visited {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 48px;
  padding: 0.82rem 1.15rem;
  border-radius: 999px;
  border: 1px solid transparent;
  font-weight: 650;
  transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast), color var(--transition-fast), box-shadow var(--transition-fast);
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button--primary {
  color: #120b04;
  background: linear-gradient(180deg, #ffcb7f, #f59a2c 58%, #da7e14);
  box-shadow: 0 16px 34px rgba(245,154,44,0.22);
}

.button--primary:hover,
.button--primary:focus-visible {
  box-shadow: 0 18px 42px rgba(245,154,44,0.28);
}

.button--secondary {
  border-color: rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text-strong);
}

.button--ghost {
  border-color: transparent;
  background: transparent;
  color: var(--text-muted);
  padding-inline: 0;
}

.meta-row,
.hero-metrics,
.trust-strip,
.stack,
.stats-grid,
.membership-grid,
.system-grid,
.depth-grid,
.use-case-grid,
.faq-grid,
.cards-grid,
.permissions-grid,
.article-grid,
.policy-grid,
.contact-grid,
.support-grid,
.footer-grid {
  display: grid;
  gap: 1rem;
}

.hero-metrics {
  margin-top: 1.6rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.metric {
  padding: 1rem;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.035);
}

.metric__label {
  display: block;
  color: var(--text-subtle);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.45rem;
}

.metric__value {
  display: block;
  font-size: 1rem;
  color: var(--text-strong);
  line-height: 1.35;
}

.hero-visual,
.glass-panel,
.card,
.plan-card,
.article-card,
.callout,
.permission-card,
.faq-card,
.use-case,
.depth-card,
.system-card,
.info-card,
.footer-card,
.support-card,
.policy-card {
  border-radius: var(--radius-3);
  border: 1px solid var(--line);
  background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
  box-shadow: var(--shadow-md);
}

.hero-visual {
  min-height: 620px;
  padding: 1.2rem;
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.hero-visual::before,
.hero-visual::after {
  content: "";
  position: absolute;
  inset: auto;
  border-radius: 999px;
  pointer-events: none;
}

.hero-visual::before {
  width: 18rem;
  height: 18rem;
  top: -6rem;
  right: -4rem;
  background: radial-gradient(circle, rgba(245,154,44,0.34), transparent 64%);
}

.hero-visual::after {
  width: 14rem;
  height: 14rem;
  bottom: -5rem;
  left: -4rem;
  background: radial-gradient(circle, rgba(126,199,255,0.18), transparent 66%);
}

.mock-shell {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 1rem;
  height: 100%;
}

.mock-topbar,
.mock-screen,
.mock-card,
.mock-rail,
.mock-tag,
.mock-list,
.mock-list__item,
.mock-progress,
.mock-progress__bar,
.mock-membership,
.mock-permission,
.mock-bottom {
  border-radius: 22px;
}

.mock-topbar,
.mock-screen,
.mock-card,
.mock-list__item,
.mock-membership,
.mock-permission,
.mock-bottom {
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(9, 12, 18, 0.78);
  backdrop-filter: blur(12px);
}

.mock-topbar {
  padding: 1rem 1.05rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.mock-dots {
  display: inline-flex;
  gap: 0.4rem;
}

.mock-dots span {
  width: 0.54rem;
  height: 0.54rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.18);
}

.mock-dots span:first-child { background: rgba(245,154,44,0.9); }
.mock-dots span:nth-child(2) { background: rgba(126,199,255,0.7); }

.mock-screen {
  flex: 1;
  padding: 1rem;
  display: grid;
  gap: 1rem;
}

.mock-stage {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 1rem;
}

.mock-card {
  padding: 1rem;
}

.mock-card--hero {
  min-height: 280px;
  background:
    radial-gradient(circle at 40% 15%, rgba(245,154,44,0.14), transparent 28%),
    linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
}

.mock-kicker,
.mock-title,
.mock-copy,
.mock-chip,
.mock-mini,
.mock-caption {
  display: block;
}

.mock-kicker {
  color: var(--accent-2);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
  margin-bottom: 0.75rem;
}

.mock-title {
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-strong);
  margin-bottom: 0.85rem;
}

.mock-copy,
.mock-caption,
.mock-mini {
  color: var(--text-muted);
  font-size: 0.92rem;
}

.mock-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
}

.mock-chip {
  padding: 0.42rem 0.75rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  font-size: 0.8rem;
}

.mock-card--stack {
  display: grid;
  gap: 0.85rem;
  align-content: start;
}

.mock-rail {
  height: 0.9rem;
  background: rgba(255,255,255,0.06);
  overflow: hidden;
  position: relative;
}

.mock-rail::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 76%;
  background: linear-gradient(90deg, rgba(245,154,44,0.95), rgba(126,199,255,0.7));
}

.mock-list {
  display: grid;
  gap: 0.7rem;
}

.mock-list__item {
  padding: 0.8rem 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.mock-list__left {
  display: grid;
  gap: 0.2rem;
}

.mock-list__title {
  color: var(--text-strong);
  font-size: 0.95rem;
  font-weight: 650;
}

.mock-list__meta {
  color: var(--text-subtle);
  font-size: 0.82rem;
}

.mock-pill {
  padding: 0.38rem 0.65rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  font-size: 0.75rem;
  color: var(--text-strong);
}

.mock-row-split {
  display: grid;
  gap: 1rem;
}

.mock-membership,
.mock-permission,
.mock-bottom {
  padding: 1rem;
}

.mock-membership__price {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-strong);
}

.mock-membership__price small {
  font-size: 0.82rem;
  color: var(--text-subtle);
}

.mock-permission ul,
.mock-membership ul,
.list-clean,
.policy-list,
.bullet-list,
.article-card ul,
.article-card ol,
.support-card ul,
.contact-list,
.plan-features {
  margin: 0;
  padding-left: 1.15rem;
}

.mock-permission li,
.mock-membership li,
.policy-list li,
.bullet-list li,
.article-card li,
.support-card li,
.contact-list li,
.plan-features li {
  color: var(--text-muted);
  margin: 0.38rem 0;
}

.mock-bottom {
  display: grid;
  gap: 0.8rem;
}

.mock-progress {
  height: 0.95rem;
  background: rgba(255,255,255,0.06);
  overflow: hidden;
  position: relative;
}

.mock-progress__bar {
  position: absolute;
  inset: 0;
  width: 68%;
  background: linear-gradient(90deg, rgba(245,154,44,0.92), rgba(245,154,44,0.25));
}

.hero-note,
.section-note,
.article-meta {
  color: var(--text-subtle);
  font-size: 0.92rem;
}

.section {
  padding: 1.35rem 0 1.35rem;
}

.section--spaced {
  padding: 4rem 0;
}

.section-head {
  margin-bottom: 1.5rem;
}

.section-head h2,
.section-head h3,
.section-title,
.article-card h2,
.article-card h3,
.article-card h4,
.support-card h2,
.support-card h3,
.policy-card h2,
.policy-card h3 {
  color: var(--text-strong);
  margin: 0 0 0.7rem;
  letter-spacing: -0.03em;
}

.section-head h2,
.section-title,
.article-card h2,
.policy-card h2,
.support-card h2 {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4vw, 3.35rem);
  line-height: 1.04;
}

.section-head h3,
.article-card h3,
.support-card h3,
.policy-card h3 {
  font-size: clamp(1.25rem, 2.2vw, 1.7rem);
}

.system-grid,
.depth-grid,
.use-case-grid,
.permissions-grid,
.cards-grid,
.footer-grid {
  grid-template-columns: 1fr;
}

.system-card,
.depth-card,
.use-case,
.permission-card,
.card,
.plan-card,
.info-card,
.footer-card,
.support-card,
.policy-card {
  padding: 1.2rem;
}

.system-card,
.depth-card,
.use-case,
.permission-card,
.plan-card,
.footer-card,
.support-card,
.policy-card {
  min-height: 100%;
}

.card-label,
.plan-tag,
.feature-tag,
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border-radius: 999px;
  padding: 0.36rem 0.68rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  color: var(--text-muted);
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.card-label::before,
.plan-tag::before,
.feature-tag::before,
.status-pill::before {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--accent);
}

.depth-card:nth-child(2) .feature-tag::before,
.permission-card:nth-child(2) .status-pill::before {
  background: var(--accent-cool);
}

.depth-card:nth-child(3) .feature-tag::before,
.permission-card:nth-child(3) .status-pill::before {
  background: var(--accent-green);
}

.depth-card:nth-child(4) .feature-tag::before,
.permission-card:nth-child(4) .status-pill::before {
  background: var(--accent-rose);
}

.card-copy,
.use-case p,
.permission-card p,
.plan-summary,
.footer-card p,
.article-card p,
.support-card p,
.policy-card p,
.plan-disclaimer {
  color: var(--text-muted);
}

.membership-shell {
  display: grid;
  gap: 1.2rem;
}

.membership-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  justify-content: space-between;
}

.membership-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.24rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.09);
}

.membership-toggle button {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--text-muted);
  min-height: 38px;
  padding: 0 0.9rem;
  border-radius: 999px;
  cursor: pointer;
}

.membership-toggle button.is-active {
  background: rgba(255,255,255,0.1);
  color: var(--text-strong);
}

.membership-grid {
  grid-template-columns: 1fr;
}

.plan-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.plan-card--featured {
  border-color: rgba(245,154,44,0.35);
  box-shadow: 0 20px 50px rgba(245,154,44,0.12);
}

.plan-card--featured::after {
  content: "";
  position: absolute;
  inset: auto -20% 68% auto;
  width: 12rem;
  height: 12rem;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(245,154,44,0.22), transparent 62%);
}

.plan-head {
  display: grid;
  gap: 0.6rem;
}

.plan-name-row {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 0.8rem;
}

.plan-name {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-strong);
}

.plan-price {
  display: inline-flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.28rem 0.45rem;
  font-size: 1.9rem;
  font-weight: 750;
  letter-spacing: -0.04em;
  color: var(--text-strong);
}

.plan-price small,
.plan-price span,
.plan-footnote {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text-subtle);
  letter-spacing: normal;
}

.plan-actions {
  margin-top: auto;
}

.trust-shell,
.legal-hub,
.article-shell,
.support-shell {
  display: grid;
  gap: 1.2rem;
}

.trust-strip {
  grid-template-columns: 1fr;
}

.faq-grid {
  grid-template-columns: 1fr;
}

.faq-card button {
  appearance: none;
  width: 100%;
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  padding: 1.1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;
}

.faq-card button span {
  font-weight: 650;
  color: var(--text-strong);
}

.faq-icon {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.18);
  position: relative;
  flex: none;
}

.faq-icon::before,
.faq-icon::after {
  content: "";
  position: absolute;
  inset: 50% auto auto 50%;
  background: var(--text-muted);
  transform: translate(-50%, -50%);
}

.faq-icon::before {
  width: 0.62rem;
  height: 2px;
}

.faq-icon::after {
  width: 2px;
  height: 0.62rem;
  transition: opacity var(--transition-fast);
}

.faq-card[open] .faq-icon::after {
  opacity: 0;
}

.faq-answer {
  padding: 0 1.2rem 1.15rem;
}

.faq-answer p {
  margin: 0;
  color: var(--text-muted);
}

.inline-link {
  color: var(--text-strong);
  text-decoration: underline;
  text-decoration-color: rgba(255,255,255,0.28);
  text-underline-offset: 0.18em;
}

.legal-hub__links,
.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem 1rem;
}

.legal-hub__links a,
.footer-nav a {
  color: var(--text-muted);
}

.article-page .article-hero {
  padding: 3.1rem 0 1.4rem;
}

.article-shell {
  padding-bottom: 4rem;
}

.article-grid {
  grid-template-columns: 1fr;
  align-items: start;
}

.article-sidebar {
  position: relative;
}

.article-card,
.support-card,
.policy-card {
  padding: 1.35rem;
}

.article-card + .article-card,
.support-card + .support-card,
.policy-card + .policy-card {
  margin-top: 1rem;
}

.article-nav {
  display: grid;
  gap: 0.5rem;
}

.article-nav a {
  color: var(--text-muted);
  padding: 0.4rem 0;
}

.article-nav a:hover,
.article-nav a:focus-visible {
  color: var(--text-strong);
}

.article-callout {
  padding: 1rem 1.05rem;
  border-left: 3px solid var(--accent);
  background: rgba(255,255,255,0.04);
  border-radius: 0 16px 16px 0;
}

.article-callout p {
  margin: 0;
}

.note-box {
  padding: 1rem;
  border-radius: 18px;
  background: rgba(126,199,255,0.06);
  border: 1px solid rgba(126,199,255,0.16);
}

.note-box--warm {
  background: rgba(245,154,44,0.08);
  border-color: rgba(245,154,44,0.18);
}

.note-box--danger {
  background: rgba(255,125,103,0.08);
  border-color: rgba(255,125,103,0.18);
}

.support-grid,
.contact-grid,
.policy-grid {
  grid-template-columns: 1fr;
}

.contact-list {
  padding-left: 1.15rem;
}

.footer {
  padding: 2rem 0 2.8rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  background: rgba(0, 0, 0, 0.12);
}

.footer-grid {
  align-items: start;
}

.footer-meta {
  color: var(--text-subtle);
  font-size: 0.92rem;
}

.kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.6rem;
  min-height: 1.6rem;
  padding: 0 0.35rem;
  border-radius: 0.45rem;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: var(--text-strong);
  font-size: 0.82rem;
}

.hidden {
  display: none !important;
}

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

[data-reveal] {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease, transform 600ms ease;
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 700px) {
  .hero-metrics,
  .trust-strip,
  .system-grid,
  .depth-grid,
  .use-case-grid,
  .permissions-grid,
  .cards-grid,
  .faq-grid,
  .support-grid,
  .policy-grid,
  .contact-grid,
  .footer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .membership-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .mock-row-split {
    grid-template-columns: 1.1fr 0.9fr;
  }

  .site-nav {
    right: calc((100vw - min(calc(100% - 2rem), var(--content-max))) / 2);
  }
}

@media (min-width: 980px) {
  .nav-toggle {
    display: none;
  }

  .site-nav {
    position: static;
    width: auto;
    padding: 0;
    opacity: 1;
    transform: none;
    pointer-events: auto;
    border: 0;
    box-shadow: none;
    background: transparent;
  }

  .site-nav__list {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  .site-nav__actions {
    display: none;
  }

  .site-nav__link {
    padding: 0.65rem 0.8rem;
  }

  .hero {
    padding: 4.8rem 0 1.4rem;
  }

  .hero__grid {
    grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
    gap: 2rem;
  }

  .section {
    padding: 2.6rem 0;
  }

  .section--spaced {
    padding: 5.5rem 0;
  }

  .system-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .depth-grid,
  .use-case-grid,
  .permissions-grid,
  .cards-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .membership-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .faq-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .footer-grid {
    grid-template-columns: 1.25fr 1fr;
  }

  .article-grid {
    grid-template-columns: minmax(0, 280px) minmax(0, 1fr);
    gap: 1.4rem;
  }

  .article-sidebar {
    position: sticky;
    top: calc(var(--nav-height) + 1rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
  }

  [data-reveal] {
    opacity: 1;
    transform: none;
  }
}
