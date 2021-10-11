import React from 'react';
import { Link } from 'react-router-dom';
import UserAside from '../components/UserAside';
import SuggestArtCol from '../../video/components/SuggestArtCol';
import { useAuth } from '../../../context/auth';
import NotAuth from '../components/NotAuth';

function ArticleCollect() {
    const { member, setMember } = useAuth();
    return (
        <>
            {member ? (
                <main className="max-w-screen-xl mx-auto px-2.5 py-5 flex justify-start border-red-300">
                    <UserAside />
                    <artical className="flex-grow flex-col">
                        <div className="bg-gray-700 pl-5 py-5 text-white text-opacity-85 text-3xl rounded-t-xl font-bold">
                            收藏文章
                        </div>
                        <div className="text-white bg-gray-900 w-full min-h-screen object-cover object-center text-opacity-85 text-lg pl-12 py-5 pr-10 rounded-b-xl">
                            <div className="mt-6">
                                <Link to="">
                                    <SuggestArtCol />
                                </Link>
                            </div>
                        </div>
                    </artical>
                </main>
            ) : (
                <NotAuth />
            )}
        </>
    );
}

export default ArticleCollect;
