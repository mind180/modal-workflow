export class LoadingBars extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML = this.layout();
  }

  layout() {
    const style = `
      <style>
        .overlay {
          position: absolute;
          background-color: black;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          opacity: 0.5;
        }

        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-17px, -15px);
        }

        .loader-bars:before,
        .loader-bars:after,
        .loader-bars span {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 10px;
          height: 30px;
          background-color: #fff;
          -webkit-animation: grow 1.5s linear infinite;
          animation: grow 1.5s linear infinite;
        }

        .loader-bars:after {
          left: 15px;
          -webkit-animation: grow 1.5s linear -.5s infinite;
          animation: grow 1.5s linear -.5s infinite;
        }
        
        .loader-bars span {
          left: 30px;
          -webkit-animation: grow 1.5s linear -1s infinite;
          animation: grow 1.5s linear -1s infinite;
        } 

        @keyframes grow {
          0% { -webkit-transform: scaleY(0); transform: scaleY(0); opacity: 0;}
          50% { -webkit-transform: scaleY(1); transform: scaleY(1); opacity: 1;}
          100% { -webkit-transform: scaleY(0); transform: scaleY(0); opacity: 0;}
        }
      </style>
    `;

    const template = `
      <div class='overlay'></div>
      <span class="loader loader-bars"><span></span></span>
    `;

    return style + template;
  }
}

customElements.define('loading-bars', LoadingBars);