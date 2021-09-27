// import useGet from '../../../utils/useGet';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ArticleNav = () => {
    return (
        <nav className="bg-gray-900 flex justify-center">
            <NavLink
                to="/articles"
                activeClassName="selected"
                activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #FBBF24',
                    color: '#FBBF24',
                }}
            >
                <div
                    className="border-b-2 border-yellow-400 w-36 text-yellow-400 text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer"
                >
                    所有文章
                </div>
            </NavLink>
            <NavLink
                to="/ArticleAerobicExercise"
                activeClassName="selected"
                activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #FBBF24',
                    color: '#FBBF24',
                }}
            >
                <div
                    className=" w-36 text-white text-center text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                hover:border-yellow-400 hover:text-yellow-400"
                >
                    有氧運動
                </div>
            </NavLink>
            <NavLink
                to="/ArticleWeightTraining"
                activeClassName="selected"
                activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #FBBF24',
                }}
            >
                <div
                    className=" w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                hover:border-yellow-400 hover:text-yellow-400"
                >
                    重量訓練
                </div>
            </NavLink>
            <NavLink
                to="/ArticleTABATATraining"
                activeClassName="selected"
                activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #FBBF24',
                }}
            >
                <div
                    className=" w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                hover:border-yellow-400 hover:text-yellow-400"
                >
                    間歇訓練
                </div>
            </NavLink>
            <NavLink
                to="/ArticleCoreStrength"
                activeClassName="selected"
                activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #FBBF24',
                }}
            >
                <div
                    className=" w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                hover:border-yellow-400 hover:text-yellow-400"
                >
                    核心強化
                </div>
            </NavLink>
            <NavLink
                to="/ArticleLeanBulking"
                activeClassName="selected"
                activeStyle={{
                    fontWeight: 'bold',
                    borderBottom: '2px solid #FBBF24',
                }}
            >
                <div
                    className=" w-36 text-white text-center
                text-sm sm:text-base py-5 2xs:px-0 px-2.5 min-w-min cursor-pointer
                hover:border-yellow-400 hover:text-yellow-400"
                >
                    增肌飲食
                </div>
            </NavLink>
        </nav>
    );
};

export default ArticleNav;
