class svgUI extends htmlElement {
  let wrapper = document.createElmentNS('http://www.w3.org/2000/svg', 'svg');

  constructor() {
    super();

  }

  connectedCallback() {
    let shadow = this.attachShadow({mode: 'open'});

    if(this.hasChildren())
    shadow.appendChild(this.wrapper);
  }


}
