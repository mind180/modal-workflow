import {Step} from "../Step.js";
import { UserContacts } from "./UserContacts.js";
import {LoginStep} from "./LoginStep.js";

export class UserInfoStep extends Step {
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