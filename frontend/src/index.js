import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./assets/css/tailwind.output.css";
import App from "./App";
import { SidebarProvider } from "./context/SidebarContext";
import ThemedSuspense from "./components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { positions, Provider as ReactAlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

// if (process.env.NODE_ENV !== 'production') {
//   const axe = require('react-axe')
//   axe(React, ReactDOM, 1000)
// }

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ReactAlertProvider template={AlertTemplate} {...options}>
        <SidebarProvider>
          <Suspense fallback={<ThemedSuspense />}>
            <Windmill usePreferences>
              <App />
            </Windmill>
          </Suspense>
        </SidebarProvider>
      </ReactAlertProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
