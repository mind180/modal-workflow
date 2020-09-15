import {Step} from "../Step.js";
import {UserInfoStep} from "./UserInfoStep.js";

export class LoginStep extends Step {
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
    
    this.modal.changeStep(new UserInfoStep(this.modal));
  }

  back() {
  }
}

customElements.define('login-step', LoginStep);