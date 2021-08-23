import Logo from '../images/biceps.svg';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 px-5 py-1.5 flex justify-between items-center sticky">

            <div className="flex items-center">
                <img src={Logo} width="40" alt="Logo" className="my-1 " />
                <a href="#" className="text-3xl text-white text-opacity-70 mx-4">iSport!</a>
            </div>

            <div className="flex items-center ">
                <button className="btn-yellow mx-4">登入</button>
                <a href="#" className="text-white text-opacity-70 mx-4 hover:text-opacity-80">精選影片</a>
                <a href="#" className="text-white text-opacity-70 mx-4 hover:text-opacity-80">多樣商品</a>
                <a href="#" className="text-white text-opacity-70 mx-4 hover:text-opacity-80">優質文章</a>
                <a href="#" className="text-white text-opacity-70 mx-4 hover:text-opacity-80">健身房</a>
                <a href="#" className="text-white text-opacity-70 ml-4 hover:text-opacity-80">購物車</a>
            </div>

        </nav>
    );
};

export default Navbar;
