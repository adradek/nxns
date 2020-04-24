import * as ActiveStorage from "@rails/activestorage"
import Rails from "@rails/ujs"
import * as Channels from "channels"
import Turbolinks from "turbolinks"
import "controllers"

Rails.start()
Turbolinks.start()
ActiveStorage.start()