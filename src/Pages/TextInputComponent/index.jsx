import TextInput from './components/TextInput';
import { RiQuestionLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import './styles/index.css';

export default function TextInputComponent() {
    return <main className='text-input-component-main'>
        <section className='text-input-component-list'>
            <TextInput 
                label="Email" 
                type="email" 
                id='email'
                placeholder="name@email.com" 
                hintText="This is a hint text" 
                width={'100%'}
                renderIconAfter={() => <RiQuestionLine />}
            />
            <TextInput 
                label="Email" 
                type="email" 
                id='email-with-icon'
                placeholder="name@email.com" 
                hintText="This is a hint text" 
                width={'100%'}
                renderIconBefore={() => <RiMailLine />}
                renderIconAfter={() => <RiQuestionLine />}
            />
            <TextInput 
                label="Email" 
                type="email" 
                id='email-disabled'
                placeholder="name@email.com" 
                hintText="This is a hint text" 
                width={'100%'}
                disabled={true}
                renderIconAfter={() => <RiQuestionLine />}
            />
            <TextInput 
                label="Email" 
                type="email" 
                id='email-error'
                value="name@email.com" 
                errorText="This is an error text" 
                width={'100%'}
                renderIconAfter={() => <RiQuestionLine />}
            />
        </section>
    </main>
}