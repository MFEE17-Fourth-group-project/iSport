import useGet from '../../../utils/useGet';
const ArticleNav = ({ cat }) => {
    const { data: categories, error, isPending } = useGet(`/videos/category`);
    return (
        <nav className="bg-gray-900 flex justify-center">
            <div
                className="border-b-2 border-yellow-400 w-36 text-yellow-400 text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer"
                onClick={(e) => cat(e)}
                data-id="0"
            >
                所有文章
            </div>
            {categories &&
                categories.map((category) => (
                    <div
                        className="border-b-2 border-transparent w-36 text-white text-center
                        text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                        hover:border-yellow-400 hover:text-yellow-400"
                        key={category.id}
                        data-id={category.id}
                        onClick={(e) => cat(e)}
                    >
                        {category.name}
                    </div>
                ))}
        </nav>
    );
};

export default ArticleNav;
