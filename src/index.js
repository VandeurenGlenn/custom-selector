import SelectorMixin from '../../custom-select-mixins/src/selector-mixin.js';
const define  = klass => customElements.define('custom-selector', klass)
export default define(class CustomSelector extends SelectorMixin(HTMLElement) {
  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = '<slot></slot>';
  }
});
