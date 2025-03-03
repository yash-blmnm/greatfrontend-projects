import { useState } from 'react';
import '../styles/textarea.css'

export default function TextArea ({
    id, 
    label, 
    placeholder, 
    rows = 5, 
    cols, 
    hintText, 
    errorText, 
    characterCountLimit,
    disabled, 
    style, 
    width, 
    height
}) {

    const textAreaId = id || label.toLowerCase().replace(' ', '-');
    const [ textAreaValue, setTextAreaValue ] = useState('');

    return <div className="text-area-wrapper">
        <label className="text-area-label" htmlFor={textAreaId}>{label}</label>
        <textarea 
            className={`text-area-input ${disabled ? 'disabled' : ''} ${errorText ? 'error' : ''}`} 
            id={textAreaId} 
            placeholder={placeholder} 
            rows={rows} cols={cols} 
            disabled={disabled} 
            style={style}
            onChange={(e) => setTextAreaValue(e.target.value)}
        >{textAreaValue}</textarea>
        <div className={`text-area-subtext ${errorText || characterCountLimit ? 'show' : ''}`}>
            {/* <span className={`hint-text ${hintText && !errorText ? 'show' : ''}`}>{hintText}</span> */}
            {errorText && <span className='text-area-error-text'>{errorText}</span>}
            {characterCountLimit && <span className='text-area-character-count'>{textAreaValue.length} / {characterCountLimit}</span>}
        </div>
    </div>
}