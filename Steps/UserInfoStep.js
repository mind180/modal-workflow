class UserInfoStep extends HTMLElement {

  constructor(modal) {
    super();
    this._modal = modal;
  
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.shadow.innerHTML = this.layout();
  }

  render() {

  }

  getHTMLTagName() {
    return '<login-></login-step>';
  }

  setModal(modal) {
    this._modal= modal;
  }

  layout() {
    const style = `
        <style>
  
        </style>
      `;
  
    const template = `
        <div id='content'>
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
    alert(fn.value + ' ' + ln.value);
  }

  back() {
    this._modal.changeStep(new LoginStep(this));
  }
}

customElements.define('user-info-step', UserInfoStep);