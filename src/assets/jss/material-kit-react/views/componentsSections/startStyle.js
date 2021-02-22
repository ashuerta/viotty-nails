import {
    primaryColor,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor
  } from "assets/jss/material-kit-react.js";
import overlyMaskBkg from 'assets/img/patterns/overly-mask.png';

  const startStyle = {
    presenation: {
        height: "100%",
        width: "100%",
        top: "0",
        position: "relative",
        zIndex: "1",
        overflow: "hidden",
        margin: "0 auto -5px",
    },
    video: {

    },
    overlyMask: {
        background: `url(${overlyMaskBkg}) center center repeat`,
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "3",
        width: "100%",
        height: "100%",
    }
  }

  export default startStyle;