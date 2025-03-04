import { useState } from 'react';
import '../styles/tabs.css';

export default function Tabs ({ content, width, height }) {

    const [selectedTab, setSelectedTab] = useState(content[0].title);

    return <section className='tabs' style={{width: width, height: height}} >
        <div className='tabs__header'>
            {content.length ? content.map((value, index) =>
                <div key={index} className={`tabs__header-item ${selectedTab === value.title ? 'active' : ''}`} onClick={() => setSelectedTab(value.title)}>{value.title}</div>
            ) : ''}
        </div>
        <div className='tabs__content'>
            {content.filter(value => value.title === selectedTab).map((value, index) =>
                <div key={index} className={`tabs__content-item`}>{value.content}</div>
            )}
        </div>
    </section>
}