import "./Menu.css";

import faceCircle from "../images/face-circle.svg";
import hairShort from "../images/hair-short.svg";
import expressionHappy from "../images/expression-happy.svg";
import eyeCircleSmall from "../images/eye-circle-small.svg";

const Menu = (props) => {
    return (
        <ul className="menu-list">
            <li
                className={
                    props.currentMenu === "face"
                        ? "menu-item active"
                        : "menu-item"
                }
                onClick={() => {
                    props.onClick("face");
                }}
            >
                <img src={faceCircle} alt="face circle" />
            </li>
            <li
                className={
                    props.currentMenu === "hair"
                        ? "menu-item active"
                        : "menu-item"
                }
                onClick={() => {
                    props.onClick("hair");
                }}
            >
                <img src={hairShort} alt="hair short" />
            </li>
            <li
                className={
                    props.currentMenu === "expression"
                        ? "menu-item active"
                        : "menu-item"
                }
                onClick={() => {
                    props.onClick("expression");
                }}
            >
                <img src={expressionHappy} alt="expression happy" />
            </li>
            <li
                className={
                    props.currentMenu === "eye"
                        ? "menu-item active"
                        : "menu-item"
                }
                onClick={() => {
                    props.onClick("eye");
                }}
            >
                <img src={eyeCircleSmall} alt="eye circle small" />
            </li>
        </ul>
    );
};

export default Menu;
