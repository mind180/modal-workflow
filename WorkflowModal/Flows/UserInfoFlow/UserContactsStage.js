import {Stage} from "../Stage.js";
import {UserInfoStage} from "./UserInfoStage.js";

export class UserContactsStage extends Stage {
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
          <div>User contacts:</div>
          <div id='fields'>
            <input id='email' type='email' placeholder='email'>
            <input id='phone' type='tel' placeholder='phone'>
            <input id='site' type='url' placeholder='site'>
          </div>
        </div>
      `;

    return style + template;
  }

  next() {
    const email = this.shadow.getElementById('email');
    const phone = this.shadow.getElementById('phone');
    const site = this.shadow.getElementById('site');
  }

  back() {
    this.modal.changeStep(new UserInfoStage(this.modal));
  }
}

customElements.define('user-contacts', UserContactsStage);