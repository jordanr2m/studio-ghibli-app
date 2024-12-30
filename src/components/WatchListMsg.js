import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const WatchListMsg = ({ setShowWatchMsg, watchMsgText }) => {
    const removeMsg = () => {
        setShowWatchMsg(false);
    }

    console.log(watchMsgText.length);

    useEffect(() => {
        if (watchMsgText.length > 50) {
            // Remove msg after 3s
            const longMessageTimeout = window.setTimeout(() => {
                removeMsg();
            }, 3000);
            return () => window.clearTimeout(longMessageTimeout);
        } else {
            // Remove msg after 1.5s
            const shortMessageTimeout = window.setTimeout(() => {
                removeMsg();
            }, 1500);
            return () => window.clearTimeout(shortMessageTimeout);
        }
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
