import {WorkflowModal} from "/WorkflowModal.js";
import {LoginStep} from "/Steps/UserInfoFlow/LoginStep.js";
import {LoadingBars} from "/Effects/LoadingBars.js";

const initialLoginStep = new LoginStep();
const workflowModal = new WorkflowModal(initialLoginStep, new LoadingBars());
document.body.appendChild(workflowModal);