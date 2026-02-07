import { LitElement, html, css } from 'lit';

class GaggiMateCardEditor extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      config: { type: Object }
    };
  }

  setConfig(config) {
    this.config = config;
  }

  _valueChanged(ev) {
    if (!this.config || !this.hass) {
      return;
    }

    const target = ev.target;
    const value = target.checked !== undefined ? target.checked : target.value;

    if (this[`_${target.configValue}`] === value) {
      return;
    }

    const newConfig = {
      ...this.config,
      [target.configValue]: value
    };

    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(event);
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(
      (eid) => eid.startsWith('sensor.') && eid.includes('_mode')
    );

    return html`
      <div class="card-config">
        <ha-entity-picker
          .hass=${this.hass}
          .value=${this.config.entity}
          .configValue=${'entity'}
          .includeDomains=${['sensor']}
          @value-changed=${this._valueChanged}
          allow-custom-entity
          label="Entity (Mode Sensor)"
        ></ha-entity-picker>

        <paper-input
          label="Name (Optional)"
          .value=${this.config.name || ''}
          .configValue=${'name'}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <ha-formfield label="Show Profile">
          <ha-switch
            .checked=${this.config.show_profile !== false}
            .configValue=${'show_profile'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>

        <ha-formfield label="Show Progress Bar">
          <ha-switch
            .checked=${this.config.show_progress !== false}
            .configValue=${'show_progress'}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      ha-formfield {
        display: flex;
        align-items: center;
        padding: 8px 0;
      }
    `;
  }
}

customElements.define('gaggimate-card-editor', GaggiMateCardEditor);
