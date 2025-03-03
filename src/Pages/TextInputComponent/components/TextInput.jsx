import { useState } from 'react';
import '../styles/textinput.css'

export default function TextInput ({
    label, 
    type = 'text', 
    id,
    placeholder, value, 
    hintText, 
    errorText, 
    renderIconBefore, 
    renderIconAfter, 
    width, 
    height, 
    style,
    disabled = false
}) {

    const idText = id ? id :label.toLowerCase().replace(' ', '-');
    const [focussed, setFocussed] = useState(false);

    return <div className="text-input-wrapper">
        <label className="input-label" htmlFor={idText}>{label}</label>
        <div className={`input-icon-wrapper ${focussed ? 'focus' : ''} ${errorText ? 'error' : ''} ${disabled ? 'disabled' : ''}`} width={width} height={height} style={style}>
            {renderIconBefore && <span className='input-icon'>{renderIconBefore()}</span>}
            <input type={type} id={idText} placeholder={placeholder} value={value} onFocus={() => setFocussed(true)}  onBlur={() => setFocussed(false)} disabled={`${disabled ? 'disabled' : ''}`}/>
            {renderIconAfter && <span className='input-icon'>{renderIconAfter()}</span>}
        </div>
        <span className={`hint-text ${hintText && !errorText ? 'show' : ''}`}>{hintText}</span>
        {errorText && <span className={`error-text ${errorText ? 'show' : ''}`}>{errorText}</span>}
    </div>
}