import {WorkflowModal} from "/WorkflowModal/WorkflowModal.js";
import {LoadingBars} from "/WorkflowModal/WorkflowModalEffects/LoadingBars.js";
import {LoginStage} from "/WorkflowModal/Flows/UserInfoFlow/LoginStage.js";

function initHandlers() {
  const workflowButton = document.getElementById('workflowButton');
  workflowButton.addEventListener('click', openWorkflowHandler);
}


function openWorkflowHandler(event) {
  const initialLoginStage = new LoginStage();
  const workflowModal = new WorkflowModal(initialLoginStage, new LoadingBars());
  document.body.appendChild(workflowModal);
}

initHandlers();