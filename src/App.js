import Pages from "./pages/Pages";
import Categories from "./components/categories/Categories";
import { BrowserRouter } from "react-router-dom";
import "./common.css";
import Search from "./components/search/Search";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/" className="Logo"><GiKnifeFork/></Link>
        </nav>
        <Search/>
        <Categories/>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
