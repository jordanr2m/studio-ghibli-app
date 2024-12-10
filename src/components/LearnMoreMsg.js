import { IoClose } from "react-icons/io5";
import sootSprite1 from "../imgs/ghibli-2.png"

const LearnMoreMsg = ({ removeMessage }) => {
    return (
        <>
            <div className="black-bg" onClick={removeMessage}></div>
            <div className="learn-more-message">
                <button
                    className="close-message"
                    aria-label="Close message"
                    onClick={removeMessage}
                >
                    <IoClose />
                </button>
                
                <p>Studio Ghibli, Inc. is a Japanese animation studio based in Koganei, Tokyo. It was founded on June 15, 1985, by directors, Hayao Miyazaki and Isao Takahata, and producer Toshio Suzuki. Studio Ghibli has a strong presence in the animation industry. Their work has been well received by audiences around the world and recognized with numerous awards. Studio Ghibli's mascot and most recognizable symbol, the character Totoro from the 1988 film, <i>My Neighbor Totoro</i>, is a giant spirit inspired by raccoon dogs (<i>tanuki</i>) and cats (<i>neko</i>). Among the studio's highest-grossing films are: <i>Princess Mononoke</i> (1997), <i>Spirited Away</i> (2001), <i>Howl's Moving Castle</i> (2004), and <i>Ponyo</i> (2008).</p>
                
                <div className="msg-img">
                    <img className="msg-img" src={sootSprite1} alt="Dancing soot sprites with stars"/>
                </div>

                <p className="source">Source: <a href="https://en.wikipedia.org/wiki/Studio_Ghibli" target="_blank" rel="noreferrer">Wikipedia</a></p>
            </div>
        </>

    )
}

export default LearnMoreMsg
