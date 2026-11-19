const styles = `
/* ==========================================================================
   Sabi Grow Agricultural Decision-Support Design System
   Mobile-First Figma Showcase (390x844px frames)
   ========================================================================== */

:root {
  /* Light Mode: Warm Harvest & Soil */
  --bg-app: #F6F3EC;           /* Warm Oat / Linen */
  --bg-card: #FCFBF7;          /* Soft Alabaster */
  --bg-elevated: #EAE4D7;      /* Pressed Clay */
  --brand-primary: #2A4B3C;    /* Deep Canopy Olive */
  --brand-secondary: #7A9A82;  /* Muted Sage */
  --accent-warning: #D98A2B;   /* Sunbaked Ochre */
  --accent-urgent: #C85A32;    /* Terracotta Clay */
  --accent-rain: #4A7C8C;      /* Slate River Blue */
  --text-primary: #222621;     /* Rich Loam */
  --text-secondary: #605C56;   /* Warm Bark */
  --text-on-brand: #FCFBF7;    /* Crisp Alabaster */
  --border-subtle: #D8D0C1;    /* Sandstone */

  /* Structural & Functional Tokens */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-serif: "Newsreader", "Charter", "Georgia", serif;
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 36px;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03);
  --shadow-md: 0 4px 14px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  --shadow-lg: 0 14px 34px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
  --shadow-device: 0 24px 60px rgba(0,0,0,0.16), 0 8px 24px rgba(0,0,0,0.08);

  /* Alpha Tints (color-mix preserves token fidelity) */
  --tint-brand-10: color-mix(in srgb, var(--brand-primary) 12%, transparent);
  --tint-brand-20: color-mix(in srgb, var(--brand-primary) 22%, transparent);
  --tint-secondary-15: color-mix(in srgb, var(--brand-secondary) 18%, transparent);
  --tint-warning-15: color-mix(in srgb, var(--accent-warning) 16%, transparent);
  --tint-urgent-15: color-mix(in srgb, var(--accent-urgent) 16%, transparent);
  --tint-rain-15: color-mix(in srgb, var(--accent-rain) 16%, transparent);
}

[data-theme="dark"] {
  /* Dark Mode: Evening Loam & Moss */
  --bg-app: #181C18;           /* Deep Loam */
  --bg-card: #222722;          /* Dark Bark */
  --bg-elevated: #2C332C;      /* Dusk Peat */
  --brand-primary: #3D6B54;    /* Woodland Moss */
  --brand-secondary: #8BAF94;  /* Soft Lichen */
  --accent-warning: #E29B3E;   /* Lantern Amber */
  --accent-urgent: #D96B43;    /* Fired Terracotta */
  --accent-rain: #6BA3B5;      /* Evening Mist Blue */
  --text-primary: #EFECE4;     /* Warm Parchment */
  --text-secondary: #A5A198;   /* Dry Reed */
  --text-on-brand: #EFECE4;    /* Warm Parchment */
  --border-subtle: #363D36;    /* Shadow Stone */

  --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.45);
  --shadow-lg: 0 16px 40px rgba(0,0,0,0.55);
  --shadow-device: 0 28px 70px rgba(0,0,0,0.7), 0 10px 30px rgba(0,0,0,0.4);
}

/* Base Reset & Typography */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-app);
  color: var(--text-primary);
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Sleek Presentation Top Bar */
.pres-bar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--bg-card);
  border-bottom: 1px solid var(--border-subtle);
  padding: 12px 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(12px);
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.pres-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.pres-logo-icon {
  width: 38px;
  height: 38px;
  background: var(--brand-primary);
  color: var(--text-on-brand);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.pres-title-wrap h1 {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.pres-title-wrap p {
  font-size: 12px;
  color: var(--text-secondary);
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: var(--tint-brand-10);
  color: var(--brand-primary);
  border: 1px solid var(--tint-brand-20);
}

.pres-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* Segmented Control Switcher */
.segmented-ctl {
  display: inline-flex;
  background: var(--bg-elevated);
  padding: 3px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-subtle);
}

.seg-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  background: transparent;
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.2s ease;
}

.seg-btn.active {
  background: var(--bg-card);
  color: var(--brand-primary);
  box-shadow: var(--shadow-sm);
}

.theme-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 600;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle-btn:hover {
  background: var(--tint-brand-10);
  border-color: var(--brand-primary);
}

.theme-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-warning);
}

/* Filter Bar for Grid Mode */
.sub-bar {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-subtle);
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  overflow-x: auto;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-pill {
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  background: var(--bg-elevated);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease;
}

.filter-pill:hover, .filter-pill.active {
  background: var(--brand-primary);
  color: var(--text-on-brand);
  border-color: var(--brand-primary);
}

.zoom-group {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-secondary);
}

.zoom-btn {
  width: 26px;
  height: 26px;
  border-radius: var(--radius-xs);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
}

/* Figma Canvas & Grid Layout */
.canvas-container {
  padding: 32px 24px 80px;
  max-width: 1720px;
  margin: 0 auto;
  transition: transform 0.2s ease;
  transform-origin: top center;
}

.screens-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  gap: 40px;
  justify-items: center;
}

/* Screen Wrapper & Header */
.screen-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 390px;
  transition: opacity 0.2s ease;
}

.screen-meta-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px;
}

.screen-meta-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.screen-number {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--brand-secondary);
}

.screen-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
}

.screen-meta-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 600;
  color: var(--brand-primary);
  background: var(--tint-brand-10);
  border: 1px solid var(--tint-brand-20);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s ease;
}

.screen-meta-btn:hover {
  background: var(--brand-primary);
  color: var(--text-on-brand);
}

/* 390x844px Mobile Viewport Frame */
.mobile-frame {
  width: 390px;
  height: 844px;
  min-height: 844px;
  max-height: 844px;
  background-color: var(--bg-app);
  border: 10px solid var(--border-subtle);
  border-radius: 46px;
  box-shadow: var(--shadow-device);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.25s ease, background-color 0.25s ease;
  user-select: none;
}

/* Dynamic Island & Notch */
.dynamic-island {
  position: absolute;
  top: 11px;
  left: 50%;
  transform: translateX(-50%);
  width: 122px;
  height: 32px;
  background-color: var(--text-primary);
  border-radius: var(--radius-full);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.island-camera {
  width: 10px;
  height: 10px;
  background: var(--bg-app);
  border-radius: 50%;
  opacity: 0.4;
}

.island-sensor {
  width: 8px;
  height: 8px;
  background: var(--bg-app);
  border-radius: 50%;
  opacity: 0.3;
}

/* iOS Status Bar */
.status-bar {
  height: 48px;
  padding: 12px 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
  z-index: 90;
  background-color: transparent;
  flex-shrink: 0;
}

.status-time {
  letter-spacing: -0.02em;
}

.status-icons {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Mobile Screen Viewport (Scrollable Area) */
.mobile-viewport {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 8px 18px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  -webkit-overflow-scrolling: touch;
}

.mobile-viewport::-webkit-scrollbar {
  width: 3px;
}
.mobile-viewport::-webkit-scrollbar-thumb {
  background: var(--border-subtle);
  border-radius: 3px;
}

/* Bottom Tab Navigation Bar */
.bottom-tab-bar {
  height: 72px;
  background-color: var(--bg-card);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 8px 12px;
  z-index: 80;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: var(--text-secondary);
  font-size: 10px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  transition: all 0.15s ease;
  border: none;
  background: transparent;
}

.tab-item svg {
  width: 20px;
  height: 20px;
  transition: transform 0.15s ease;
}

.tab-item.active {
  color: var(--brand-primary);
}

.tab-item.active svg {
  transform: translateY(-1px);
}

.tab-item:hover {
  color: var(--brand-primary);
}

/* Home Indicator Bar */
.home-indicator {
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 134px;
  height: 4px;
  background-color: var(--text-secondary);
  opacity: 0.35;
  border-radius: var(--radius-full);
  z-index: 100;
  pointer-events: none;
}

/* Shared High-Craft Mobile Components */
.screen-app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 4px;
}

.header-loc-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
}

.header-subtag {
  font-size: 12px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-action-btn {
  width: 34px;
  height: 34px;
  border-radius: var(--radius-full);
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  transition: all 0.15s ease;
}

.icon-action-btn:hover {
  background: var(--bg-elevated);
}

.badge-dot-alert {
  position: absolute;
  top: 6px;
  right: 6px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--accent-urgent);
  border: 1.5px solid var(--bg-card);
}

/* Cards & Containers */
.agro-card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 16px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.2s ease;
}

.agro-card-elevated {
  background-color: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 14px;
}

.card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.card-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Alert Boxes */
.alert-box-urgent {
  background-color: var(--tint-urgent-15);
  border: 1px solid var(--accent-urgent);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.alert-box-urgent .alert-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--accent-urgent);
  display: flex;
  align-items: center;
  gap: 6px;
}

.alert-box-warning {
  background-color: var(--tint-warning-15);
  border: 1px solid var(--accent-warning);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.alert-box-warning .alert-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--accent-warning);
  display: flex;
  align-items: center;
  gap: 6px;
}

.alert-box-rain {
  background-color: var(--tint-rain-15);
  border: 1px solid var(--accent-rain);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.alert-box-rain .alert-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--accent-rain);
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Metric Tiles Grid */
.metric-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.metric-grid-4 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.metric-tile {
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.metric-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-secondary);
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.metric-unit {
  font-size: 12px;
  font-weight: 500;
  color: var(--text-secondary);
}

.metric-desc {
  font-size: 11px;
  color: var(--text-secondary);
}

/* Interactive Checklists */
.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 12px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.15s ease;
}

.checklist-item:hover {
  border-color: var(--brand-secondary);
}

.check-box {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-xs);
  border: 1.5px solid var(--border-subtle);
  background-color: var(--bg-elevated);
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  flex-shrink: 0;
  margin-top: 1px;
  transition: all 0.15s ease;
}

.checklist-item.checked .check-box {
  background-color: var(--brand-primary);
  border-color: var(--brand-primary);
  color: var(--text-on-brand);
}

.checklist-item.checked .check-text {
  text-decoration: line-through;
  opacity: 0.6;
}

.check-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.check-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.check-sub {
  font-size: 11px;
  color: var(--text-secondary);
}

/* Buttons */
.btn-primary {
  width: 100%;
  padding: 12px 18px;
  background-color: var(--brand-primary);
  color: var(--text-on-brand);
  border: none;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: var(--shadow-sm);
  transition: opacity 0.15s ease, transform 0.1s ease;
}

.btn-primary:hover {
  opacity: 0.94;
}

.btn-primary:active {
  transform: scale(0.99);
}

.btn-secondary {
  width: 100%;
  padding: 10px 16px;
  background-color: var(--bg-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.15s ease;
}

.btn-secondary:hover {
  background-color: var(--tint-brand-10);
  border-color: var(--brand-secondary);
}

/* Horizontal Scrolling Agro Strip */
.agro-strip {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  margin: 0 -4px;
  padding: 0 4px 4px;
}

.strip-item {
  min-width: 68px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  flex-shrink: 0;
}

.strip-item.active {
  background-color: var(--tint-brand-10);
  border-color: var(--brand-primary);
}

.strip-hour {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
}

.strip-temp {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
}

.strip-sub {
  font-size: 10px;
  color: var(--text-secondary);
}

/* Progress & Gauges */
.gauge-track {
  width: 100%;
  height: 8px;
  background-color: var(--bg-elevated);
  border-radius: var(--radius-full);
  overflow: hidden;
  position: relative;
}

.gauge-fill {
  height: 100%;
  border-radius: var(--radius-full);
  background-color: var(--brand-primary);
  transition: width 0.3s ease;
}

/* Form Inputs */
.input-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 4px;
  display: block;
}

.input-field {
  width: 100%;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-card);
  color: var(--text-primary);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease;
}

.input-field:focus {
  border-color: var(--brand-primary);
}

/* Single Interactive Prototype View Container */
.proto-view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px 20px 80px;
  max-width: 900px;
  margin: 0 auto;
}

.proto-nav-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  padding: 8px 18px;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  width: 100%;
  max-width: 580px;
  justify-content: space-between;
}

.proto-nav-select {
  padding: 6px 12px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 13px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  font-family: inherit;
}

.proto-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-subtle);
  background: var(--bg-elevated);
  color: var(--text-primary);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.proto-nav-btn:hover {
  background: var(--brand-primary);
  color: var(--text-on-brand);
}


/* ==========================================================================
   Responsive Mobile-First Scaling & Viewport Adaptation
   ========================================================================== */

/* Floating exit button for full native view */
.floating-exit-btn {
  position: absolute;
  top: 10px;
  right: 12px;
  z-index: 999;
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  display: none;
}

body.native-app-mode .floating-exit-btn {
  display: block !important;
}

body.native-app-mode .pres-bar,
body.native-app-mode .sub-bar,
body.native-app-mode .proto-nav-bar,
body.native-app-mode #proto-screen-counter,
body.native-app-mode .proto-view-container > div:last-child {
  display: none !important;
}

body.native-app-mode {
  overflow: hidden !important;
}

body.native-app-mode .proto-view-container {
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100vw !important;
  width: 100vw !important;
  height: 100dvh !important;
  max-height: 100dvh !important;
}

body.native-app-mode #interactive-phone-frame {
  width: 100vw !important;
  max-width: 100vw !important;
  height: 100dvh !important;
  max-height: 100dvh !important;
  min-height: 100dvh !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

body.native-app-mode .dynamic-island {
  display: none !important;
}

@media (max-width: 768px) {
  /* Presentation Header */
  .pres-bar {
    padding: 8px 12px;
    gap: 8px;
  }
  .pres-title-wrap h1 {
    font-size: 15px;
  }
  .pres-title-wrap p {
    display: none;
  }
  .pres-controls {
    width: 100%;
    justify-content: space-between;
    gap: 6px;
  }
  .segmented-ctl {
    flex: 1;
  }
  .seg-btn {
    flex: 1;
    justify-content: center;
    padding: 5px 8px;
    font-size: 11px;
  }
  .theme-toggle-btn {
    padding: 5px 10px;
    font-size: 11px;
    white-space: nowrap;
  }
  .sub-bar {
    padding: 6px 12px;
    gap: 8px;
  }
  .filter-group {
    overflow-x: auto;
    padding-bottom: 2px;
  }
  .zoom-group {
    display: none;
  }

  /* Canvas & Grid */
  .canvas-container {
    padding: 12px 10px 60px;
  }
  .screens-grid {
    grid-template-columns: 1fr;
    gap: 28px;
    width: 100%;
  }
  .screen-column {
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
  }
  .screens-grid .mobile-frame {
    width: 100%;
    max-width: 390px;
    height: 780px;
    min-height: 780px;
    border-width: 4px;
    border-radius: 28px;
  }

  /* Prototype Container */
  .proto-view-container {
    padding: 6px 8px 30px;
    gap: 10px;
    width: 100%;
  }
  .proto-nav-bar {
    padding: 6px 10px;
    width: 100%;
    max-width: 390px;
    gap: 6px;
  }
  .proto-nav-select {
    max-width: 150px;
    font-size: 11px;
    padding: 4px 6px;
  }
  .proto-nav-btn {
    padding: 4px 8px;
    font-size: 11px;
  }
  #proto-screen-counter {
    font-size: 11px;
    padding: 4px 10px;
    text-align: center;
    width: 100%;
    max-width: 390px;
  }

  /* Adaptive Mobile Phone Frame */
  #interactive-phone-frame {
    width: 100%;
    max-width: 390px;
    height: calc(100dvh - 140px);
    min-height: 520px;
    max-height: 844px;
    border: 2px solid var(--border-subtle);
    border-radius: 28px;
    box-shadow: var(--shadow-md);
  }

  /* Hide simulated dynamic island on actual phones to prevent clashing with phone camera */
  #interactive-phone-frame .dynamic-island {
    display: none;
  }
  #interactive-phone-frame .status-bar {
    height: 38px;
    padding: 8px 16px 0;
    font-size: 11px;
  }
  #interactive-phone-frame .bottom-tab-bar {
    height: 64px;
    padding: 2px 4px 10px;
  }
}

@media (max-width: 420px) {
  /* Extra narrow devices */
  .canvas-container {
    padding: 8px 4px 40px;
  }
  .proto-view-container {
    padding: 4px 4px 20px;
  }
  #interactive-phone-frame {
    border-radius: 20px;
    border-width: 1.5px;
    height: calc(100dvh - 120px);
    min-height: 480px;
  }
  .mobile-viewport {
    padding: 6px 10px 16px;
    gap: 12px;
  }
  .screen-app-header .header-loc-title {
    font-size: 15px;
  }
  .metric-value {
    font-size: 18px;
  }
  .tab-item span {
    font-size: 9px;
  }
}


/* ==========================================================================
   High-Fidelity Interactive Screen Transitions & Micro-Interactions
   ========================================================================== */

/* Directional Screen Entry Animations */
@keyframes screenSlideInRight {
  0% { transform: translateX(36px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes screenSlideInLeft {
  0% { transform: translateX(-36px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

@keyframes screenTabCrossFade {
  0% { transform: scale(0.975); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.anim-slide-right {
  animation: screenSlideInRight 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.anim-slide-left {
  animation: screenSlideInLeft 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.anim-tab-fade {
  animation: screenTabCrossFade 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Micro-Interactions & Tap Physics */
.agro-card, .metric-tile, .alert-box-urgent, .alert-box-warning, .alert-box-rain, .checklist-item, .strip-item, .filter-pill, .seg-btn, .btn-primary, .btn-secondary, .icon-action-btn, .tab-item {
  transition: transform 0.16s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.agro-card:active, .metric-tile:active, .checklist-item:active, .strip-item:active {
  transform: scale(0.975);
}

.btn-primary:active, .btn-secondary:active, .icon-action-btn:active, .filter-pill:active {
  transform: scale(0.94);
}

/* Tab Bar Bouncy Icon Spring */
.tab-item:active svg {
  transform: scale(0.82);
}

.tab-item.tab-popped svg {
  animation: tabSpringPop 0.38s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes tabSpringPop {
  0% { transform: scale(0.8); }
  50% { transform: scale(1.26); }
  100% { transform: scale(1); }
}

/* Checkbox Pop Animation */
.checklist-item.just-checked .check-box {
  animation: checkboxPop 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes checkboxPop {
  0% { transform: scale(0.7); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}

/* Slide-Up Bottom Sheet Modal */
.modal-sheet-backdrop {
  display: none !important;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 700;
  align-items: flex-end;
  justify-content: center;
}

.modal-sheet-backdrop.active {
  display: flex !important;
  opacity: 1 !important;
  pointer-events: auto !important;
}

.modal-sheet-content {
  width: 100%;
  background: var(--bg-card);
  border-top: 1px solid var(--border-subtle);
  border-radius: 28px 28px 0 0;
  padding: 12px 20px 32px;
  box-shadow: 0 -12px 36px rgba(0,0,0,0.25);
  transform: translateY(100%);
  transition: transform 0.34s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 82%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.modal-sheet-backdrop.active .modal-sheet-content {
  transform: translateY(0);
}

.modal-drag-handle {
  width: 38px;
  height: 4px;
  background: var(--border-subtle);
  border-radius: var(--radius-full);
  margin: 0 auto 4px;
}

.modal-sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: 1px solid var(--border-subtle);
}

/* Floating Toast Notification */
.app-toast {
  display: none !important;
  position: absolute;
  top: 52px;
  left: 50%;
  transform: translateX(-50%) translateY(-24px);
  background: var(--brand-primary);
  color: var(--text-on-brand);
  padding: 8px 18px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 700;
  box-shadow: var(--shadow-lg);
  z-index: 850;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.24s ease;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.app-toast.active {
  display: flex !important;
  transform: translateX(-50%) translateY(0) !important;
  opacity: 1 !important;
}

/* Hide helper */
.hidden {
  display: none !important;
}
`;

module.exports = styles;
