// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import "./styles/reset.css";
// import "./styles/theme.css";


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );


// reportWebVitals();


import React from "react";
//import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client'; // Import createRoot
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";


createRoot(document.getElementById("root")).render( // Use createRoot
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
