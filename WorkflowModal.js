class WorkflowModal extends HTMLElement {
  constructor(initialStep) {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = this.layout();
  }

  next() {
    //steps.ok()
  }

  back() {
    //steps.cancel()
  }

  style() {
    return `
      <style>
        .container {
          width: 500px;
          border: 1px solid #63a3a3;
        }

        header {
          background-color: #083e3e;
          color: white;
          padding: 10px 20px;
        }

        #body {
          height: 200px;
          background-color: #162522;
          color: cadetblue;
          padding: 10px 20px;
        }

        footer {
          background-color: #083e3e;
          display: flex;
          justify-content: flex-end;
          padding: 10px;
        }

        .btn {
          border: none;
          background-color: #63a3a3;
          color: white;
          cursor: pointer;
          padding: 10px 20px;
        }
      </style>
    `;
  }

  template() {
    return `
      <div class='container'>
        <header>
          header
        </header>
        <div id='body'>
          constructor(initialStep) {
            super();
            this.shadow = this.attachShadow({mode: 'open'});
          }
          connectedCallback() {
            this.render();
          }
          render() {
            this.shadow.innerHTML = this.layout();
          }
          next() {
            //steps.ok()
          }
          back() {
            //steps.cancel()
          }
        </div>
        <footer>
          <div>
            <button class='btn btn-back'>back</button>
            <button class='btn btn-next'>next</button>
          </div>
        </footer>
      <div>
    `;
  }

  layout() {
    return this.style() + this.template();
  }

}

customElements.define("workflow-moadal", WorkflowModal);