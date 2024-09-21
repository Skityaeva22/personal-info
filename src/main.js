import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import ru from "element-plus/es/locale/lang/ru";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "./assets/index.scss";
import App from "./App.vue";
import { router } from "./providers";

const app = createApp(App)

app
    .use(createPinia())
    .use(ElementPlus, { locale: ru })
    .use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue))
    app.component(key, component);

app.mount('#app')
