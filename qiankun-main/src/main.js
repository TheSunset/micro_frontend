import { registerMicroApps, start } from "qiankun";
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import routes from './router/index'

const apps = [
	{
		name: "sunset_vue_app", // 应用的名字
		entry: "//localhost:8081", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
		container: "#vue", // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
		activeRule: "/app-vue", // 激活的路径
		props: { a: 1 }, // 传递的值（可选）
	},
	{
		name: "sunset_react_app",
		entry: "//localhost:8082", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
		container: "#react",
		activeRule: "/app-react",
	},
];
registerMicroApps(apps); // 注册应用
start(); // 开启

let history = createWebHistory("/");
let router = createRouter({
	history,
	routes,
});
createApp(App).use(router).mount("#app");
