import {createApp} from "vue";
import App from "./App";
import components from "@/components/UI";

console.log(components);

const Vue = createApp(App);

components.forEach((component) => {
    Vue.component(component.name, component); // Registration global vue components
});

Vue.mount("#app");
