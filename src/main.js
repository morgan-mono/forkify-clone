import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPenToSquare,
  faBookmark,
  faClock,
  faSmile
} from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faUserGroup,
  faArrowRight,
  faArrowLeft,
  faCirclePlus,
  faCircleMinus,
  faCheck,
  faCircleNotch,
  faTriangleExclamation,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPenToSquare,
  faBookmark,
  faClock,
  faMagnifyingGlass,
  faUserGroup,
  faArrowLeft,
  faArrowRight,
  faCircleMinus,
  faCirclePlus,
  faCheck,
  faSmile,
  faCircleNotch,
  faTriangleExclamation,
  faAngleLeft
);



createApp(App)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");
