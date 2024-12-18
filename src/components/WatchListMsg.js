import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const WatchListMsg = ({ setShowWatchMsg, watchMsgText }) => {
    const removeMsg = () => {
        setShowWatchMsg(false);
    }

    // Remove msg after 2.5s
    useEffect(() => {
        const messageTimeout = window.setTimeout(() => {
            removeMsg();
        }, 2500);
        return () => window.clearTimeout(messageTimeout);
    });

    return (
        <div className="watch-message">
            <p>{watchMsgText}</p>
            <button
                className="close-message"
                aria-label="Close message"
                onClick={removeMsg}
            >
                <IoClose />
            </button>
        </div>
    )
}

export default WatchListMsg
