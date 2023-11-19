import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../assets/slider/01.jpg'
import img2 from '../../../assets/slider/02.jpg'
import img3 from '../../../assets/slider/03.png'
import img4 from '../../../assets/slider/04.jpg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
      <div>
        
        <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
    <div data-src={img4} />
  </AutoplaySlider>
        
      </div>
    );
};

export default Slider;