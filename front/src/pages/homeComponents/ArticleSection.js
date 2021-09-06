import React, { useState } from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import Article from '../article/components/Article';
import { Link } from 'react-router-dom';

const ArticleSection = () => {
    const [step, setStep] = useState(1);

    const AerobicExercise = (
        <>
            <Link className="flex-1" to="/articles">
                <Article />
            </Link>
        </>
    );

    const WeightTraining = (
        <>
            <Link className="flex-1" to="/articles">
                <Article />
            </Link>
        </>
    );

    const CoreStrength = (
        <>
            <Link className="flex-1" to="/articles">
                <Article />
            </Link>
        </>
    );

    const LeanBulking = (
        <>
            <Link className="flex-1" to="/articles">
                <Article />
            </Link>
        </>
    );
    const TABATATraining = (
        <>
            <Link className="flex-1" to="/articles">
                <Article />
            </Link>
        </>
    );

    const switchStep = (step) => {
        switch (step) {
            case 1:
                return AerobicExercise;
            case 2:
                return WeightTraining;
            case 3:
                return CoreStrength;
            case 4:
                return LeanBulking;
            case 5:
                return TABATATraining;
            default:
                return AerobicExercise;
        }
    };

    const changeStep = (isAdded = true) => {
        if (isAdded && step < 5) setStep(step + 1);
        if (!isAdded && step > 1) setStep(step - 1);
    };
    return (
        <div className="relative w-full mb-16 sm:mb-24 sm:mt-2 lg:mt-2.5 xl:mt-4">
            <div className="text-center sm:py-6 mt-7 mb-4">
                <span className="text-white text-2xl lg:text-3xl xl:text-4xl border-b-2 sm:border-b-4 border-yellow-400 pb-2.5 sm:pb-3.5">
                    精選文章
                </span>
            </div>
            <p className="text-white text-xl md:text-2xl text-center w-full px-4 hidden sm:block">
                這裡有豐富強大的健身資料庫，提供您健身資訊、營養菜單...
            </p>
            <div className="object-cover filter brightness-100 h-112">
                <div className="mx-auto my-8 sm:my-12 md:my-14 h-full overflow-y-auto w-3/4">
                    <div>{switchStep(step)}</div>
                </div>
            </div>
            {step !== 1 && (
                <button>
                    <BsFillCaretLeftFill
                        className="text-yellow-400 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 absolute
                inset-y-1/2 transform -translate-y-1/2 cursor-pointer hidden 2xs:block"
                        onClick={() => {
                            changeStep(false);
                        }}
                    />
                </button>
            )}
            {step !== 5 && (
                <button>
                    <BsFillCaretRightFill
                        className="text-yellow-400 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 absolute
                inset-y-1/2 right-0 transform -translate-y-1/2 cursor-pointer hidden 2xs:block"
                        onClick={() => {
                            changeStep(true);
                        }}
                    />
                </button>
            )}
        </div>
    );
};

export default ArticleSection;
