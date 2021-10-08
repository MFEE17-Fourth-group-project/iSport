import { useRef, useEffect } from 'react';

const Messages = ({ messages, nickname, typingUsers }) => {
    const currentSpeak = useRef('iSport!');
    const speakChange = useRef(true);

    useEffect(() => {
        document.querySelector('.end').scrollIntoView({ behavior: 'smooth' });

    }, [messages]);

    return (
        <div
            className="w-full h-80 flex flex-col pl-7 pr-4 pt-4 overflow-x-hidden overflow-y-scroll"
        >
            {messages && messages.map((message, idx) => {
                if (message.user !== currentSpeak.current) {
                    currentSpeak.current = message.user;
                    speakChange.current = true;
                } else {
                    speakChange.current = false;
                }

                return (
                    message.user === nickname ? (
                        <div
                            className="max-w-64 min-w-min py-2 px-4 bg-gray-500 rounded flex flex-shrink-0 mb-2 ml-auto break-all shadow-md chat"
                            key={idx}
                        >
                            <p>{message.text}</p>
                        </div>
                    ) : (
                        <>
                            { (speakChange.current || idx === 0) ? <h5 className="text-gray-300 text-sm">{message.user}</h5> : null}
                            <div
                                className="max-w-64 min-w-min py-2 px-4 text-white bg-gray-800 rounded flex flex-shrink-0 mb-2 mr-auto break-all shadow-md "
                                key={idx}
                            >
                                <p>{message.text}</p>
                            </div>
                        </>
                    )
                );
            })}
            <div className="end" />
            {typingUsers && <p className="flex mt-auto mb-1.5 text-white">{typingUsers}</p>}
        </div>
    );
};

export default Messages;
