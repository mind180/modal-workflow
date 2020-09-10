export class WorkflowModal extends HTMLElement {
  constructor(initialStep) {
    super();
    this.step = initialStep;
    this.step.setModal(this);
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.initHandlers();
  }

  initHandlers() {
    const btnNext = this.shadow.getElementById('btnNext');
    const btnBack = this.shadow.getElementById('btnBack');

    btnNext.addEventListener('click', this.next.bind(this));
    btnBack.addEventListener('click', this.back.bind(this));
  }

  render() {
    this.shadow.innerHTML = this.layout();
    this.renderStep();
  }

  renderStep() {
    const modalBody = this.shadow.getElementById('body');
    modalBody.innerHTML = '';
    modalBody.appendChild(this.step);
  }

  next() {
    this.step.next();
    this.renderStep();
  }

  back() {
    this.step.back();
  }

  changeStep(step) {
    this.step = step;
  }

  layout() {
    const style = `
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
  
    const template = `
        <div class='container'>
          <header>
            header
          </header>
          <div id='body'>
          </div>
          <footer>
            <div>
              <button id='btnBack' class='btn btn-back'>back</button>
              <button id='btnNext' class='btn btn-next'>next</button>
            </div>
          </footer>
        <div>
      `;

    return style + template;
  }
}

customElements.define("workflow-moadal", WorkflowModal);