import {Stage} from "../Stage.js";
import {UserContactsStage} from "./UserContactsStage.js";
import {LoginStage} from "./LoginStage.js";

export class UserInfoStage extends Stage {
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
    this.modal.changeStep(new UserContactsStage(this.modal));
  }

  back() {
    this.modal.changeStep(new LoginStage(this.modal));
  }
}

customElements.define('user-info-step', UserInfoStage);