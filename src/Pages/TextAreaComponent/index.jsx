import './styles/index.css';
import TextArea from './components/TextArea';

export default function TextAreaCompont() {
    return <main className='text-area-component-main'>
        <section className='text-area-component-list'>
            <TextArea label='Description' placeholder='Write your message...' characterCountLimit={500} />
            <TextArea id='text-area-error' label='Description' placeholder='Enter a description...' errorText='This field is required' />
            <TextArea id='text-area-disabled' label='Description' placeholder='Write your message...' disabled={true} characterCountLimit={500} />
        </section>
    </main>
}