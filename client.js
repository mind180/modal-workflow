import {WorkflowModal} from "/WorkflowModal.js";
import {LoginStep} from "/Steps/LoginStep.js";

const initialLoginStep = new LoginStep();
const workflowModal = new WorkflowModal(initialLoginStep);
document.body.appendChild(workflowModal);