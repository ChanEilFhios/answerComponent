window.customElements.define('quiz-answer', class extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:"open"})
    this.shadowRoot.innerHTML = `

    `
  }

  connectedCallback() {
  }

  attributeChangedCallback(name, oldValue, newValue) {
  }
  
  static get observedAttributes() { return []; }
})