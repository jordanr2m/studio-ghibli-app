import { IoClose } from "react-icons/io5";

const WatchListMsg = ({ setShowWatchMsg, watchMsgText }) => {
    const removeMsg = () => {
        setShowWatchMsg(false)
    }

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
