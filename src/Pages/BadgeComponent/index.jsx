import './styles/index.css';
import Badge from './components/Badge';

export default function BadgeComponent() {
    return <main className='badge-component-main'>
        <div className="badges-section">
            <div className="badge-section__item">
                <Badge title="Label" varient="neutral" size="small" />
                <Badge title="Label" varient="neutral" size="medium" />
                <Badge title="Label" varient="neutral" size="large" />
            </div>
            <div className="badge-section__item">
                <Badge title="Label" varient="error" size="small" />
                <Badge title="Label" varient="error" size="medium" />
                <Badge title="Label" varient="error" size="large" />
            </div>
            <div className="badge-section__item">
                <Badge title="Label" varient="warning" size="small" />
                <Badge title="Label" varient="warning" size="medium" />
                <Badge title="Label" varient="warning" size="large" />
            </div>
            <div className="badge-section__item">
                <Badge title="Label" varient="success" size="small" />
                <Badge title="Label" varient="success" size="medium" />
                <Badge title="Label" varient="success" size="large" />
            </div>
            <div className="badge-section__item">
                <Badge title="Label" varient="brand" size="small" />
                <Badge title="Label" varient="brand" size="medium" />
                <Badge title="Label" varient="brand" size="large" />
            </div>
        </div>
    </main>;
}