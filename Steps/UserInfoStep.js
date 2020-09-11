import { UserContacts } from "/Steps/UserContacts.js";
import {LoginStep} from "/Steps/LoginStep.js";

export class UserInfoStep extends HTMLElement {
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
          <div>User info:</div>
          <div id='fields'>
            <input id='firstName' type='text' placeholder='first name'>
            <input id='lastName' type='text' placeholder='last name'>
            <input id='age' type='number' placeholder='age'>
          </div>
        </div>
      `;

    return style + template;
  }

  next() {
    const fn = this.shadow.getElementById('firstName');
    const ln = this.shadow.getElementById('lastName');
    this.modal.changeStep(new UserContacts(this.modal));
  }

  back() {
    this.modal.changeStep(new LoginStep(this.modal));
  }
}

customElements.define('user-info-step', UserInfoStep);