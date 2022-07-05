import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { useState } from "react";
import { LogginContext } from "./context/LogginContext";
import AppRouter from "./routers/AppRouter";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const state = { isLogged, setIsLogged };
  return (
    <LogginContext.Provider value={state}>
      <Provider store={store}>
        <div className="App">
          <AppRouter />
        </div>
      </Provider>
    </LogginContext.Provider>
  );
}

export default App;
