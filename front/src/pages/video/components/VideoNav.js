import useGet from '../../../utils/useGet';

const VideoNav = () => {
    const { data: categories, error, isPending } = useGet(`/videos/category`);

    return (
        <nav className="bg-gray-900 flex justify-center">
            <div className="border-b-2 border-yellow-400 w-36 text-yellow-400 text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer"
            >
                所有影片
            </div>
            {categories && (
                categories.map(category => (
                    <div
                        className="border-b-2 border-transparent w-36 text-white text-center
                        text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                        hover:border-yellow-400 hover:text-yellow-400"
                        key={category.id}
                    >
                        {category.name}
                    </div>
                ))
            )}
        </nav>
    );
};

export default VideoNav;
