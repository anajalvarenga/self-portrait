import faceCircle from "../images/face-circle.svg";
import faceElipse from "../images/face-elipse.svg";
import facePentagon from "../images/face-pentagon.svg";
import faceRectangle from "../images/face-rectangle.svg";

import hairLong from "../images/hair-long.svg";
import hairShort from "../images/hair-short.svg";

import expressionHappy from "../images/expression-happy.svg";
import expressionOhh from "../images/expression-ohh.svg";
import expressionOk from "../images/expression-ok.svg";
import expressionSad from "../images/expression-sad.svg";

import eyeCircleSmall from "../images/eye-circle-small.svg";
import eyeCircle from "../images/eye-circle.svg";
import eyeClosed from "../images/eye-closed.svg";
import eyeOneClosed from "../images/eye-one-closed.svg";

const faces = [
    {
        path: faceCircle,
        type: "circle",
    },
    {
        path: faceElipse,
        type: "elipse",
    },
    {
        path: facePentagon,
        type: "pentagon",
    },
    {
        path: faceRectangle,
        type: "rectangle",
    },
];
const hairs = [
    {
        path: hairLong,
        type: "long",
    },
    {
        path: hairShort,
        type: "short",
    },
];
const expressions = [
    {
        path: expressionHappy,
        type: "happy",
    },
    {
        path: expressionOhh,
        type: "ohh",
    },
    {
        path: expressionOk,
        type: "ok",
    },
    {
        path: expressionSad,
        type: "sad",
    },
];
const eyes = [
    {
        path: eyeCircleSmall,
        type: "small",
    },
    {
        path: eyeCircle,
        type: "circle",
    },
    {
        path: eyeClosed,
        type: "closed",
    },
    {
        path: eyeOneClosed,
        type: "one",
    },
];

export {faces, hairs, expressions, eyes};