import "./PortraitFeatures.css";

import { faces, hairs, expressions, eyes } from "./portrait-features.data";

const PortraitFeatures = (props) => {
    let features = [];
    let currentFeature;
    let handleClick;

    switch (props.type) {
        case "face":
            features = faces.slice();
            currentFeature = props.face;
            handleClick = props.setFace;
            break;
        case "hair":
            features = hairs.slice();
            currentFeature = props.hair;
            handleClick = props.setHair;
            break;
        case "expression":
            features = expressions.slice();
            currentFeature = props.expression;
            handleClick = props.setExpression;
            break;
        case "eye":
            features = eyes.slice();
            currentFeature = props.eye;
            handleClick = props.setEye;
            break;
        default:
            features = faces.slice();
            currentFeature = props.face;
            handleClick = props.setFace;
            break;
    }

    return (
        <ul className="feature-list">
            {features.map((feature, index) => {
                return (
                    <li
                        key={index}
                        className={
                            currentFeature === feature.type
                                ? "feature active"
                                : "feature"
                        }
                        onClick={() => handleClick(feature.type)}
                    >
                        <img src={feature.path} alt="" />
                    </li>
                );
            })}
        </ul>
    );
};

export default PortraitFeatures;
