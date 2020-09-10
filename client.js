import {WorkflowModal} from "/WorkflowModal.js";
import {LoginStep} from "/Steps/LoginStep.js";
import {UserInfoStep} from "/Steps/UserInfoStep.js";

const workflowModal = new WorkflowModal(new LoginStep());
document.body.appendChild(workflowModal);