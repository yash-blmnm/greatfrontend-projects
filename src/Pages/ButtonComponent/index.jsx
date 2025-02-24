import Button from './components/Button';
import './styles/index.css';
import { RiStarLine } from "react-icons/ri";


export default function ButtonComponent() {
    return <main className="button-component-main">
        <section className='buuton-section'>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} varient='primary' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' varient='primary' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' varient='primary' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} varient='primary' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' varient='primary' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} varient='secondary' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' varient='secondary' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' varient='secondary' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} varient='secondary' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' varient='secondary' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} varient='tertiary' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' varient='tertiary' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' varient='tertiary' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} varient='tertiary' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' varient='tertiary' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} varient='link-color' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' varient='link-color' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' varient='link-color' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} varient='link-color' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' varient='link-color' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} varient='link-grey' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' varient='link-grey' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' varient='link-grey' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} varient='link-grey' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' varient='link-grey' size='doublextralarge' />
            </section>
            <section className='button-section__item'>
                <Button label='Button CTA' renderIcon={null} varient='destructive' size='medium' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='left' varient='destructive' size='large' />
                <Button label='Button CTA' renderIcon={() => <RiStarLine />} iconPosition='right' varient='destructive' size='xtralarge' />
                <Button label='Button CTA' renderIcon={null} varient='destructive' size='doublextralarge' />
                <Button renderIcon={() => <RiStarLine />} iconPosition='right' varient='destructive' size='doublextralarge' />
            </section>
        </section>
    </main>
}