import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import NgoProvider from "./context/NgoProvider";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <NgoProvider>
          <App />
        </NgoProvider>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
