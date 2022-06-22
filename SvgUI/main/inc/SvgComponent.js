class SvgComponent extends HTMLElement {
  let template = null;

  constructor() {
    super();
  }

  init() {
    this.shadowRoot = this.attachShadow({mode: 'open'});

    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    this.init();
  }

  setSvgAttributes(attributes) {
    const ids = Object.keys(atributes);

    ids.forEach(id => {
      const attributeNames = Object.keys(attributes[id]);

      attributeNames.forEach(attributeName => {
        this.shadowRoot.querySelector('#' + id).setAttribute(attributeName, ids[attributeName]);
      });
    })
  }
}

export default SvgComponent;
