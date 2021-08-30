import Logo from '../images/biceps.svg';
import SignIn from '../pages/user/sign/SignIn'
import { Link } from 'react-router-dom';
import {useState} from 'react';

function Nav() {
    const [signInWindow, setSignInWindow] = useState(false);

    const handleSignIn = () => {
        setSignInWindow(true);
    }

    const handleCancel = () => {
        setSignInWindow(false);
    }

    return (
        <nav className="App sticky top-0 z-50">
            <div className="bg-gray-900 px-4 py-1.5 flex justify-between items-center">
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
                    <Link to="/user/cart/TradingRecord">
                        <p className="text-white text-opacity-85 mx-4 hover:text-yellow-400">
                            購買紀錄
                        </p>
                    </Link>
                    <Link to="/user/cart/favourite">
                        <p className="text-white text-opacity-85 mx-4 hover:text-yellow-400">
                            收藏商品
                        </p>
                    </Link>
                    <button className="btn-yellow mx-4" onClick={handleSignIn}>登入</button>
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
            {signInWindow && <SignIn onCancel={handleCancel} />}
        </nav>
    );
}

export default Nav;
