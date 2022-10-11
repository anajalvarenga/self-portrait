import './PortraitFeatures.css';

import faceCircle from '../images/face-circle.svg';
import faceElipse from '../images/face-elipse.svg';
import facePentagon from '../images/face-pentagon.svg';
import faceRectangle from '../images/face-rectangle.svg';

import hairLong from '../images/hair-long.svg';
import hairShort from '../images/hair-short.svg';

import expressionHappy from "../images/expression-happy.svg";
import expressionOhh from "../images/expression-ohh.svg";
import expressionOk from "../images/expression-ok.svg";
import expressionSad from "../images/expression-sad.svg";

import eyeCircleSmall from "../images/eye-circle-small.svg";
import eyeCircle from "../images/eye-circle.svg";
import eyeClosed from "../images/eye-closed.svg";
import eyeOneClosed from "../images/eye-one-closed.svg";

const PortraitFeatures = () => {
    const faces = [faceCircle, faceElipse, facePentagon, faceRectangle];
    const hairs = [hairLong, hairShort];
    const expressions = [expressionHappy, expressionOhh, expressionOk, expressionSad];
    const eyes = [eyeCircleSmall, eyeCircle, eyeClosed, eyeOneClosed];

    const features = faces.slice();

    return (
        <ul className='feature-list'>
            {features.map((feature, index) => {
                return (
                    <li key={index} className='feature'>
                        <img src={feature} alt="" />
                    </li>
                );
            })}
        </ul>
    );
};

export default PortraitFeatures;