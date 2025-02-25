import '../styles/badge.css';

export default function Badge ({title, varient, size}) {

    const badgeClassName = `badge badge-${varient} badge-${size}`;
    return <div className={badgeClassName}>{title}</div>
}