import "./App.scss"
import Main from "./pages/Main/Main.jsx"
import JWTProvider from "./reducers/JWT/JWTContext.jsx"
import { Toaster } from "sonner"

function App() {
    return (
        <JWTProvider>
            <Toaster richColors></Toaster>
            <Main />
        </JWTProvider>
    )
}

export default App
