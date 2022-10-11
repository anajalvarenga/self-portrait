import './Menu.css';

import faceCircle from '../images/face-circle.svg';
import hairShort from '../images/hair-short.svg';
import expressionHappy from "../images/expression-happy.svg";
import eyeCircleSmall from "../images/eye-circle-small.svg";

const Menu = () => {
    return (
        <ul className='menu-list'>
            <li className='menu-item'>
                <img src={faceCircle} alt="face circle" />
            </li>
            <li className='menu-item'>
                <img src={hairShort} alt="hair short" />
            </li>
            <li className='menu-item'>
                <img src={expressionHappy} alt="expression happy" />
            </li>
            <li className='menu-item'>
                <img src={eyeCircleSmall} alt="eye circle small" />
            </li>
        </ul>
    );
}

export default Menu;