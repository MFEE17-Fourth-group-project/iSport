import Logo from '../images/biceps.svg';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="App">
            <div className="bg-gray-900 px-4 py-1.5 flex justify-between items-center sticky">
                <div className="flex items-center">
                    <img src={Logo} width="40" alt="Logo" className="my-1 " />
                    <Link
                        to="/"
                        className="text-3xl text-white text-opacity-70 mx-4"
                    >
                        iSport!
                    </Link>
                </div>

                <div className="flex items-center ">
                    <Link to="/user">
                        <button className="btn-yellow mx-4">登入</button>
                    </Link>
                    <Link to="/video">
                        <p className="text-white text-opacity-85 mx-4 hover:text-yellow-400">
                            精選影片
                        </p>
                    </Link>
                    <Link to="/products">
                        <p className="text-white text-opacity-85 mx-4 hover:text-yellow-400">
                            多樣商品
                        </p>
                    </Link>
                    <Link to="/articles">
                        <p className="text-white text-opacity-85 mx-4 hover:text-yellow-400">
                            優質文章
                        </p>
                    </Link>
                    <Link
                        href="/#"
                        className="text-white text-opacity-85 mx-4 hover:text-yellow-400"
                    >
                        健身房
                    </Link>
                    <Link
                        to="/cart"
                        className="text-white text-opacity-85 mx-4 hover:text-yellow-400"
                    >
                        購物車
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
