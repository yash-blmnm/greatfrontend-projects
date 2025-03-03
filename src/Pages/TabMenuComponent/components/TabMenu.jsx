import { useState } from 'react';
import Button from '../../ButtonComponent/components/Button';
import '../styles/tabmenu.css';

export default function TabMenu ({ content, width, height }) {

    const [selectedTab, setSelectedTab] = useState(content[0].title);

    return <section className='tab-menu' style={{width: width, height: height}} >
        <div className='tab-menu__header'>
            {content.length ? content.map((value, index) =>
                <div key={index} className={`tab-menu__header-item ${selectedTab === value.title ? 'active' : ''}`} onClick={() => setSelectedTab(value.title)}>{value.title}</div>
            ) : ''}
        </div>
        <div className='tab-menu__content'>
            {content.filter(value => value.title === selectedTab).map((value, index) =>
                <div key={index} className={`tab-menu__content-item`}>{value.content}</div>
            )}
        </div>
    </section>
}