import './style/index.css';
import profileImg from './assets/profile.png';
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";


export default function ProfileCard() {
    return <main className='profile-card-main'>
        <section className='profile-card'>
            <div className='profile-card__content'>
                <img src={profileImg} className='profile-card__image' alt='Sarah Dole' />
                <div className='profile-card__name-container'>
                    <div className='profile-card__name'>Sarah Dole</div>
                    <div className='profile-card__designation'>Front End Engineer @ Microsoft</div>
                </div>
                <p className='profile-card__summary'>I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.</p>
                <button className='profile-card__contact'>Contact me</button>
                <nav className='profile-card__socials'>
                    <RiGithubFill className='profile-card__socials-icon' />
                    <RiLinkedinBoxFill className='profile-card__socials-icon' />
                    <RiInstagramFill className='profile-card__socials-icon' />
                    <RiTwitterXFill className='profile-card__socials-icon' />
                </nav>
            </div>
        </section>
    </main>
}