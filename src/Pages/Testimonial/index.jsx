import './style/index.css';
import profileImg from "./assets/profileImg.png"
import { useState } from 'react';

const TESTIMONIAL_CARD_OBJECT = {
    author: {
        name: 'Sarah Dole',
        username: '@sarahdole',
        profileImg: profileImg
    },
    quote: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
}

const MINIMAL_QUOTE_LENGTH = 180

export default function Testimonial() {

    const [quoteExpanded, setQuoteExpanded] = useState(false)

    return <main className="testimonials-section">
        <div className="testimonial-card">
            <div className="testimonial-card__profile">
                <img src={TESTIMONIAL_CARD_OBJECT.author.profileImg} alt="Sarah Dole" />
                <div>
                    <h6 className="testimonial-card__name">{TESTIMONIAL_CARD_OBJECT.author.name}</h6>
                    <span className="testimonial-card__username">{TESTIMONIAL_CARD_OBJECT.author.username}</span>
                </div>
            </div>
            <div className="testimonial-card__quote">
                {/* <p className="">{TESTIMONIAL_CARD_OBJECT.quote}</p> */}
                {TESTIMONIAL_CARD_OBJECT.quote.length > MINIMAL_QUOTE_LENGTH ?
                    <>
                        <p className="testimonial-card__quote-content">{TESTIMONIAL_CARD_OBJECT.quote.slice(0, MINIMAL_QUOTE_LENGTH)}</p>
                        {!quoteExpanded ? <label className="testimonial-card__quote-button" for="expanded" role="button" onClick={() => setQuoteExpanded(true)}>read more...</label> : ''}
                        {quoteExpanded ?
                            <>
                                <p className="testimonial-card__quote-content">{TESTIMONIAL_CARD_OBJECT.quote.slice(MINIMAL_QUOTE_LENGTH)}</p>
                                <label className="testimonial-card__quote-button" for="contracted" role="button" onClick={() => setQuoteExpanded(false)}>read less...</label>
                            </>
                            : ''}
                    </>

                    : <p className="">{TESTIMONIAL_CARD_OBJECT.quote}</p>}
            </div>
            {/* <p className="testimonial-card__quote">I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding! I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding! </p> */}
        </div>
    </main>
}