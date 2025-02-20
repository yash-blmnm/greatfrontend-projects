import './style/index.css';
import spacejoy from './assets/spacejoy.jpg';

export default function BlogCard() {
    return <main className="blog-card-main">
        <section className='blog-card'>
            <div className='blog-card__image' style={{ backgroundImage: `url(${spacejoy})` }}></div>
            <div className='blog-card__content'>
                <div className='blog-card__tag'>Interior</div>
                <h5 className='blog-card__title'>Top 5 Living Room Inspirations</h5>
                <p className='blog-card__summary'>Curated vibrants colors for your living, make it pop & calm in the same time.</p>
                <a className='blog-card__link'>Read more &rarr;	</a>
            </div>
        </section>

    </main>
}