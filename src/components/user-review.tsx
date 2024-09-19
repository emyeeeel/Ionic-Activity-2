import '../styles/style.css'; 

interface UserReviewComponent {
    filepath: string;
}

function UserReviewComponent({ filepath}: UserReviewComponent) {
    return (
        <div className='user-image-container'>
            <img src={filepath} alt="User Profile Image" className='user-image'/>
            <div className='review-text'>
                <p><strong>"Unbelievable results! </strong>&#128525; My vision is now sharp, focused, and fatigue-free!"</p>
                <p><strong>- Susan E, 65</strong></p>
            </div>
        </div>
    );
}

export default UserReviewComponent;