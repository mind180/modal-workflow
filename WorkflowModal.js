export class WorkflowModal extends HTMLElement {
  constructor(initialStep, loadingEffect) {
    super();
    this.step = initialStep;
    this.step.setModal(this);
    this.loadingEffect = loadingEffect;
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
    this.initHandlers();
  }

  initHandlers() {
    const btnNext = this.shadow.getElementById('btnNext');
    const btnBack = this.shadow.getElementById('btnBack');
    const closeModal = this.shadow.getElementById('closeModal');

    btnNext.addEventListener('click', this.next.bind(this));
    btnBack.addEventListener('click', this.back.bind(this));
    closeModal.addEventListener('click', this.close.bind(this));    
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

  async next() {
    await this.step.next();
    this.renderStep();
  }

  back() {
    this.step.back();
    this.renderStep();
  }

  changeStep(step) {
    this.step = step;
  }

  close() {
    //TODO create animation
    this.remove();
  }

  showLoading() {
    const body = this.shadow.getElementById('body');
    body.appendChild(this.loadingEffect);
  }

  hideLoading() {

  }

  layout() {
    const style = `
        <style>
          .container {
            font-family: sans-serif;
            max-width: 500px;
            border: 1px solid #63a3a3;
            border-radius: .3rem;
            margin: 30px auto;
            position: relative;
            animation: appearance .3s ease-in-out;
          }

          .vanish {
            animation: vanish .3s ease-in-out;
          }
  
          header {
            background-color: #083e3e;
            border-radius: .3rem .3rem 0 0;
            color: white;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
          }

          #closeModal {
            cursor: pointer;
          }

          #closeModal:hover {
            font-weight: bold;
          }
  
          #body {
            height: 200px;
            background-color: #162522;
            color: cadetblue;
            padding: 1rem;
            position: relative;
          }
  
          footer {
            background-color: #083e3e;
            border-radius: 0 0 .3rem .3rem;
            display: flex;
            justify-content: flex-end;
            padding: 1rem;
          }
  
          .btn {
            border: none;
            background-color: #63a3a3;
            color: white;
            cursor: pointer;
            padding: 10px 20px;
          }

          @keyframes appearance {
            from { 
              top: -300px;
              opacity: 0;
            }
            to {
              top: 0;
              opacity: 1;
            }
          }

          @keyframes vanish {
            from { 
              top: 0;
              opacity: 1;
            }
            to {
              top: -300px;
              opacity: 0;
            }
          }
        </style>
      `;
  
    const template = `
        <div id='modal' class='container'>
          <header>
            <div>Header</div>
            <div id='closeModal'>×</div>
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