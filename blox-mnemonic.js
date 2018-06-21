import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-mnemonic`
 * A web component that generates a BIP39 mnemonic
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxMnemonic extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'blox-mnemonic',
      },
    };
  }
}

window.customElements.define('blox-mnemonic', BloxMnemonic);
