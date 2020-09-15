import {WorkflowModal} from "/WorkflowModal.js";
import {LoginStep} from "/Steps/UserInfoFlow/LoginStep.js";
import {LoadingBars} from "/Effects/LoadingBars.js";

function initHandlers() {
  const workflowButton = document.getElementById('workflowButton');
  workflowButton.addEventListener('click', openWorkflowHandler);
}


function openWorkflowHandler(event) {
  const initialLoginStep = new LoginStep();
  const workflowModal = new WorkflowModal(initialLoginStep, new LoadingBars());
  document.body.appendChild(workflowModal);
}

initHandlers();