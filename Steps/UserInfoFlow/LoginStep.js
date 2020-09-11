import {UserInfoStep} from "./UserInfoStep.js";

export class LoginStep extends HTMLElement {
  constructor(modal) {
    super();
    this.modal = modal;
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = this.layout();
  }

  setModal(modal) {
    this.modal= modal;
  }

  layout() {
    const style = `
        <style>
          #fields {
            display: flex;
            flex-direction: column;
          }
        </style>
      `;
  
    const template = `
        <div id='content'>
          <div>Login step:</div>
          <div id='fields'>
            <input id='login' type='text' placeholder='login'>
            <input id='password' type='password' placeholder='password'>
          <div>
        </div>
      `;

    return style + template;
  }

  next() {
    const login = this.shadow.getElementById('login');
    const password = this.shadow.getElementById('password');
    
    this.modal.changeStep(new UserInfoStep(this.modal));
  }

  back() {
  }
}

customElements.define('login-step', LoginStep);