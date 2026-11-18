const icons = require('./icons');

function renderBottomNav(activeTab = 'today') {
  return `
  <nav class="bottom-tab-bar" aria-label="Main Navigation">
    <button class="tab-item ${activeTab === 'today' ? 'active' : ''}" data-tab="today" onclick="navigateToScreen(2, 'tab')" title="Today's Overview">
      ${icons.sprout('w-5 h-5')}
      <span>Today</span>
    </button>
    <button class="tab-item ${activeTab === 'weather' ? 'active' : ''}" data-tab="weather" onclick="navigateToScreen(3, 'tab')" title="Hyperlocal Forecast">
      ${icons.cloudSun('w-5 h-5')}
      <span>Weather</span>
    </button>
    <button class="tab-item ${activeTab === 'plots' ? 'active' : ''}" data-tab="plots" onclick="navigateToScreen(8, 'tab')" title="My Plots & Beds">
      ${icons.layoutGrid('w-5 h-5')}
      <span>Plots</span>
    </button>
    <button class="tab-item ${activeTab === 'alerts' ? 'active' : ''}" data-tab="alerts" onclick="navigateToScreen(7, 'tab')" title="Frost & Risk Hub">
      ${icons.shieldAlert('w-5 h-5')}
      <span>Alerts</span>
    </button>
    <button class="tab-item ${activeTab === 'profile' ? 'active' : ''}" data-tab="profile" onclick="navigateToScreen(11, 'tab')" title="Settings & Appearance">
      ${icons.settings('w-5 h-5')}
      <span>Profile</span>
    </button>
  </nav>
  `;
}

function renderStatusBar(time = "9:41") {
  return `
  <div class="status-bar">
    <span class="status-time">${time}</span>
    <div class="dynamic-island">
      <div class="island-camera"></div>
      <div class="island-sensor"></div>
    </div>
    <div class="status-icons">
      ${icons.signal('w-3.5 h-3.5')}
      ${icons.wifi('w-3.5 h-3.5')}
      ${icons.battery('w-5 h-3')}
    </div>
  </div>
  `;
}

const screens = [
  // SCREEN 1: Onboarding & Location Setup
  {
    id: 1,
    title: "Onboarding & Microclimate Setup",
    persona: "Primary: Home & Market Growers",
    function: "Microclimate Calibration & Soil Profile",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Top Nav Step -->
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <button class="icon-action-btn" onclick="alert('First screen of setup')">${icons.chevronLeft()}</button>
          <span style="font-size:12px; font-weight:700; color:var(--brand-secondary); text-transform:uppercase; letter-spacing:0.05em;">Step 2 of 3</span>
          <span style="font-size:13px; font-weight:600; color:var(--text-secondary); cursor:pointer;" onclick="navigateToScreen(2)">Skip</span>
        </div>

        <div style="display:flex; flex-direction:column; gap:6px;">
          <h2 style="font-size:22px; font-weight:800; color:var(--text-primary); letter-spacing:-0.02em;">Calibrate your local ground</h2>
          <p style="font-size:13px; color:var(--text-secondary);">Sabi Grow models weather at soil level, calculating frost sinks, windbreak shelter, and water drainage.</p>
        </div>

        <!-- Form Section 1 -->
        <div class="agro-card">
          <label class="input-label">Postal Code / Garden Coordinates</label>
          <div style="position:relative;">
            <input type="text" class="input-field" value="95476 (Sonoma Valley, CA)" style="padding-left:36px;" />
            <div style="position:absolute; left:12px; top:50%; transform:translateY(-50%); color:var(--brand-primary);">
              ${icons.mapPin()}
            </div>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:2px;">
            <span class="badge-tag">${icons.badgeCheck('w-3.5 h-3.5')} USDA Zone 9b</span>
            <span class="badge-tag" style="background:var(--tint-rain-15); color:var(--accent-rain); border-color:var(--accent-rain);">Foothill Cold Sink (-3°F)</span>
          </div>
        </div>

        <!-- Form Section 2: Grower Persona -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <label class="input-label">Primary Growing Scale</label>
          <div class="agro-card-elevated" style="border:2px solid var(--brand-primary); cursor:pointer;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <div style="width:32px; height:32px; border-radius:var(--radius-sm); background:var(--brand-primary); color:var(--text-on-brand); display:flex; align-items:center; justify-content:center;">
                  ${icons.sprout('w-4 h-4')}
                </div>
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Home Kitchen Garden</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Raised beds, salads, herbs, fresh tomatoes</div>
                </div>
              </div>
              <div style="color:var(--brand-primary);">${icons.check('w-5 h-5')}</div>
            </div>
          </div>

          <div class="agro-card" style="cursor:pointer; opacity:0.85;" onclick="alert('Selected Small-Scale Market Grower')">
            <div style="display:flex; align-items:center; gap:10px;">
              <div style="width:32px; height:32px; border-radius:var(--radius-sm); background:var(--bg-elevated); color:var(--text-secondary); display:flex; align-items:center; justify-content:center;">
                ${icons.basket('w-4 h-4')}
              </div>
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Small-Scale Market Grower</div>
                <div style="font-size:11px; color:var(--text-secondary);">1/4 to 3 acres • Direct sales & CSA harvest windows</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Section 3: Soil Texture -->
        <div class="agro-card">
          <label class="input-label">Dominant Soil Texture</label>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
            <button class="btn-secondary" style="background:var(--tint-brand-10); border-color:var(--brand-primary); color:var(--brand-primary); font-size:11px; padding:8px;">Loam & Compost ✓</button>
            <button class="btn-secondary" style="font-size:11px; padding:8px;">Heavy Clay</button>
            <button class="btn-secondary" style="font-size:11px; padding:8px;">Sandy Alluvial</button>
            <button class="btn-secondary" style="font-size:11px; padding:8px;">Raised Bed Mix</button>
          </div>
          <p style="font-size:11px; color:var(--text-secondary); margin-top:2px;">Loam retains 2.2 in of water per foot, buffering against sudden hot spells.</p>
        </div>

        <button class="btn-primary" onclick="navigateToScreen(2)">
          <span>Save & Calibrate Microclimate</span>
          ${icons.chevronRight()}
        </button>
      </div>
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 2: Today's Sabi Grow Dashboard
  {
    id: 2,
    title: "Today's Sabi Grow Dashboard",
    persona: "Primary: Daily Operations",
    function: "Grower Action Index, Urgent Alerts & Tasks",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <div class="header-loc-title">
              <span>Willow Creek Garden</span>
              ${icons.chevronDown('w-3.5 h-3.5')}
            </div>
            <div class="header-subtag">
              <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--brand-secondary);"></span>
              <span>Sonoma Zone 9b • Synced 4m ago</span>
            </div>
          </div>
          <div class="icon-action-btn" onclick="openSheet('Active Weather Alerts', '<div class=\'alert-box-urgent\'><strong>Light Freeze Watch</strong><p style=\'font-size:12px;\'>Friday 3:30 AM (29°F). Protection required.</p><button class=\'btn-primary\' style=\'margin-top:8px; padding:8px;\' onclick=\'closeSheet(); navigateToScreen(7);\'>View Mitigation Checklist →</button></div>')" title="Alerts">
            ${icons.bell('w-4 h-4')}
            <span class="badge-dot-alert"></span>
          </div>
        </div>

        <!-- Hero Card: Grower Action Index -->
        <div class="agro-card" style="background:linear-gradient(135deg, var(--bg-card) 0%, var(--bg-elevated) 100%);">
          <div class="card-header-row">
            <span class="badge-tag" style="background:var(--brand-primary); color:var(--text-on-brand); border:none;">
              ${icons.sprout('w-3.5 h-3.5')} Grower Action Index
            </span>
            <span style="font-size:12px; font-weight:700; color:var(--brand-primary);">92 / 100</span>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:4px;">
            <div>
              <div style="font-size:24px; font-weight:800; color:var(--text-primary); letter-spacing:-0.02em;">Optimal Field Day</div>
              <p style="font-size:12px; color:var(--text-secondary); margin-top:2px;">Prime transplanting & direct-sow conditions before tomorrow's dip.</p>
            </div>
            <div style="text-align:right;">
              <div id="hero-temp-display" style="font-size:32px; font-weight:800; color:var(--text-primary); line-height:1;" data-unit-f="68">68°F</div>
              <span style="font-size:11px; color:var(--text-secondary);">Low 42°F • Clear</span>
            </div>
          </div>

          <div class="gauge-track" style="margin-top:6px;">
            <div class="gauge-fill" style="width:92%;"></div>
          </div>
        </div>

        <!-- Urgent Alert Box (Terracotta token) -->
        <div class="alert-box-urgent" onclick="navigateToScreen(7)" style="cursor:pointer;" title="Click to view Alert Center">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div class="alert-title">
              ${icons.frost('w-4 h-4')}
              <span>Frost Watch in 36 Hours</span>
            </div>
            <span style="font-size:11px; font-weight:700; color:var(--accent-urgent); display:flex; align-items:center; gap:2px;">
              Protocol ${icons.chevronRight('w-3 h-3')}
            </span>
          </div>
          <p style="font-size:12px; color:var(--text-primary); line-height:1.4;">
            Friday 03:30 AM drop to <strong>29°F (-1.6°C)</strong>. Prepare floating row fleece for Bed 3 & 4 Brassicas.
          </p>
        </div>

        <!-- Today's 3 Critical Farm Tasks -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.check('w-4 h-4')} Today's Field Decisions</span>
            <span style="font-size:11px; color:var(--text-secondary);">3 Priorities</span>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">Hold morning irrigation (Moisture 74%)</span>
              <span class="check-sub">ET0 at 2.8mm. Saturday rain deposit will recharge root zone.</span>
            </div>
          </div>

          <div class="checklist-item" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">Direct-sow English Peas & Spinach</span>
              <span class="check-sub">Soil temp reached 58°F; optimal 4-day germination window.</span>
            </div>
          </div>

          <div class="checklist-item" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">Scout cucumber cloches for powdery mildew</span>
              <span class="check-sub">Relative humidity exceeded 82% last night. Check leaf undersides.</span>
            </div>
          </div>
        </div>

        <!-- Hourly Agronomic Strip -->
        <div style="display:flex; flex-direction:column; gap:6px;">
          <div class="card-header-row">
            <span class="card-title">${icons.cloudSun('w-4 h-4')} Hourly Microclimate</span>
            <span style="font-size:11px; color:var(--brand-primary); font-weight:600; cursor:pointer;" onclick="navigateToScreen(3)">7-Day Forecast →</span>
          </div>
          <div class="agro-strip">
            <div class="strip-item active" onclick="selectHour(this, 62, 'Current')">
              <span class="strip-hour">Now</span>
              ${icons.sun('w-4 h-4')}
              <span class="strip-temp">62°</span>
              <span class="strip-sub">4 mph</span>
            </div>
            <div class="strip-item" onclick="selectHour(this, 65, '11:00 AM')">
              <span class="strip-hour">11 AM</span>
              ${icons.sun('w-4 h-4')}
              <span class="strip-temp">65°</span>
              <span class="strip-sub">5 mph</span>
            </div>
            <div class="strip-item" onclick="selectHour(this, 68, '2:00 PM (Peak)')">
              <span class="strip-hour">2 PM</span>
              ${icons.sun('w-4 h-4')}
              <span class="strip-temp">68°</span>
              <span class="strip-sub">7 mph</span>
            </div>
            <div class="strip-item" onclick="selectHour(this, 63, '5:00 PM')">
              <span class="strip-hour">5 PM</span>
              ${icons.cloudSun('w-4 h-4')}
              <span class="strip-temp">63°</span>
              <span class="strip-sub">6 mph</span>
            </div>
            <div class="strip-item" onclick="selectHour(this, 51, '8:00 PM')">
              <span class="strip-hour">8 PM</span>
              ${icons.moon('w-4 h-4')}
              <span class="strip-temp">51°</span>
              <span class="strip-sub">3 mph</span>
            </div>
            <div class="strip-item" onclick="selectHour(this, 45, '11:00 PM')">
              <span class="strip-hour">11 PM</span>
              ${icons.moon('w-4 h-4')}
              <span class="strip-temp">45°</span>
              <span class="strip-sub">Dew</span>
            </div>
          </div>
        </div>

        <!-- 4 Agronomic Vital Tiles -->
        <div class="metric-grid-4">
          <div class="metric-tile">
            <span class="metric-label">Soil Temp (2")</span>
            <div class="metric-value">58°<span class="metric-unit">F</span></div>
            <span class="metric-desc" style="color:var(--brand-primary);">+3° vs yesterday</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Dew Point</span>
            <div class="metric-value">39°<span class="metric-unit">F</span></div>
            <span class="metric-desc">Spread: 23° (Dry air)</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Wind Velocity</span>
            <div class="metric-value">4<span class="metric-unit">mph</span></div>
            <span class="metric-desc" style="color:var(--brand-secondary);">Safe for spraying</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">ET0 Water Loss</span>
            <div class="metric-value">2.8<span class="metric-unit">mm</span></div>
            <span class="metric-desc">Mild transpiration</span>
          </div>
        </div>
      </div>
      ${renderBottomNav('today')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 3: 7-Day & Hourly Hyperlocal Forecast
  {
    id: 3,
    title: "7-Day & Hourly Micro-Forecast",
    persona: "Secondary: Experienced Farmers & Growers",
    function: "Agronomic Indices, Spray Windows & GDD",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Micro-Forecast & Indices</h2>
            <div class="header-subtag">Sonoma Valley Station #04 • Slope Adjusted</div>
          </div>
          <div class="icon-action-btn" onclick="openSheet('Precipitation Radar', '<div style=\'background:var(--bg-elevated); padding:24px; border-radius:12px; text-align:center;\'><div style=\'font-size:14px; font-weight:700; color:var(--accent-rain);\'>🌧️ Rain Reflectivity Scan (85km)</div><p style=\'font-size:12px; margin-top:6px;\'>Approaching storm front: 14mm deposit expected Saturday 2:00 PM.</p></div>')">${icons.cloudRain('w-4 h-4')}</div>
        </div>

        <!-- Segmented Tab Toggle -->
        <div class="segmented-ctl" style="width:100%; justify-content:space-between;">
          <button class="seg-btn active" style="flex:1; justify-content:center;" onclick="switchForecastSubTab('7day', this)">7-Day Outlook</button>
          <button class="seg-btn" style="flex:1; justify-content:center;" onclick="switchForecastSubTab('hourly', this)">Hourly Curve</button>
          <button class="seg-btn" style="flex:1; justify-content:center;" onclick="switchForecastSubTab('soil', this)">Soil Depth</button>
        </div>

        <!-- Spraying & Field Work Window Banner -->
        <div class="agro-card" style="border-left:4px solid var(--brand-primary);">
          <div class="card-header-row">
            <span style="font-size:12px; font-weight:700; color:var(--brand-primary); display:flex; align-items:center; gap:4px;">
              ${icons.wind('w-3.5 h-3.5')} Organic Spray Window: OPTIMAL
            </span>
            <span class="badge-tag">7:00 - 10:30 AM</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:2px;">
            Wind < 5 mph, dry leaf surface, solar irradiance mild. Safe for neem or biological copper application.
          </p>
        </div>

        <!-- 7-Day Agronomic Forecast List -->
        <div id="forecast-7day-list" style="display:flex; flex-direction:column; gap:8px;">
          <!-- Day 1 -->
          <div class="agro-card" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:13px; font-weight:700; width:44px;">Today</span>
                ${icons.sun('w-5 h-5')}
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">68° / 42°</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Soil 58°F • Wind 5mph</div>
                </div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Ideal Fieldwork</span>
            </div>
          </div>

          <!-- Day 2 -->
          <div class="agro-card" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:13px; font-weight:700; width:44px;">Thu</span>
                ${icons.cloudSun('w-5 h-5')}
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">62° / 36°</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Wind 12mph • Gusts 18</div>
                </div>
              </div>
              <span class="badge-tag" style="background:var(--tint-warning-15); color:var(--accent-warning); border-color:var(--accent-warning);">Secure Cloches</span>
            </div>
          </div>

          <!-- Day 3: Alert Day -->
          <div class="agro-card" style="padding:12px 14px; border:1.5px solid var(--accent-urgent); background:var(--tint-urgent-15);">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:13px; font-weight:800; color:var(--accent-urgent); width:44px;">Fri</span>
                <span style="color:var(--accent-urgent);">${icons.frost('w-5 h-5')}</span>
                <div>
                  <div style="font-size:13px; font-weight:800; color:var(--accent-urgent);">50° / 29°</div>
                  <div style="font-size:11px; color:var(--text-primary);">Freeze 03:30 - 07:15 AM</div>
                </div>
              </div>
              <button class="screen-meta-btn" style="background:var(--accent-urgent); color:var(--text-on-brand); border:none;" onclick="navigateToScreen(7)">Cover Beds</button>
            </div>
          </div>

          <!-- Day 4: Rain Day -->
          <div class="agro-card" style="padding:12px 14px; border:1.5px solid var(--accent-rain); background:var(--tint-rain-15);">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:13px; font-weight:700; color:var(--accent-rain); width:44px;">Sat</span>
                <span style="color:var(--accent-rain);">${icons.cloudRain('w-5 h-5')}</span>
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--accent-rain);">58° / 41°</div>
                  <div style="font-size:11px; color:var(--text-primary);">Rain: 14mm (0.55 in)</div>
                </div>
              </div>
              <span class="badge-tag" style="background:var(--accent-rain); color:var(--text-on-brand); border:none;">Catchment +420L</span>
            </div>
          </div>

          <!-- Day 5 -->
          <div class="agro-card" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:13px; font-weight:700; width:44px;">Sun</span>
                ${icons.cloudSun('w-5 h-5')}
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">63° / 45°</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Soil 54°F • High Spores</div>
                </div>
              </div>
              <span class="badge-tag" style="background:var(--tint-warning-15); color:var(--accent-warning);">Mildew Risk</span>
            </div>
          </div>

          <!-- Day 6 & 7 -->
          <div class="agro-card" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-size:13px; font-weight:700; width:44px;">Mon</span>
                ${icons.sun('w-5 h-5')}
                <div>
                  <div style="font-size:13px; font-weight:700; color:var(--text-primary);">67° / 48°</div>
                  <div style="font-size:11px; color:var(--text-secondary);">Direct-seed salad rows</div>
                </div>
              </div>
              <span class="badge-tag">Warm Trend</span>
            </div>
          </div>
        </div>

        
        <!-- Hourly High-Res Chart Panel (Hidden by default) -->
        <div id="forecast-hourly-chart" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="agro-card">
            <span class="card-title">${icons.wind('w-4 h-4')} 24-Hour Spray & Wind Model</span>
            <div style="display:flex; align-items:flex-end; justify-content:space-between; height:120px; padding:10px 4px 0; border-bottom:1px solid var(--border-subtle);">
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">4 mph</span>
                <div style="width:24px; height:35px; background:var(--brand-primary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">6 AM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">5 mph</span>
                <div style="width:24px; height:45px; background:var(--brand-primary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">9 AM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--accent-warning); font-weight:700;">8 mph</span>
                <div style="width:24px; height:75px; background:var(--accent-warning); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">12 PM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--accent-warning); font-weight:700;">9 mph</span>
                <div style="width:24px; height:85px; background:var(--accent-warning); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">3 PM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-secondary); font-weight:700;">6 mph</span>
                <div style="width:24px; height:55px; background:var(--brand-secondary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">6 PM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">3 mph</span>
                <div style="width:24px; height:28px; background:var(--brand-primary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">9 PM</span>
              </div>
            </div>
            <p style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Green bars mark safe drift-free organic spray windows (< 6 mph).</p>
          </div>
        </div>

        <!-- Soil Depth Profiles Panel (Hidden by default) -->
        <div id="forecast-soil-depth" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="agro-card">
            <span class="card-title">${icons.thermometer('w-4 h-4')} Multi-Depth Thermal Profile</span>
            <div class="metric-grid-4" style="margin-top:6px;">
              <div class="metric-tile">
                <span class="metric-label">Surface (0")</span>
                <div class="metric-value">62°<span class="metric-unit">F</span></div>
                <span class="metric-desc">High fluctuation</span>
              </div>
              <div class="metric-tile" style="border-color:var(--brand-primary);">
                <span class="metric-label">Seed Zone (2")</span>
                <div class="metric-value" style="color:var(--brand-primary);">58°<span class="metric-unit">F</span></div>
                <span class="metric-desc">Optimal cool crops</span>
              </div>
              <div class="metric-tile">
                <span class="metric-label">Root Zone (6")</span>
                <div class="metric-value">54°<span class="metric-unit">F</span></div>
                <span class="metric-desc">Thermal inertia</span>
              </div>
              <div class="metric-tile">
                <span class="metric-label">Deep Tap (12")</span>
                <div class="metric-value">51°<span class="metric-unit">F</span></div>
                <span class="metric-desc">Stable baseline</span>
              </div>
            </div>
          </div>
        </div>


        <!-- Hourly High-Res Chart Panel (Hidden by default) -->
        <div id="forecast-hourly-chart" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="agro-card">
            <span class="card-title">${icons.wind('w-4 h-4')} 24-Hour Spray & Wind Model</span>
            <div style="display:flex; align-items:flex-end; justify-content:space-between; height:120px; padding:10px 4px 0; border-bottom:1px solid var(--border-subtle);">
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">4 mph</span>
                <div style="width:24px; height:35px; background:var(--brand-primary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">6 AM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">5 mph</span>
                <div style="width:24px; height:45px; background:var(--brand-primary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">9 AM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--accent-warning); font-weight:700;">8 mph</span>
                <div style="width:24px; height:75px; background:var(--accent-warning); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">12 PM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--accent-warning); font-weight:700;">9 mph</span>
                <div style="width:24px; height:85px; background:var(--accent-warning); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">3 PM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-secondary); font-weight:700;">6 mph</span>
                <div style="width:24px; height:55px; background:var(--brand-secondary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">6 PM</span>
              </div>
              <div style="display:flex; flex-direction:column; align-items:center; gap:4px; height:100%; justify-content:flex-end;">
                <span style="font-size:10px; color:var(--brand-primary); font-weight:700;">3 mph</span>
                <div style="width:24px; height:28px; background:var(--brand-primary); border-radius:4px 4px 0 0;"></div>
                <span style="font-size:10px; color:var(--text-secondary);">9 PM</span>
              </div>
            </div>
            <p style="font-size:11px; color:var(--text-secondary); margin-top:4px;">Green bars mark safe drift-free organic spray windows (< 6 mph).</p>
          </div>
        </div>

        <!-- Soil Depth Profiles Panel (Hidden by default) -->
        <div id="forecast-soil-depth" class="hidden" style="display:flex; flex-direction:column; gap:10px;">
          <div class="agro-card">
            <span class="card-title">${icons.thermometer('w-4 h-4')} Multi-Depth Thermal Profile</span>
            <div class="metric-grid-4" style="margin-top:6px;">
              <div class="metric-tile">
                <span class="metric-label">Surface (0")</span>
                <div class="metric-value">62°<span class="metric-unit">F</span></div>
                <span class="metric-desc">High fluctuation</span>
              </div>
              <div class="metric-tile" style="border-color:var(--brand-primary);">
                <span class="metric-label">Seed Zone (2")</span>
                <div class="metric-value" style="color:var(--brand-primary);">58°<span class="metric-unit">F</span></div>
                <span class="metric-desc">Optimal cool crops</span>
              </div>
              <div class="metric-tile">
                <span class="metric-label">Root Zone (6")</span>
                <div class="metric-value">54°<span class="metric-unit">F</span></div>
                <span class="metric-desc">Thermal inertia</span>
              </div>
              <div class="metric-tile">
                <span class="metric-label">Deep Tap (12")</span>
                <div class="metric-value">51°<span class="metric-unit">F</span></div>
                <span class="metric-desc">Stable baseline</span>
              </div>
            </div>
          </div>
        </div>

<!-- Growing Degree Days (GDD) Metric -->
        <div class="agro-card">
          <div class="card-header-row">
            <span class="card-title">${icons.thermometer('w-4 h-4')} Growing Degree Days (GDD)</span>
            <span class="badge-tag">Base 50°F</span>
          </div>
          <div style="display:flex; align-items:baseline; gap:8px;">
            <span style="font-size:24px; font-weight:800; color:var(--brand-primary);">512 GDD</span>
            <span style="font-size:12px; color:var(--brand-secondary); font-weight:600;">(+42 ahead of 10-yr mean)</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary);">
            Spring warming curve indicates nightshade starts can go out under cloches 6 days ahead of schedule.
          </p>
        </div>
      </div>
      ${renderBottomNav('weather')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 4: Smart Irrigation & Rain Harvesting Advisor
  {
    id: 4,
    title: "Smart Irrigation & Rain Advisor",
    persona: "Primary: Resource Conservation",
    function: "Soil Moisture, ET0 Balance & Cistern Levels",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Water & Irrigation Advisor</h2>
            <div class="header-subtag">Root Zone Hydrology • Zone 1-3</div>
          </div>
          <div class="icon-action-btn" onclick="alert('Cistern valve settings')">${icons.droplet('w-4 h-4')}</div>
        </div>

        <!-- Main Decision Hero Card (Slate River Blue token) -->
        <div class="alert-box-rain" style="border-width:2px;">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <span class="badge-tag" style="background:var(--accent-rain); color:var(--text-on-brand); border:none;">
              RECOMMENDATION
            </span>
            <span style="font-size:11px; font-weight:700; color:var(--accent-rain);">Next Run: Sun 08:00 AM</span>
          </div>

          <div style="display:flex; align-items:center; gap:16px; margin:6px 0;">
            <div style="width:68px; height:68px; border-radius:50%; border:5px solid var(--accent-rain); display:flex; flex-direction:column; align-items:center; justify-content:center; flex-shrink:0;">
              <span style="font-size:16px; font-weight:800; color:var(--accent-rain); line-height:1;">74%</span>
              <span style="font-size:9px; font-weight:600; color:var(--text-secondary); text-transform:uppercase;">Moisture</span>
            </div>
            <div>
              <div style="font-size:17px; font-weight:800; color:var(--text-primary);">DELAY IRRIGATION</div>
              <p style="font-size:12px; color:var(--text-secondary); line-height:1.35; margin-top:2px;">
                Saturday rain storm will supply <strong>14mm</strong> naturally. Holding off preserves root oxygenation and stops nitrogen leaching.
              </p>
            </div>
          </div>
        </div>

        <!-- 3-Zone Run-Time Breakdown -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.layers('w-4 h-4')} Zone Water Budget</span>
            <span style="font-size:11px; color:var(--text-secondary);">ET0 Deficit: -1.2mm</span>
          </div>

          <!-- Zone 1 -->
          <div class="agro-card" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Zone 1 • Raised Vegetable Beds</div>
                <div style="font-size:11px; color:var(--text-secondary);">Drip Line • Loam soil at 76% field capacity</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">0 min (OFF)</span>
            </div>
          </div>

          <!-- Zone 2 -->
          <div class="agro-card" style="padding:12px 14px; border-left:4px solid var(--accent-warning);">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Zone 2 • Seedling Nursery Flats</div>
                <div style="font-size:11px; color:var(--text-secondary);">Micro-sprayers • Surface plugs drying in wind</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-warning-15); color:var(--accent-warning); border-color:var(--accent-warning);">4 min Pulse</span>
            </div>
          </div>

          <!-- Zone 3 -->
          <div class="agro-card" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Zone 3 • Orchard & Berry Rows</div>
                <div style="font-size:11px; color:var(--text-secondary);">Soaker hose • Deep subsoil reservoir adequate</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">0 min (OFF)</span>
            </div>
          </div>
        </div>

        <!-- Rainwater Harvesting Tank Monitor -->
        <div class="agro-card">
          <div class="card-header-row">
            <span class="card-title">${icons.droplet('w-4 h-4')} Rain Cistern Capacity</span>
            <span style="font-size:12px; font-weight:700; color:var(--accent-rain);">82% Full</span>
          </div>

          <div style="display:flex; align-items:baseline; justify-content:space-between; margin-top:4px;">
            <span style="font-size:20px; font-weight:800; color:var(--text-primary);">2,050 L <span style="font-size:12px; font-weight:500; color:var(--text-secondary);">/ 2,500 L</span></span>
            <span style="font-size:11px; font-weight:600; color:var(--accent-rain);">+420 L predicted Sat</span>
          </div>

          <div class="gauge-track" style="margin-top:6px;">
            <div class="gauge-fill" style="width:82%; background-color:var(--accent-rain);"></div>
          </div>

          <p style="font-size:11px; color:var(--text-secondary); margin-top:2px;">
            Automatic roof diverter is primed. Overflow lines routed to willow rain-garden swale.
          </p>
        </div>
      </div>
      ${renderBottomNav('weather')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 5: Biological Pressure Radar
  {
    id: 5,
    title: "Biological Pressure Radar",
    persona: "Primary: Gardeners & Organic Growers",
    function: "Pest, Fungal & Disease Forecasting",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Pest & Disease Pressure</h2>
            <div class="header-subtag">Microclimate Pathogen Models • 3 Active Signals</div>
          </div>
          <div class="icon-action-btn" onclick="openSheet('Log Field Pest Sighting', '<div style=\'display:flex; flex-direction:column; gap:8px;\'><label class=\'input-label\'>Select Organism</label><select class=\'input-field\'><option>Crucifer Flea Beetle</option><option>Powdery Mildew Spores</option><option>Aphid Colony</option></select><button class=\'btn-primary\' onclick=\'closeSheet(); showToast("✓ Pest sighting submitted to regional model");\'>Submit to Regional Grid</button></div>')">${icons.bug('w-4 h-4')}</div>
        </div>

        <!-- Summary Bar -->
        <div class="metric-grid-4">
          <div class="metric-tile" style="border-color:var(--accent-urgent); background:var(--tint-urgent-15);">
            <span class="metric-label" style="color:var(--accent-urgent);">Powdery Mildew</span>
            <div class="metric-value" style="color:var(--accent-urgent);">84%</div>
            <span class="metric-desc">High spore risk</span>
          </div>
          <div class="metric-tile" style="border-color:var(--accent-warning); background:var(--tint-warning-15);">
            <span class="metric-label" style="color:var(--accent-warning);">Flea Beetles</span>
            <div class="metric-value" style="color:var(--accent-warning);">62%</div>
            <span class="metric-desc">Emergence cue</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Early Blight</span>
            <div class="metric-value">48%</div>
            <span class="metric-desc">Leaf moisture < 4h</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Aphid Index</span>
            <div class="metric-value">18%</div>
            <span class="metric-desc">Predators active</span>
          </div>
        </div>

        <!-- Card 1: High Fungal Alert (Terracotta) -->
        <div class="alert-box-urgent">
          <div class="card-header-row">
            <span class="alert-title">
              ${icons.bug('w-4 h-4')} Powdery Mildew Outbreak Warning
            </span>
            <span class="badge-tag" style="background:var(--accent-urgent); color:var(--text-on-brand); border:none;">High 84%</span>
          </div>
          <p style="font-size:12px; color:var(--text-primary); line-height:1.4;">
            <strong>Microclimate Trigger:</strong> 3 consecutive nights with RH > 80% and 58°F nights creates optimal conidial germination on cucurbits.
          </p>
          <div style="background:var(--bg-card); border-radius:var(--radius-sm); padding:10px; border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:4px;">
            <span style="font-size:11px; font-weight:700; color:var(--text-primary);">Immediate Preventive Action:</span>
            <span style="font-size:11px; color:var(--text-secondary);">• Prune lowest 3 canopy leaves for airflow before Friday</span>
            <span style="font-size:11px; color:var(--text-secondary);">• Mist with potassium bicarbonate (3g/L) Thursday morning</span>
          </div>
        </div>

        <!-- Card 2: Moderate Pest Alert (Ochre) -->
        <div class="alert-box-warning">
          <div class="card-header-row">
            <span class="alert-title">
              ${icons.bug('w-4 h-4')} Crucifer Flea Beetle Emergence
            </span>
            <span class="badge-tag" style="background:var(--accent-warning); color:var(--text-on-brand); border:none;">Mod 62%</span>
          </div>
          <p style="font-size:12px; color:var(--text-primary); line-height:1.4;">
            Warming topsoil (58°F) activates overwintered adults. Baby arugula and radish cotyledons in Bed 2 are at risk of shothole damage.
          </p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="font-size:11px; font-weight:600; color:var(--text-secondary);">Defense: Deploy 0.6mm insect netting</span>
            <button class="screen-meta-btn" onclick="alert('Netting reminder scheduled')">Remind Me</button>
          </div>
        </div>

        <!-- Beneficial Insect Active Forage Window -->
        <div class="agro-card">
          <div class="card-header-row">
            <span class="card-title">${icons.sprout('w-4 h-4')} Beneficial Insect Bio-Calendar</span>
            <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Active</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary);">
            Ladybird beetles and hoverflies observed foraging between 11:00 AM and 3:30 PM. <strong>Avoid any broad sprays during these sun hours</strong>.
          </p>
        </div>
      </div>
      ${renderBottomNav('alerts')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 6: Seasonal Planting Windows & Sowing Calendar
  {
    id: 6,
    title: "Planting & Sowing Calendar",
    persona: "Primary: Home Gardeners & Market Growers",
    function: "Soil Readiness, Frost Margins & Seed Timing",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Planting & Sowing Windows</h2>
            <div class="header-subtag">Early Spring 2026 • 14-Day Micro-Model</div>
          </div>
          <div class="icon-action-btn" onclick="alert('Add custom crop')">${icons.calendar('w-4 h-4')}</div>
        </div>

        <!-- Soil Temp Gauge Banner -->
        <div class="agro-card" style="background:var(--tint-brand-10); border-color:var(--brand-primary);">
          <div class="card-header-row">
            <span style="font-size:12px; font-weight:700; color:var(--brand-primary);">2-Inch Soil Temperature: 58°F</span>
            <span class="badge-tag" style="background:var(--brand-primary); color:var(--text-on-brand);">Cool Crops Ready</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary); margin-top:2px;">
            Peas, spinach, and brassicas thrive in 45°-65°F soil. Wait for 65°F (est. April 14) for outdoor nightshades.
          </p>
        </div>

        <!-- Crop Filter Pills -->
        <div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:2px;">
          <button class="filter-pill active" onclick="filterCrops('all', this)">All Crops (14)</button>
          <button class="filter-pill" onclick="filterCrops('direct', this)">Direct Sow</button>
          <button class="filter-pill" onclick="filterCrops('indoor', this)">Indoor Flats</button>
          <button class="filter-pill" onclick="filterCrops('transplant', this)">Transplants</button>
        </div>

        <!-- Crop Cards -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <!-- Crop 1 -->
          <div class="agro-card crop-card-item" data-crop-type="direct" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">Sugar Snap Peas (Oregon Giant)</div>
                <div style="font-size:11px; color:var(--text-secondary);">Direct Sow Outdoors • Frost Hardy to 24°F</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Closes in 4d</span>
            </div>
            <div class="gauge-track" style="margin-top:6px;">
              <div class="gauge-fill" style="width:75%; background-color:var(--brand-primary);"></div>
            </div>
          </div>

          <!-- Crop 2 -->
          <div class="agro-card crop-card-item" data-crop-type="indoor" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">San Marzano Heirloom Tomatoes</div>
                <div style="font-size:11px; color:var(--text-secondary);">Indoor Seed Flats under Heat Mat (75°F)</div>
              </div>
              <span class="badge-tag">18d indoors left</span>
            </div>
            <div class="gauge-track" style="margin-top:6px;">
              <div class="gauge-fill" style="width:40%;"></div>
            </div>
          </div>

          <!-- Crop 3 -->
          <div class="agro-card crop-card-item" data-crop-type="transplant" style="padding:12px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">Lacinato Dinosaur Kale</div>
                <div style="font-size:11px; color:var(--text-secondary);">Outdoor Transplant • Tolerates 20°F freeze</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Window Open</span>
            </div>
          </div>

          <!-- Crop 4: Warning -->
          <div class="agro-card crop-card-item" data-crop-type="indoor" style="padding:12px 14px; border-left:4px solid var(--accent-urgent);">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">Sweet Genovese Basil</div>
                <div style="font-size:11px; color:var(--accent-urgent); font-weight:600;">DO NOT SOW OUTDOORS</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-urgent-15); color:var(--accent-urgent);">Cold Soil Risk</span>
            </div>
            <p style="font-size:11px; color:var(--text-secondary); margin-top:4px;">
              Basil roots rot if soil is below 60°F. Keep in warm windowsill or greenhouse.
            </p>
          </div>
        </div>
      </div>
      ${renderBottomNav('plots')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 7: Frost & Extreme Weather Alert Hub
  {
    id: 7,
    title: "Frost & Extreme Weather Alert Hub",
    persona: "Primary & Secondary: All Growers",
    function: "Actionable Freeze Warnings & Mitigation Protocol",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--accent-urgent);">Frost & Risk Mitigation</h2>
            <div class="header-subtag">Emergency Agronomic Operations Center</div>
          </div>
          <div class="icon-action-btn" style="color:var(--accent-urgent); border-color:var(--accent-urgent);">${icons.shieldAlert('w-4 h-4')}</div>
        </div>

        <!-- Main Radiational Freeze Banner (Terracotta token) -->
        <div class="alert-box-urgent" style="border-width:2px; box-shadow:var(--shadow-md);">
          <div class="card-header-row">
            <span class="badge-tag" style="background:var(--accent-urgent); color:var(--text-on-brand); border:none;">
              ACTIVE WARNING
            </span>
            <span style="font-size:12px; font-weight:700; color:var(--accent-urgent);">Starts in 35h</span>
          </div>

          <div style="margin:4px 0;">
            <div style="font-size:20px; font-weight:800; color:var(--text-primary); letter-spacing:-0.02em;">
              Light Radiational Freeze: 29°F (-1.6°C)
            </div>
            <div style="font-size:12px; color:var(--text-primary); margin-top:2px;">
              <strong>Freeze Window:</strong> Friday 03:30 AM – 07:15 AM (Duration: 3h 45m).
            </div>
            <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">
              <strong>Cause:</strong> Cloudless clear skies, wind < 2mph, high ground heat loss.
            </div>
          </div>
        </div>

        <!-- Step-by-Step Mitigation Protocol Checklist -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.check('w-4 h-4')} Protection Action Plan</span>
            <span style="font-size:11px; color:var(--text-secondary);">5 Steps</span>
          </div>

          <div class="checklist-item checked" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">1. Pre-hydrate garden beds Thursday 2 PM</span>
              <span class="check-sub">Wet soil conducts and stores 4x more solar heat than dry soil.</span>
            </div>
          </div>

          <div class="checklist-item" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">2. Anchor Agribon-19 fleece over Bed 2 & 4</span>
              <span class="check-sub">Adds +4°F to +6°F of thermal protection. Weigh edges with rocks.</span>
            </div>
          </div>

          <div class="checklist-item" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">3. Move potted Meyer Lemons into porch</span>
              <span class="check-sub">Citrus blossoms burn below 32°F.</span>
            </div>
          </div>

          <div class="checklist-item" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">4. Shut cold-frame sash tightly by 4 PM</span>
              <span class="check-sub">Traps lingering late-afternoon solar radiation before dusk.</span>
            </div>
          </div>

          <div class="checklist-item" onclick="toggleChecklist(this)">
            <div class="check-box">${icons.check('w-3 h-3')}</div>
            <div class="check-content">
              <span class="check-text">5. Arm greenhouse thermostat backup (40°F)</span>
              <span class="check-sub">Ensures warm-season propagation trays remain undamaged.</span>
            </div>
          </div>
        </div>

        <!-- Historical Frost Context -->
        <div class="agro-card">
          <div class="card-header-row">
            <span class="card-title">${icons.info('w-4 h-4')} Historical Microclimate Context</span>
            <span class="badge-tag">10-Yr Record</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary);">
            Average last spring frost in Sonoma Foothill: <strong>April 8</strong>. This freeze is 16 days early. Next 10 days show a steady warming trend.
          </p>
        </div>
      </div>
      ${renderBottomNav('alerts')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 8: My Plots & Beds Microzone Tracker
  {
    id: 8,
    title: "My Plots & Microzones Tracker",
    persona: "Primary: Garden Spatial Management",
    function: "Bed Telemetry, Microclimate Sun & Crop Health",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Garden Plots & Microzones</h2>
            <div class="header-subtag">4 Cultivated Zones • 18 Crop Varieties</div>
          </div>
          <button class="screen-meta-btn" onclick="openSheet('Add New Cultivation Bed', '<div style=\'display:flex; flex-direction:column; gap:8px;\'><label class=\'input-label\'>Bed Name</label><input type=\'text\' class=\'input-field\' value=\'Bed 5 • Heirloom Cucurbits\' /><button class=\'btn-primary\' onclick=\'closeSheet(); showToast("✓ Bed 5 created with sensor mapping");\'>Save Plot</button></div>')">+ Add Bed</button>
        </div>

        <!-- Overall Health Stat Card -->
        <div class="metric-grid-2">
          <div class="metric-tile">
            <span class="metric-label">Garden Health Index</span>
            <div class="metric-value" style="color:var(--brand-primary);">86%</div>
            <span class="metric-desc">High vegetative vigor</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Active Sun Exposure</span>
            <div class="metric-value">7.8<span class="metric-unit">hrs</span></div>
            <span class="metric-desc">Southward orientation</span>
          </div>
        </div>

        <!-- Plot Cards -->
        <div style="display:flex; flex-direction:column; gap:10px;">
          <!-- Bed 1 -->
          <div class="agro-card">
            <div class="card-header-row">
              <span style="font-size:14px; font-weight:700; color:var(--text-primary);">Bed 1 • Kitchen Greens & Radish</span>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Raised Bed</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-secondary);">
              <span>Loam + Compost • Full Sun</span>
              <span>Soil: <strong>59°F</strong> • Moist: <strong>74%</strong></span>
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:2px;">
              <span class="badge-tag">Butterhead Lettuce</span>
              <span class="badge-tag">French Breakfast Radish</span>
              <span class="badge-tag">Cilantro</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; color:var(--brand-secondary); border-top:1px solid var(--border-subtle); padding-top:6px; margin-top:4px;">
              <span>Next harvest: Friday 7:00 AM</span>
              <span style="font-weight:600; cursor:pointer;" onclick="navigateToScreen(9)">Harvest Plan →</span>
            </div>
          </div>

          <!-- Bed 2 -->
          <div class="agro-card" style="border-left:4px solid var(--accent-warning);">
            <div class="card-header-row">
              <span style="font-size:14px; font-weight:700; color:var(--text-primary);">Bed 2 • Brassicas & Alliums</span>
              <span class="badge-tag" style="background:var(--tint-warning-15); color:var(--accent-warning);">Fleece Needed Fri</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-secondary);">
              <span>Inground Terrace • Moist: <strong>72%</strong></span>
              <span>Soil: <strong>56°F</strong></span>
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:2px;">
              <span class="badge-tag">Tuscan Dinosaur Kale</span>
              <span class="badge-tag">Early Purple Sprouting Broccoli</span>
            </div>
          </div>

          <!-- Bed 3: High Tunnel -->
          <div class="agro-card">
            <div class="card-header-row">
              <span style="font-size:14px; font-weight:700; color:var(--text-primary);">High Tunnel Polyhouse 1</span>
              <span class="badge-tag" style="background:var(--brand-primary); color:var(--text-on-brand);">+6°F Microclimate</span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:12px; color:var(--text-secondary);">
              <span>Protected row • RH: <strong>62%</strong></span>
              <span>Air: <strong>71°F</strong> (Warmest zone)</span>
            </div>
            <div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:2px;">
              <span class="badge-tag">Sweet Bell Peppers</span>
              <span class="badge-tag">Early Cherry Tomatoes</span>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomNav('plots')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 9: Harvest Window & Market Day Planner
  {
    id: 9,
    title: "Harvest & Market Day Planner",
    persona: "Primary: Small-Scale Market Growers & Home Gardeners",
    function: "Cell Turgor Quality & Farmers Market Weather Stall Prep",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Harvest & Market Planner</h2>
            <div class="header-subtag">Produce Quality & Market Weather Logistics</div>
          </div>
          <div class="icon-action-btn" onclick="alert('Export market packing list')">${icons.basket('w-4 h-4')}</div>
        </div>

        <!-- Section 1: Golden Harvest Hours Today -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.sun('w-4 h-4')} Today's Peak Harvest Windows</span>
            <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Agronomic Best</span>
          </div>

          <div class="agro-card" style="border-left:4px solid var(--brand-primary);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">Leafy Greens & Salad Mix</div>
                <div style="font-size:12px; font-weight:700; color:var(--brand-primary); margin-top:2px;">Optimal: 06:30 AM – 08:45 AM</div>
              </div>
              <span class="badge-tag">High Turgor</span>
            </div>
            <p style="font-size:11px; color:var(--text-secondary); margin-top:4px;">
              Cellular water pressure is peak before sunrise transpiration. Cut greens stay crisp 4 days longer.
            </p>
          </div>

          <div class="agro-card" style="border-left:4px solid var(--accent-warning);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--text-primary);">Culinary Herbs & Flowers</div>
                <div style="font-size:12px; font-weight:700; color:var(--accent-warning); margin-top:2px;">Optimal: 09:30 AM – 11:00 AM</div>
              </div>
              <span class="badge-tag">Dew Dry</span>
            </div>
            <p style="font-size:11px; color:var(--text-secondary); margin-top:4px;">
              Wait for morning dew evaporation so volatile aromatic oils are concentrated and packaging doesn't mold.
            </p>
          </div>
        </div>

        <!-- Section 2: Saturday Farmers Market Weather Prep -->
        <div class="alert-box-rain" style="border-width:2px; margin-top:4px;">
          <div class="card-header-row">
            <span class="alert-title">${icons.basket('w-4 h-4')} Saturday Market Weather Outlook</span>
            <span class="badge-tag" style="background:var(--accent-rain); color:var(--text-on-brand); border:none;">8 AM - 1 PM</span>
          </div>
          <div style="font-size:14px; font-weight:700; color:var(--text-primary); margin:2px 0;">
            56°F • Passing Showers (0.1 in) • Wind 9-15 mph
          </div>

          <!-- Market Logistics Checklist -->
          <div style="display:flex; flex-direction:column; gap:6px; margin-top:6px;">
            <div style="font-size:11px; font-weight:700; color:var(--accent-rain); text-transform:uppercase;">Stall Defense Checklist:</div>
            <div class="checklist-item checked" onclick="toggleChecklist(this)">
              <div class="check-box">${icons.check('w-3 h-3')}</div>
              <span class="check-text" style="font-size:12px;">Pack 30 lb canopy weights (Wind gust threshold: 15mph)</span>
            </div>
            <div class="checklist-item" onclick="toggleChecklist(this)">
              <div class="check-box">${icons.check('w-3 h-3')}</div>
              <span class="check-text" style="font-size:12px;">Roll-down clear windward rain curtains for stall</span>
            </div>
            <div class="checklist-item" onclick="toggleChecklist(this)">
              <div class="check-box">${icons.check('w-3 h-3')}</div>
              <span class="check-text" style="font-size:12px;">Keep harvested greens chilled to 38°F in insulated coolers</span>
            </div>
          </div>
        </div>
      </div>
      ${renderBottomNav('plots')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 10: Community Field Notes & Regional Phenology
  {
    id: 10,
    title: "Community Field Notes & Phenology",
    persona: "Primary: Collaborative Local Intelligence",
    function: "Crowdsourced Bio-Indicators & Pest Sightings",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Regional Field Network</h2>
            <div class="header-subtag">Within 15 Miles • Sonoma & Russian River</div>
          </div>
          <div class="icon-action-btn" onclick="openSheet('Share Regional Field Observation', '<div style=\'display:flex; flex-direction:column; gap:8px;\'><label class=\'input-label\'>Your Observation</label><textarea class=\'input-field\' rows=\'3\' placeholder=\'Report blooms, insects, or frost spots...\'></textarea><button class=\'btn-primary\' onclick=\'closeSheet(); showToast("✓ Field note broadcasted to 15-mile radius");\'>Publish to Network</button></div>')">${icons.users('w-4 h-4')}</div>
        </div>

        <!-- Filter Tabs -->
        <div style="display:flex; gap:6px; overflow-x:auto; padding-bottom:2px;">
          <button class="filter-pill active">All Notes (24)</button>
          <button class="filter-pill" onclick="alert('Filtering Phenology signals')">Phenology Cues</button>
          <button class="filter-pill" onclick="alert('Filtering Pest Sightings')">Pest Alerts</button>
          <button class="filter-pill" onclick="alert('Filtering Gear & Supplies')">Fleece Share</button>
        </div>

        <!-- Post 1: Phenology Cue -->
        <div class="agro-card">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px;">
              <div style="width:28px; height:28px; border-radius:50%; background:var(--brand-primary); color:var(--text-on-brand); font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center;">MC</div>
              <div>
                <div style="font-size:12px; font-weight:700; color:var(--text-primary);">Maria Chen • Valley Mist Farm</div>
                <div style="font-size:10px; color:var(--text-secondary);">2.4 mi NW • 42m ago</div>
              </div>
            </div>
            <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Phenology Signal</span>
          </div>

          <div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:2px;">
            🌼 Forsythia in Full Bloom in the Lower Hollow
          </div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.4;">
            Bio-indicator verified: soil surface hit 50°F this morning. Classic green light to direct-sow sugar snaps, carrots, and radishes.
          </p>

          <div style="display:flex; align-items:center; justify-content:space-between; font-size:11px; color:var(--text-secondary); border-top:1px solid var(--border-subtle); padding-top:6px;">
            <span>18 growers confirmed</span>
            <span style="color:var(--brand-primary); font-weight:600; cursor:pointer;" onclick="alert('Comment box opened')">6 Comments</span>
          </div>
        </div>

        <!-- Post 2: Pest Warning -->
        <div class="agro-card" style="border-left:4px solid var(--accent-warning);">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px;">
              <div style="width:28px; height:28px; border-radius:50%; background:var(--bg-elevated); color:var(--text-primary); font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center;">DK</div>
              <div>
                <div style="font-size:12px; font-weight:700; color:var(--text-primary);">Dan K. • Dry Creek Allotment</div>
                <div style="font-size:10px; color:var(--text-secondary);">4.1 mi SE • 3h ago</div>
              </div>
            </div>
            <span class="badge-tag" style="background:var(--tint-warning-15); color:var(--accent-warning);">Pest Sighting</span>
          </div>

          <div style="font-size:13px; font-weight:700; color:var(--text-primary); margin-top:2px;">
            🐛 Cabbage White Butterflies active in sun pockets
          </div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.4;">
            Found first egg cluster under tatsoi leaves. Net your brassicas or spray Bt if you haven't yet.
          </p>
        </div>

        <!-- Post 3: Fleece share -->
        <div class="agro-card">
          <div style="display:flex; align-items:center; justify-content:space-between;">
            <div style="display:flex; align-items:center; gap:8px;">
              <div style="width:28px; height:28px; border-radius:50%; background:var(--brand-secondary); color:var(--text-on-brand); font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center;">TR</div>
              <div>
                <div style="font-size:12px; font-weight:700; color:var(--text-primary);">Thomas R. • Cloverdale Co-op</div>
                <div style="font-size:10px; color:var(--text-secondary);">7.8 mi N • Yesterday</div>
              </div>
            </div>
            <span class="badge-tag">Supply Share</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary); line-height:1.4;">
            Have an extra 100ft roll of Agribon-19 fleece before Friday's frost. Available on the porch for anyone who needs it.
          </p>
        </div>
      </div>
      ${renderBottomNav('profile')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 11: Profile, Garden Preferences & Settings
  // Note: Explicitly requested in prompt with synchronized Light/Dark mode switcher!
  {
    id: 11,
    title: "Profile & Settings",
    persona: "All Personas: Personalization",
    function: "Live Appearance Switcher, Hardware & Units",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Profile & Garden Settings</h2>
            <div class="header-subtag">Willow Creek Micro-Farm • Elena Ramos</div>
          </div>
          <div class="icon-action-btn" onclick="alert('Profile avatar options')">
            <div style="width:24px; height:24px; border-radius:50%; background:var(--brand-primary); color:var(--text-on-brand); font-size:11px; font-weight:700; display:flex; align-items:center; justify-content:center;">ER</div>
          </div>
        </div>

        <!-- User Identity Card -->
        <div class="agro-card" style="background:var(--bg-elevated);">
          <div style="display:flex; align-items:center; gap:12px;">
            <div style="width:48px; height:48px; border-radius:var(--radius-sm); background:var(--brand-primary); color:var(--text-on-brand); font-size:18px; font-weight:800; display:flex; align-items:center; justify-content:center;">
              ER
            </div>
            <div>
              <div style="font-size:15px; font-weight:800; color:var(--text-primary);">Elena Ramos</div>
              <div style="font-size:12px; color:var(--text-secondary);">Small-Scale Grower Tier • 0.45 Acres</div>
              <div style="font-size:11px; color:var(--brand-primary); font-weight:600;">Sonoma Valley, CA • Zone 9b</div>
            </div>
          </div>
        </div>

        <!-- CRITICAL REQUIREMENT: Live Appearance Switcher synced with Global Theme -->
        <div class="agro-card" style="border:2px solid var(--brand-primary);">
          <div class="card-header-row">
            <span class="card-title">${icons.sun('w-4 h-4')} Appearance & Interface Theme</span>
            <span class="badge-tag" id="screen11-theme-status">Light</span>
          </div>
          <p style="font-size:12px; color:var(--text-secondary);">
            Toggle smoothly between themes. All 12 screens and cards update instantaneously.
          </p>

          <!-- Interactive Segmented Theme Switcher inside Screen 11 -->
          <div class="segmented-ctl" style="width:100%; margin-top:4px;">
            <button class="seg-btn" id="s11-btn-light" style="flex:1; justify-content:center;" onclick="setTheme('light')">
              ${icons.sun('w-4 h-4')}
              <span>Warm Harvest & Soil</span>
            </button>
            <button class="seg-btn" id="s11-btn-dark" style="flex:1; justify-content:center;" onclick="setTheme('dark')">
              ${icons.moon('w-4 h-4')}
              <span>Evening Loam & Moss</span>
            </button>
          </div>

          <!-- Color Swatch Preview Indicators -->
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:8px; padding-top:8px; border-top:1px solid var(--border-subtle); font-size:11px; color:var(--text-secondary);">
            <span>Active CSS Palette:</span>
            <div style="display:flex; gap:6px;">
              <span style="width:12px; height:12px; border-radius:50%; background:var(--brand-primary);" title="Brand Primary"></span>
              <span style="width:12px; height:12px; border-radius:50%; background:var(--brand-secondary);" title="Brand Secondary"></span>
              <span style="width:12px; height:12px; border-radius:50%; background:var(--accent-warning);" title="Accent Warning"></span>
              <span style="width:12px; height:12px; border-radius:50%; background:var(--accent-urgent);" title="Accent Urgent"></span>
              <span style="width:12px; height:12px; border-radius:50%; background:var(--accent-rain);" title="Accent Rain"></span>
            </div>
          </div>
        </div>

        <!-- Hardware & Sensor Integrations -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.wifi('w-4 h-4')} Connected Sensors</span>
            <button class="screen-meta-btn" onclick="openSheet('Bluetooth Sensor Pairing', '<div style=\'text-align:center; padding:16px;\'><div style=\'font-size:24px; margin-bottom:8px;\'>📡</div><div style=\'font-weight:700;\'>Scanning for BLE 5.0 Soil Probes...</div><p style=\'font-size:12px; color:var(--text-secondary); margin:6px 0 12px;\'>Hold probe button for 3 seconds.</p><button class=\'btn-primary\' onclick=\'closeSheet(); showToast("✓ Soil Probe #02 paired successfully");\'>Simulate Pair</button></div>')">+ Pair Probe</button>
          </div>

          <div class="agro-card" style="padding:10px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Ambient Weather WS-2902C</div>
                <div style="font-size:11px; color:var(--text-secondary);">Roof Station • Live 60s stream</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Connected</span>
            </div>
          </div>

          <div class="agro-card" style="padding:10px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">BLE Soil Probe #01 (Bed 2)</div>
                <div style="font-size:11px; color:var(--text-secondary);">Moisture & 2" Temp • Battery 88%</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Online</span>
            </div>
          </div>
        </div>

        <!-- Unit Preferences & Notifications -->
        <div class="agro-card">
          <div class="card-header-row">
            <span class="card-title">${icons.settings('w-4 h-4')} Units & Alert Triggers</span>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; padding:4px 0;">
            <span style="font-size:13px; color:var(--text-primary);">Temperature Scale</span>
            <div class="segmented-ctl">
              <button class="seg-btn active" data-unit-toggle="imperial" style="padding:2px 8px; font-size:11px;" onclick="setUnits('imperial')">°F</button>
              <button class="seg-btn" data-unit-toggle="metric" style="padding:2px 8px; font-size:11px;" onclick="setUnits('metric')">°C</button>
            </div>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; padding:4px 0; border-top:1px solid var(--border-subtle);">
            <span style="font-size:13px; color:var(--text-primary);">Precipitation Units</span>
            <div class="segmented-ctl">
              <button class="seg-btn active" data-rain-toggle="in" style="padding:2px 8px; font-size:11px;" onclick="showToast('Precipitation units set to Inches')">Inches</button>
              <button class="seg-btn" data-rain-toggle="mm" style="padding:2px 8px; font-size:11px;" onclick="showToast('Precipitation units set to Millimeters (mm)')">mm</button>
            </div>
          </div>

          <div style="display:flex; align-items:center; justify-content:space-between; padding:4px 0; border-top:1px solid var(--border-subtle);">
            <div>
              <div style="font-size:13px; font-weight:600; color:var(--text-primary);">Frost Alerts (< 34°F)</div>
              <div style="font-size:10px; color:var(--text-secondary);">Push Notification & SMS</div>
            </div>
            <span class="badge-tag" style="background:var(--brand-primary); color:var(--text-on-brand);">Active</span>
          </div>
        </div>
      </div>
      ${renderBottomNav('profile')}
      <div class="home-indicator"></div>
    `
  },

  // SCREEN 12: Admin Guidance & Agronomic Content Manager
  // Note: Support role for Authorized Administrators as requested in prompt!
  {
    id: 12,
    title: "Admin Agronomic Console",
    persona: "Support Role: Authorised Administrators",
    function: "Regional Advisory Publishing & Anomaly Verification",
    html: `
      ${renderStatusBar()}
      <div class="mobile-viewport">
        <!-- Header -->
        <div class="screen-app-header">
          <div>
            <h2 style="font-size:18px; font-weight:800; color:var(--text-primary);">Agronomic Admin Console</h2>
            <div class="header-subtag">Support & Guidance Manager • Staff Access</div>
          </div>
          <span class="badge-tag" style="background:var(--brand-primary); color:var(--text-on-brand); border:none;">
            ${icons.admin('w-3.5 h-3.5')} Staff Agronomist
          </span>
        </div>

        <!-- Platform Telemetry Grid -->
        <div class="metric-grid-4">
          <div class="metric-tile">
            <span class="metric-label">Active Stations</span>
            <div class="metric-value">1,420</div>
            <span class="metric-desc">North Coast Basin</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Micro-Grids</span>
            <div class="metric-value">18</div>
            <span class="metric-desc">Calibrated</span>
          </div>
          <div class="metric-tile" style="border-color:var(--accent-warning); background:var(--tint-warning-15);">
            <span class="metric-label" style="color:var(--accent-warning);">Field Flags</span>
            <div class="metric-value" style="color:var(--accent-warning);">3</div>
            <span class="metric-desc">Pending review</span>
          </div>
          <div class="metric-tile">
            <span class="metric-label">Model Health</span>
            <div class="metric-value">99.4%</div>
            <span class="metric-desc">GDD accuracy</span>
          </div>
        </div>

        <!-- Quick Admin Action Buttons -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <button class="btn-primary" style="background:var(--accent-urgent);" onclick="openSheet('Emergency Broadcast Console', '<div style=\'display:flex; flex-direction:column; gap:8px;\'><div style=\'font-weight:700; color:var(--accent-urgent);\'>Broadcast to Zone 9a-10b (1,420 growers)</div><textarea class=\'input-field\' rows=\'3\'>Freeze advisory: Friday 03:30 AM drop to 29°F. Apply floating row covers.</textarea><button class=\'btn-primary\' style=\'background:var(--accent-urgent);\' onclick=\'closeSheet(); showToast("📢 Freeze bulletin broadcasted to 1,420 stations");\'>Transmit Emergency Alert</button></div>')">
            ${icons.frost('w-4 h-4')} Broadcast Regional Frost Bulletin
          </button>
          <button class="btn-secondary" onclick="alert('Pest Degree-Day Threshold Editor opened')">
            ${icons.bug('w-4 h-4')} Calibrate Disease Degree-Day Model
          </button>
        </div>

        <!-- Published Guidance Content Queue -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.layers('w-4 h-4')} Published Field Advisories</span>
            <span style="font-size:11px; color:var(--text-secondary);">Active Guides</span>
          </div>

          <div class="agro-card" style="padding:10px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Early Spring Freeze Protocol v3.2</div>
                <div style="font-size:11px; color:var(--text-secondary);">Published to Zone 9a-10b • 3,240 views</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Live</span>
            </div>
          </div>

          <div class="agro-card" style="padding:10px 14px;">
            <div style="display:flex; align-items:center; justify-content:space-between;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Crucifer Flea Beetle Thermal Cue Guide</div>
                <div style="font-size:11px; color:var(--text-secondary);">Model accuracy: 94% • Updated yesterday</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Live</span>
            </div>
          </div>
        </div>

        <!-- Grower Feedback & Anomaly Verification Queue -->
        <div style="display:flex; flex-direction:column; gap:8px;">
          <div class="card-header-row">
            <span class="card-title">${icons.shieldAlert('w-4 h-4')} Anomaly Reports (Verification Queue)</span>
          </div>

          <div class="agro-card" style="border-left:4px solid var(--accent-warning);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--text-primary);">Report #5021 • Russian River Hollow</div>
                <div style="font-size:11px; color:var(--text-secondary);">Grower station measured 26.2°F vs model 30.5°F</div>
              </div>
              <span class="badge-tag" style="background:var(--tint-warning-15); color:var(--accent-warning);">Action Required</span>
            </div>
            <p style="font-size:11px; color:var(--text-primary); margin-top:4px;">
              Agronomist review: Micro-valley cold sink detected. Applying -4.3°F offset to grid cell #09.
            </p>
            <div style="display:flex; gap:8px; margin-top:6px;">
              <button class="btn-primary" style="padding:6px 10px; font-size:11px;" onclick="alert('Model offset verified & applied!')">Verify & Apply Offset</button>
              <button class="btn-secondary" style="padding:6px 10px; font-size:11px;" onclick="alert('Contacting grower for sensor audit')">Contact Grower</button>
            </div>
          </div>
        </div>
      </div>
      <nav class="bottom-tab-bar">
        <button class="tab-item" onclick="navigateToScreen(2)">${icons.sprout()}<span>Garden Mode</span></button>
        <button class="tab-item active">${icons.admin()}<span>Admin Console</span></button>
        <button class="tab-item" onclick="navigateToScreen(11)">${icons.settings()}<span>Settings</span></button>
      </nav>
      <div class="home-indicator"></div>
    `
  }
];

module.exports = screens;
