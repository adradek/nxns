import { Controller } from "stimulus"

export default class DayToggleController extends Controller {
  static targets = ["thingToHide"]

  thingToHideTarget: HTMLElement

  toggle() {
    this.thingToHideTarget.classList.toggle("is-hidden")
  }
}