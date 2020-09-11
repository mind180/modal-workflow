export class Step extends HTMLElement {
  constructor(_modal) {
    super();
    this.modal = _modal;
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
    console.log("Method has not been implemented");
  }

  back() {
    console.log("Method has not been implemented");
  }
}

customElements.define('empty-step', Step);