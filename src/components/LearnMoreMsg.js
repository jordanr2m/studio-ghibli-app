

const LearnMoreMsg = ({ removeMessage }) => {
    return (
        <div className="learn-more-message">
            <p>Studio Ghibli, Inc. is a Japanese animation studio based in Koganei, Tokyo. It was founded on June 15, 1985, by the directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki. Studio Ghibli has a strong presence in the animation industry. Their work has been well received by audiences around the world and recognized with numerous awards. Studio Ghibli's mascot and most recognizable symbol, the character Totoro from the 1988 film My Neighbor Totoro, is a giant spirit inspired by raccoon dogs (tanuki) and cats (neko). Among the studio's highest-grossing films are Princess Mononoke (1997), Spirited Away (2001), Howl's Moving Castle (2004), and Ponyo (2008).</p>
            <p className="source">Source: <a href="https://en.wikipedia.org/wiki/Studio_Ghibli" target="_blank" rel="noreferrer">Wikipedia</a></p>

            <button
                className="close-message"
                aria-label="Close message"
                onClick={removeMessage}
            >
                x
            </button>
        </div>
    )
}

export default LearnMoreMsg
