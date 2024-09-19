import '../styles/style.css'; 

interface MobileIconComponent {
    filepath: string;
    text: string;
}

function MobileIconComponent({ filepath, text }: MobileIconComponent) {
    return (
        <div id='mobile-icon-component'>
            <img src={filepath} alt="Icon" className='icon'/><p className='icon-text'>{text}</p>
        </div>
    );
}

export default MobileIconComponent;