import { html, css, LitElement } from "lit";

export class WebComponent extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 8px;
      color: var(--web-component-text-color, #000);
      border: 1px solid black;
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = "Hey there";
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} ${this.counter}</h2>
      <button @click=${this.__increment}>doe der iets bij</button>
    `;
  }
}
customElements.define("web-component", WebComponent);
