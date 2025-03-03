import '../styles/button.css'

export default function Button({
    label = '',
    variant = 'primary',
    size = 'medium',
    iconPosition = null,
    renderIcon = null
}) {

    let btnClassNames = `${['primary', 'secondary', 'tertiary', 'destructive'].includes(variant) ? 'button' : 'button-link'} button-${variant} button-${size} button-icon-${iconPosition}`

    return <div className="button-wrapper">
        <button className={btnClassNames}>
            {renderIcon && iconPosition && ['left', 'both'].includes(iconPosition) ? <div className='button-icon'>{renderIcon()}</div> : ''}
            {label.length ? <span className='button-label'>{label}</span> : ''}
            {renderIcon && iconPosition && ['right', 'both'].includes(iconPosition) ? <div className='button-icon'>{renderIcon()}</div> : ''}
        </button>
    </div>
}

