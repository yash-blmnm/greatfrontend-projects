import { useState } from 'react'
import { Link } from "react-router";
import './style/index.css'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <main className='main'>
            <section className="projects-section">
                <h3 className='projects-section__heading'>GreatFrontEnd Project Solutions</h3>
                <ul>
                    <li><Link to="/testimonial">Testimonial Card</Link></li>
                    <li><Link to="/blogcard">Blog Card</Link></li>
                </ul>
            </section>
        </main>
    )
}

export default Home
