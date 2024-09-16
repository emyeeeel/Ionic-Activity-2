import React from 'react';
import { IonContent, IonPage, IonGrid, IonRow, IonCol} from '@ionic/react';
import '../styles/style.css'; 
import ProductImage from '../assets/images/bnr-slid-img3.png';
import PlusIcon from '../assets/images/doc-sign.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='background-container'>
            <div className='right-container'>
                <div className='row-1 right-container'>
                    <div className="star-rating"> {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                ))}</div>
                    <div className='review-text'>671 Verified Customer Reviews</div>
                </div>
                <div className='row-2 right-container'>
                    <img src= {PlusIcon} alt="Plus Icon" className='plus-icon'/>
                    <p className='web'>Experience Crystal-Clear Vision</p>
                    <p className='mobile'>An Easy And Safe Way To Achieve</p>
                </div>
                <div className='row-3 right-container'>
                    <p className='web'>Unleash the Power of Our 20/20 Vision Supplement!</p>
                    <p className='mobile'>Experience Crystal-Clear Vision: Unleash the Power of Our 20/20 Vision Supplement!</p>
                </div>
            </div>
            <div className='left-container'>
                <div className='row-4'>
                    <img src= {ProductImage} alt="Product Image" className='product-image'/>
                </div>
                <div className='row-5'>

                </div>
            </div>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
