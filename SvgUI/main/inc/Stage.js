import SvgComponent from './SvgComponent.js';

const template = `
  <svg id="svg-ui-stage"></svg>
`;

class Stage extends SvgComponent {
  constructor() {
    this.template = template;

    super();

    this.setSvgAttributes({
      svg-ui-stage: {
        width: this.getAttribute('width'),
        height: this.getAttribute('height')
      }
    })
  }
}

export default Stage;
