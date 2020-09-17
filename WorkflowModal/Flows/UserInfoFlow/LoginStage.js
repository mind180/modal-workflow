import {Stage} from "../Stage.js";
import {UserInfoStage} from "./UserInfoStage.js";

export class LoginStage extends Stage {
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

   async next() {
    //TODO implement ID concept for new steps
    this.modal.showLoading();

    const res = await new Promise((resolve, reject) => {
      setTimeout(() => resolve("готово!"), 2000);
    })
    
    this.modal.changeStep(new UserInfoStage(this.modal));
  }

  back() {
  }
}

customElements.define('login-step', LoginStage);