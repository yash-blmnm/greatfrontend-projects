import './styles/index.css';
import Logo from './assets/abstractly.svg';
import Button from '../ButtonComponent/components/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';

export default function NavbarComponent() {

    const [ isNavOpen, setIsNavOpen ] = useState(false);

    return <main className='navbar-component-main'>
        <header className='navbar-component-header'>
            <div className='navbar-component-subheader'>
                <div className='navbar-component-logo'>
                    <img src={Logo} alt="Abstractly Logo" />
                </div>
                {!isNavOpen && <RxHamburgerMenu className='navbar-component-subheader_icon' onClick={() => setIsNavOpen(true)} />}
            </div>
            <nav className='navbar-component-nav'>
                <ul className='navbar-component-nav__links'>
                    <li>
                        <Button variant='link-grey' size='large' label='Home' />
                    </li>
                    <li>
                        <Button variant='link-grey' size='large' label='Features' />
                    </li>
                    <li>
                        <Button variant='link-grey' size='large' label='Pricing' />
                    </li>
                    <li>
                        <Button variant='link-grey' size='large' label='About' />
                    </li>
                    <li>
                        <Button variant='link-grey' size='large' label='Contact' />
                    </li>
                </ul>
                <ul className='navbar-component-nav__actions'>
                    <li>
                        <Button variant='secondary' size='large' label='Learn more' />
                    </li>
                    <li>
                        <Button variant='primary' size='large' label='See Pricing' />
                    </li>
                </ul>
            </nav>
            <section className={`navbar-component-slideout-menu ${isNavOpen ? 'open' : ''}`}>
                <div className='navbar-component-subheader'>
                    <div className='navbar-component-logo'>
                        <img src={Logo} alt="Abstractly Logo" />
                    </div>
                    {isNavOpen && <RxCross2 className='navbar-component-subheader_icon' onClick={() => setIsNavOpen(false)} />}
                </div>
                <nav className='navbar-component-mobile-nav'>
                    <ul className='navbar-component-mobile-nav__links'>
                        <li>
                            <Button variant='link-grey' size='large' label='Home' />
                        </li>
                        <li>
                            <Button variant='link-grey' size='large' label='Features' />
                        </li>
                        <li>
                            <Button variant='link-grey' size='large' label='Pricing' />
                        </li>
                        <li>
                            <Button variant='link-grey' size='large' label='About' />
                        </li>
                        <li>
                            <Button variant='link-grey' size='large' label='Contact' />
                        </li>
                    </ul>
                    <ul className='navbar-component-nav__actions'>
                        <li>
                            <Button variant='secondary' size='large' label='Learn more' />
                        </li>
                        <li>
                            <Button variant='primary' size='large' label='See Pricing' />
                        </li>
                    </ul>
                </nav>
            </section>
        </header>
    </main>
}