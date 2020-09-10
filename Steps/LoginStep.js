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
  
        </style>
      `;
  
    const template = `
        <div id='content'>
          <input id='login' type='text'>
          <input id='password' type='password'>
        </div>
      `;

    return style + template;
  }

  next() {
    const login = this.shadow.getElementById('login');
    const password = this.shadow.getElementById('password');
    alert(login.value + ' ' + password.value);
    
    this.modal.changeStep(new UserInfoStep(this));
  }

  back() {
    alert('back');
  }
}

customElements.define('login-step', LoginStep);