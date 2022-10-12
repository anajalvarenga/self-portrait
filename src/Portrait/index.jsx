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
    const setFace = (face) => {
        switch (face) {
            case "circle":
                return <img src={faceCircle} className='face' alt="face circle" />;
            case "elipse":
                return <img src={faceElipse} className='face' alt="face elipse" />;
            case "pentagon":
                return <img src={facePentagon} className='face' alt="face pentagon" />;
            case "rectangle":
                return <img src={faceRectangle} className='face' alt="face rectangle" />;
            default:
                return;
        }
    };
    
    const setHair = (hair) => {
        switch (hair) {
            case "long":
                return <img src={hairLong} className='hair' alt="hair long" />;
            case "short":
                return <img src={hairShort} className='hair' alt="hair short" />;
            default:
                return;
        }
    };

    const setExpression = (expression) => {
        switch (expression) {
            case "happy":
                return <img src={expressionHappy} className="expression" alt="expression happy" />;
            case "ohh":
                return <img src={expressionOhh} className="expression" alt="expression ohh" />;
            case "ok":
                return <img src={expressionOk} className="expression" alt="expression ok" />;
            case "sad":
                return <img src={expressionSad} className="expression" alt="expression sad" />;
            default:
                return;
        }
    };

    const setEye = (eye) => {
        switch (eye) {
            case "small":
                return <img src={eyeCircleSmall} className='eye' alt="eye circle small" />;
            case "circle":
                return <img src={eyeCircle} className='eye' alt="eye circle" />;
            case "closed":
                return <img src={eyeClosed} className='eye' alt="eye closed" />;
            case "one":
                return <img src={eyeOneClosed} className='eye' alt="eye one closed" />;
            default:
                return;
        }
    };

    return (
        <section>
            {setFace(props.face)}
            {setHair(props.hair)}
            {setExpression(props.expression)}
            {setEye(props.eye)}
        </section>
    );
};

export default Portrait;
