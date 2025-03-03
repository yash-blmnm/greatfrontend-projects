import TabMenu from './components/TabMEnu';
import './styles/index.css';

const TabMenuContent = [
    {
        title: 'Account',
        content: 'The Account Management section provides a comprehensive view of your personal information and settings. Here, you can update your profile details, manage contact information, and customize your preferences to enhance your user experience.'
    },
    {
        title: 'Security',
        content: 'The Security Settings section is dedicated to protecting your account and personal data. Here, you can manage various security features to ensure your information remains safe and secure.'
    },
    {
        title: 'Plan',
        content: 'The Subscription Plan section provides details about your current plan and available upgrades. Here, you can review your plan’s benefits, manage billing information, and explore other subscription options to find the best fit for your needs.'
    }
]

export default function TabMenuComponent() {
    return <main className='tab-menu-component-main'>
        <TabMenu content={TabMenuContent} width={'300px'} />
    </main>
}
           
