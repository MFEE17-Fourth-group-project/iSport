import Logo from "../images/biceps.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Nav() {
  return (
    <nav className="App">
      <div className="bg-gray-900 px-4 py-1.5 flex justify-between items-center sticky">
        <div className="flex items-center">
          <img src={Logo} width="48" alt="Logo" className="mr-2" />
        </div>

        <div className="flex items-center ">
          <Link to="/user">
            <button className="btn-yellow mx-4">登入</button>
          </Link>
          <Link to="/video">
            <p className="text-white text-opacity-85 mx-4 hover:text-yellow-400">精選影片</p>
          </Link>
          <Link to="/products">
            <p className="text-white text-opacity-85 mx-4">多樣商品</p>
          </Link>
          <Link to="/articles">
            <p className="text-white text-opacity-85 mx-4">優質文章</p>
          </Link>
          <a href="#" className="text-white text-opacity-85 mx-4">
            健身房
          </a>
          <a href="#" className="text-white text-opacity-85 mx-4">
            購物車
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
