import "./App.css";
import { Outlet } from 'react-router-dom'
import { Header } from "./pages";

function App() {

  return (
    <div className="App">
      <main>
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App