import React from 'react';
import { Link } from 'react-router-dom';
import ArticleHeader from '../../images/tabata/1.jpeg';
import ArticleNav from './components/ArticleNav';
import ArticleCardRight from './components/ArticleCardRight';
import ArticleCardLeft from './components/ArticleCardLeft';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
class Article extends React.Component {
    // const { data, error, isPending } = useGet(`/videos`);
    // const [category, setCategory] = useState(0);

    // const changeCategory = (e) => {
    //     // console.log(e.target.getAttribute('data-id'));
    //     // let filteredVideo = data.filter(video => video.category === parseInt(e.target.getAttribute('data-id')));
    //     setCategory(e.target.getAttribute('data-id'));
    // };
    constructor() {
        super();
    }

    componentDidMount() {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            delay: 100,
        });
    }
    render() {
        return (
            <>
                <div className="">
                    <img
                        className="object-cover w-full h-44 xs:h-64 sm:h-72 md:h-96 lg:h-112"
                        src={ArticleHeader}
                        alt=""
                    />
                    <div className="sticky top-0 z-40">
                        <ArticleNav />
                    </div>

                    <main className="bg-gray-800" id="trigger-left">
                        <article className="w-full md:w-3/4 xs:m-auto">
                            {/* <div className="w-1/4 h-60"></div> */}
                            <Link
                                to="/ArticleAerobicExercise"
                                className="flex justify-center lg:justify-end mt-4"
                                data-aos="fade-left"
                                data-aos-anchor="#trigger-left"
                                data-aos-anchor-placement="top-center"
                            >
                                <ArticleCardRight />
                            </Link>
                        </article>

                        <article
                            className="w-full md:w-3/4 m-auto"
                            id="trigger-right"
                        >
                            <Link
                                to="/ArticleWeightTraining"
                                className="flex justify-center lg:justify-start mt-4"
                                data-aos="fade-right"
                                data-aos-anchor="#trigger-right"
                                data-aos-anchor-placement="top-center"
                            >
                                <ArticleCardLeft />
                            </Link>
                            {/* <div className="w-1/4 h-60"></div> */}
                        </article>

                        <article
                            className="w-full md:w-3/4 m-auto"
                            data-aos="fade-left"
                        >
                            {/* <div className="w-1/4 h-60"></div> */}
                            <Link
                                to="/ArticleCoreStrength"
                                className="flex justify-center lg:justify-end mt-4"
                            >
                                <ArticleCardRight />
                            </Link>
                        </article>

                        <article
                            className="w-full md:w-3/4 m-auto"
                            data-aos="fade-right"
                        >
                            <Link
                                to="/ArticleLeanBulking"
                                className="flex justify-center lg:justify-start mt-4"
                            >
                                <ArticleCardLeft />
                            </Link>
                            {/* <div className="w-1/4 h-60"></div> */}
                        </article>

                        <article
                            className="w-full md:w-3/4 m-auto"
                            data-aos="fade-left"
                        >
                            {/* <div className="w-1/4 h-60"></div> */}
                            <Link
                                to="/ArticleTABATATraining"
                                className="flex justify-center lg:justify-end mt-4  mb-4"
                            >
                                <ArticleCardRight />
                            </Link>
                        </article>
                    </main>
                </div>
            </>
        );
    }
}

export default Article;
