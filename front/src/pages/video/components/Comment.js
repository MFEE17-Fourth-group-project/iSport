import Person2 from './../../../images/person-2.jpg';

const Comment = ({ comments }) => {
    // let time = new Date();
    // console.log(time);
    console.log(comments);

    return (
        <>
            { (comments !== null) && comments.map(comment => {

                return (<div className="flex mb-6">
                    <img
                        className="w-12 h-12 rounded-full mr-4"
                        src={Person2}
                    />
                    <div>
                        <div className="flex">
                            <h4 className="text-white font-bold text-sm mb-3 mr-2">{comment.username}</h4>
                            <span className="text-gray-400 text-sm">{comment.date}</span>
                        </div>
                        <p className="text-white text-sm">
                            {comment.content}
                        </p>
                    </div>
                </div>);
            })}
        </>
    );
};

export default Comment;
