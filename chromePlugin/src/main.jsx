import { createRoot } from "react-dom/client";
import App from "./App";
// redux全局注入
import { Provider } from "react-redux";
import store from "../src/store/index";

const root = createRoot(document.getElementById("root"));
window.addEventListener("message", (res) => {
  console.log('ahhahah', res);
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
