import { LitElement, html, css } from 'lit';
import './gaggimate-card-editor.js';

const MODES = {
  0: { name: 'Standby', icon: 'mdi:power-standby' },
  1: { name: 'Brew', icon: 'mdi:coffee' },
  2: { name: 'Steam', icon: 'mdi:cloud' },
  3: { name: 'Water', icon: 'mdi:water' }
};

class GaggiMateCard extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object },
      _currentTemp: { type: Number },
      _targetTemp: { type: Number },
      _pressure: { type: Number },
      _mode: { type: Number },
      _profile: { type: String },
      _weight: { type: Number },
      _brewing: { type: Boolean }
    };
  }

  static getStubConfig() {
    return {
      entity: 'sensor.gaggimate_mode',
      show_profile: true,
      show_progress: true
    };
  }

  static getConfigElement() {
    return document.createElement('gaggimate-card-editor');
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    this.config = {
      show_profile: true,
      show_progress: true,
      ...config
    };
  }

  getCardSize() {
    return 4;
  }

  shouldUpdate(changedProps) {
    if (!this.config) {
      return false;
    }
    return true;
  }

  updated(changedProps) {
    if (changedProps.has('hass')) {
      this._updateFromHass();
    }
  }

  _updateFromHass() {
    if (!this.hass || !this.config) return;

    const deviceId = this._getDeviceId();
    if (!deviceId) return;

    // Get all entities for this device
    this._currentTemp = this._getEntityState(`sensor.${deviceId}_current_temperature`);
    this._targetTemp = this._getEntityState(`sensor.${deviceId}_target_temperature`);
    this._pressure = this._getEntityState(`sensor.${deviceId}_current_pressure`);
    this._weight = this._getEntityState(`sensor.${deviceId}_current_weight`);

    // Get mode from sensor or select
    const modeSensor = this.hass.states[`sensor.${deviceId}_mode`];
    if (modeSensor) {
      const modeId = modeSensor.attributes?.mode_id;
      this._mode = modeId !== undefined ? modeId : 0;
    }

    // Get profile
    const profileSensor = this.hass.states[`sensor.${deviceId}_selected_profile`];
    if (profileSensor) {
      this._profile = profileSensor.state;
    }

    // Check if brewing (you might need to add a brewing sensor to the integration)
    // For now, we'll assume we're not brewing
    this._brewing = false;
  }

  _getDeviceId() {
    if (!this.config.entity) return null;
    const parts = this.config.entity.split('.');
    if (parts.length < 2) return null;
    // Extract device ID from entity (e.g., sensor.gaggimate_192_168_1_100_mode -> gaggimate_192_168_1_100)
    const entityName = parts[1];
    const lastUnderscore = entityName.lastIndexOf('_');
    return entityName.substring(0, lastUnderscore);
  }

  _getEntityState(entityId) {
    if (!this.hass || !this.hass.states) return null;
    const entity = this.hass.states[entityId];
    return entity ? parseFloat(entity.state) : null;
  }

  _handleModeChange(newMode) {
    const deviceId = this._getDeviceId();
    if (!deviceId) return;

    const selectEntity = `select.${deviceId}_mode`;
    const modeName = MODES[newMode]?.name;

    if (modeName) {
      this.hass.callService('select', 'select_option', {
        entity_id: selectEntity,
        option: modeName
      });
    }
  }

  _handleBrewToggle() {
    // TODO: Implement brew start/stop
    // This will require a service or button entity from the integration
    console.log('Brew toggle clicked');
  }

  _formatTemp(temp) {
    return temp !== null ? temp.toFixed(1) : '--';
  }

  _formatPressure(pressure) {
    return pressure !== null ? pressure.toFixed(1) : '--';
  }

  render() {
    if (!this.config || !this.hass) {
      return html``;
    }

    return html`
      <ha-card>
        <div class="card-content">
          ${this.config.name ? html`<h1 class="card-header">${this.config.name}</h1>` : ''}

          <!-- Status Row -->
          <div class="status-row">
            <div class="status-item">
              <ha-icon icon="mdi:thermometer"></ha-icon>
              <span class="value">${this._formatTemp(this._currentTemp)}</span>
              <span class="target">/ ${this._formatTemp(this._targetTemp)}°C</span>
            </div>

            <div class="status-item">
              <ha-icon icon="mdi:gauge"></ha-icon>
              <span class="value">${this._formatPressure(this._pressure)} bar</span>
            </div>

            ${this._weight !== null ? html`
              <div class="status-item">
                <ha-icon icon="mdi:scale"></ha-icon>
                <span class="value">${this._weight?.toFixed(1)}g</span>
              </div>
            ` : ''}
          </div>

          <!-- Mode Selector -->
          <div class="mode-selector">
            ${Object.entries(MODES).map(([modeId, mode]) => html`
              <button
                class="mode-button ${this._mode === parseInt(modeId) ? 'active' : ''}"
                @click=${() => this._handleModeChange(parseInt(modeId))}
              >
                ${mode.name}
              </button>
            `)}
          </div>

          <!-- Profile Display -->
          ${this.config.show_profile && this._profile ? html`
            <div class="profile-section">
              <div class="profile-label">Current Profile</div>
              <div class="profile-name">${this._profile}</div>
            </div>
          ` : ''}

          <!-- Brew Controls -->
          ${this._mode === 1 ? html`
            <div class="brew-controls">
              <button class="brew-button ${this._brewing ? 'brewing' : ''}" @click=${this._handleBrewToggle}>
                <ha-icon icon="${this._brewing ? 'mdi:pause' : 'mdi:play'}"></ha-icon>
                <span>${this._brewing ? 'Stop' : 'Start'} Brew</span>
              </button>
            </div>
          ` : ''}

          <!-- Progress Bar (when brewing) -->
          ${this.config.show_progress && this._brewing ? html`
            <div class="progress-section">
              <div class="progress-info">
                <span class="phase">Infusion</span>
                <span class="time">0:45</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: 60%"></div>
              </div>
            </div>
          ` : ''}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      ha-card {
        padding: 16px;
      }

      .card-header {
        margin: 0 0 16px 0;
        font-size: 24px;
        font-weight: 500;
      }

      .status-row {
        display: flex;
        justify-content: space-around;
        margin-bottom: 16px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: 12px;
      }

      .status-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }

      .status-item ha-icon {
        --mdi-icon-size: 24px;
        color: var(--secondary-text-color);
      }

      .status-item .value {
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .status-item .target {
        font-size: 16px;
        font-weight: 500;
        color: var(--success-color, #4caf50);
      }

      .mode-selector {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
        background: var(--secondary-background-color);
        padding: 4px;
        border-radius: 24px;
      }

      .mode-button {
        flex: 1;
        padding: 12px 16px;
        border: none;
        border-radius: 20px;
        background: transparent;
        color: var(--secondary-text-color);
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
      }

      .mode-button:hover {
        background: var(--divider-color);
      }

      .mode-button.active {
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      .profile-section {
        text-align: center;
        margin-bottom: 16px;
      }

      .profile-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: 4px;
      }

      .profile-name {
        font-size: 20px;
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .brew-controls {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
      }

      .brew-button {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 16px 32px;
        border: none;
        border-radius: 28px;
        background: var(--primary-color);
        color: var(--text-primary-color);
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      }

      .brew-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      .brew-button:active {
        transform: translateY(0);
      }

      .brew-button.brewing {
        background: var(--error-color, #f44336);
      }

      .brew-button ha-icon {
        --mdi-icon-size: 24px;
      }

      .progress-section {
        margin-top: 16px;
      }

      .progress-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 14px;
      }

      .progress-info .phase {
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 12px;
      }

      .progress-info .time {
        font-weight: 600;
        color: var(--primary-text-color);
      }

      .progress-bar {
        height: 8px;
        background: var(--secondary-background-color);
        border-radius: 4px;
        overflow: hidden;
      }

      .progress-fill {
        height: 100%;
        background: var(--primary-color);
        transition: width 0.3s ease;
      }
    `;
  }
}

customElements.define('gaggimate-card', GaggiMateCard);

// Announce the card to Home Assistant
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'gaggimate-card',
  name: 'GaggiMate Card',
  description: 'Custom card for controlling GaggiMate espresso machine',
  preview: false,
  documentationURL: 'https://github.com/jaapp/gaggimate_card'
});

console.info(
  '%c GAGGIMATE-CARD %c 1.0.0 ',
  'color: white; background: #0066cc; font-weight: 700;',
  'color: #0066cc; background: white; font-weight: 700;'
);
