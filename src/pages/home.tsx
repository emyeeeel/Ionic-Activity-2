import React from 'react';
import { IonContent, IonPage} from '@ionic/react';
import '../styles/style.css'; 

import ProductImage from '../assets/images/bnr-slid-img3.png';
import YellowCheck from '../assets/images/ylw-ck.png';
import Icon1 from '../assets/images/bnr-icon1.png';
import Icon2 from '../assets/images/bnr-icon2.png';
import Icon3 from '../assets/images/bnr-icon3.png';
import Icon4 from '../assets/images/bnr-icon4.png';
import PlusIcon from '../assets/images/doc-sign.png';
import UserProfile from '../assets/images/rewv-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


import MobileIconComponent from '../components/mobile-icon';
import CheckBoxComponent from '../components/checkbox';
import ButtonComponent from '../components/button';
import PageIndicatorComponent from '../components/page-indicator';
import UserReviewComponent from '../components/user-review';
import HorizontalLineComponent from '../components/horizontal-line';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='background-container'>
            <div id='mobile-components'>
                <div className='row-1'>
                    <div className="star-rating"> {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                ))}</div>
                    <div className='star-review-text'>671 Verified Customer Reviews</div>
                </div>
                <div className='row-2'>
                    <img src= {PlusIcon} alt="Plus Icon" className='plus-icon'/>
                    <p className='mobile'>An Easy And Safe Way To Achieve</p>
                </div>
                <div className='row-3'>
                    <p className='mobile'>Experience Crystal-Clear Vision: Unleash the Power of Our 20/20 Vision Supplement!</p>
                </div>
                <div className='row-4'>
                    <img src= {ProductImage} alt="Product Image" className='product-image'/>
                </div>
                <PageIndicatorComponent/>
                <ButtonComponent/>
                <CheckBoxComponent filepath={YellowCheck} text1={'100% Satisfaction'} text2={'180 Days Guarantee'}/>
                <div className='row-8'>
                      <hr />
                      <span>Ingredients Known For:</span>
                      <hr />
                  </div>
                <div className='row-9'>
                    <MobileIconComponent filepath={Icon1} text={'Rediscover Clear Vision'}/>
                    <MobileIconComponent filepath={Icon2} text={'Naturally Sharpened Focus'}/>
                    <MobileIconComponent filepath={Icon3} text={'Banish the blur'}/>
                    <MobileIconComponent filepath={Icon4} text={'ReEnergize Your Eyes'}/>
                </div>
                <HorizontalLineComponent/>
                <div className='row-10'>
                  <UserReviewComponent filepath={UserProfile}/>
                </div>
            </div>
            <div id='web-components'>
                <div className='web-side'>
                  <div className='row-4'>
                      <img src= {ProductImage} alt="Product Image" className='product-image'/>
                  </div>
                  <PageIndicatorComponent/>
                  <div className='swipe-text'><p>Swipe for more!</p></div>
                </div>
                <div className='web-main'>
                  <div className='row-1'>
                      <div className="star-rating"> {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
                  ))}</div>
                      <div className='star-review-text'>671 Verified Customer Reviews</div>
                  </div>
                  <div className='row-2'>
                    <img src= {PlusIcon} alt="Plus Icon" className='plus-icon'/>
                    <p className='web'>Experience Crystal-Clear Vision</p>
                  </div>
                  <div className='row-3'>
                    <p className='web'>Unleash the Power of Our 20/20 Vision Supplement!</p>
                  </div>
                  <div className='row-8'>
                      <span>Ingredients Known For: </span>
                      <hr />
                  </div>
                  <div className='row-9'>
                      <MobileIconComponent filepath={Icon1} text={'Rediscover Clear Vision'}/>
                      <MobileIconComponent filepath={Icon2} text={'Naturally Sharpened Focus'}/>
                      <MobileIconComponent filepath={Icon3} text={'Banish the blur'}/>
                      <MobileIconComponent filepath={Icon4} text={'ReEnergize Your Eyes'}/>
                  </div>
                  <ButtonComponent/>
                  <CheckBoxComponent filepath={YellowCheck} text1={'100% Satisfaction'} text2={'180 Days Guarantee'}/>
                  <HorizontalLineComponent/>
                  <div className='row-10'>
                    <UserReviewComponent filepath={UserProfile}/>
                  </div>
                </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
