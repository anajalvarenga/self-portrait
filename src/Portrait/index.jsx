import "./Portrait.css";

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

const Portrait = (props) => {
    const faces = {
        circle: <img src={faceCircle} className='face' alt="face circle" />,
        elipse: <img src={faceElipse} className='face' alt="face elipse" />,
        pentagon: <img src={facePentagon} className='face' alt="face pentagon" />,
        rectangle: <img src={faceRectangle} className='face' alt="face rectangle" />,
    };
    const hairs = {
        long: <img src={hairLong} className='hair' alt="hair long" />,
        short: <img src={hairShort} className='hair' alt="hair short" />,
    };
    const expressions = {
        happy: <img src={expressionHappy} className="expression" alt="expression happy" />,
        ohh: <img src={expressionOhh} className="expression" alt="expression ohh" />,
        ok: <img src={expressionOk} className="expression" alt="expression ok" />,
        sad: <img src={expressionSad} className="expression" alt="expression sad" />,
    };
    const eyes = {
        small: <img src={eyeCircleSmall} className='eye' alt="eye circle small" />,
        circle: <img src={eyeCircle} className='eye' alt="eye circle" />,
        closed: <img src={eyeClosed} className='eye' alt="eye closed" />,
        one: <img src={eyeOneClosed} className='eye' alt="eye one closed" />,
    };

    return (
        <section>
            {faces[props.face]}
            {hairs[props.hair]}
            {expressions[props.expression]}
            {eyes[props.eye]}
        </section>
    );
};

export default Portrait;
