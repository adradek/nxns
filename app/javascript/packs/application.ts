import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
import * as Channels from "channels"
import Turbolinks from "turbolinks"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

class DayToggle {
  day: HTMLElement
  dayButton: HTMLElement
  dayText: HTMLElement
  buttonText: HTMLElement

  constructor(day: HTMLElement) {
    this.day = day
    this.dayButton = this.day.querySelector(".js--day-button")
    this.dayText = this.day.querySelector(".js--day-text")
    this.buttonText = this.day.querySelector(".js--button-text")
  }

  initHandlers(): void {
    this.onFilterButtonClick()
  }

  isHidden(): boolean {
    return this.dayText.classList.contains("is-hidden")
  }

  setText(): void {
    this.buttonText.innerText = this.isHidden() ? "Show" : "Hide"
  }

  onFilterButtonClick(): void {
    this.dayButton.addEventListener("click", () => {
      this.dayText.classList.toggle("is-hidden")
      this.setText()
    })
  }
  // 
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".js--day").forEach(element => {
    new DayToggle(element as HTMLElement).initHandlers()
  })
})
