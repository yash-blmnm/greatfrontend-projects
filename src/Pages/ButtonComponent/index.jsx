import Button from './components/Button';
import './styles/index.css';
import { RiStarLine } from "react-icons/ri";


export default function ButtonComponent() {
    return <main className="button-component-main">
        <section className='buuton-section'>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} variant='primary' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' variant='primary' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' variant='primary' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} variant='primary' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' variant='primary' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} variant='secondary' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' variant='secondary' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' variant='secondary' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} variant='secondary' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' variant='secondary' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} variant='tertiary' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' variant='tertiary' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' variant='tertiary' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} variant='tertiary' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' variant='tertiary' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} variant='link-color' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' variant='link-color' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' variant='link-color' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} variant='link-color' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' variant='link-color' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} variant='link-grey' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' variant='link-grey' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' variant='link-grey' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} variant='link-grey' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' variant='link-grey' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} variant='destructive' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' variant='destructive' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' variant='destructive' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} variant='destructive' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' variant='destructive' size='doublextralarge' />
            </section>
        </section>
    </main>
}