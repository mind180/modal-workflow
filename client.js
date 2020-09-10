import {WorkflowModal} from "/WorkflowModal.js";
import {LoginStep} from "/Steps/LoginStep.js";

const workflowModal = new WorkflowModal(new LoginStep());
document.body.appendChild(workflowModal);