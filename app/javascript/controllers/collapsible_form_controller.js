import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['form', 'button']

  connect() {
    this.formTarget.style.height = "0"
    this.formTarget.style.overflow = "hidden"
    this.formTarget.style.transition = "height 0.2s ease-in"
  }

  expandDropdown() {
    this.formTarget.style.height = "150px";
    this.buttonTarget.remove();
  }
}
