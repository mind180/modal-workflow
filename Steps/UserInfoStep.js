import {LoginStep} from "/Steps/LoginStep.js";

export class UserInfoStep extends HTMLElement {
  constructor(modal) {
    super();
    this.modal = modal;
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.shadow.innerHTML = this.layout();
  }

  render() {

  }

  setModal(modal) {
    this.modal= modal;
  }

  layout() {
    const style = `
        <style>
  
        </style>
      `;
  
    const template = `
        <div id='content'>
          <div>USER INFO</div>
          <input id='firstName' type='text'>
          <input id='lastName' type='text'>
          <input id='age' type='number'>
        </div>
      `;

    return style + template;
  }

  next() {
    const fn = this.shadow.getElementById('firstName');
    const ln = this.shadow.getElementById('lastName');
  }

  back() {
    this.modal.changeStep(new LoginStep(this.modal));
  }
}

customElements.define('user-info-step', UserInfoStep);