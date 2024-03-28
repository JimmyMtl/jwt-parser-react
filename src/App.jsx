import "./App.scss";
import Main from "./pages/Main/Main.jsx";
import JWTProvider from "./reducers/JWT/JWTContext.jsx";

function App() {
  return (
    <JWTProvider>
      <Main />
    </JWTProvider>
  );
}

export default App;
