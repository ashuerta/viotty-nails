import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components

import styles from "assets/jss/material-kit-react/views/componentsSections/startStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "hooks/useWindowDimesions";

const useStyles = makeStyles(styles);

export default function Start(props) {
    const classes = useStyles();
    const {...prop} = props;
    const { height, width } = useWindowDimensions();

    const videoClasses = classNames({
        [classes.video]: true,
        [classes.presenation]: true
      });
    return (
        <>
            <section id="home" className={videoClasses} style={{height: `${height}px`}}>      
                <div className={classes.overlyMask}></div>        
                <div id="bg-video" className="home-background"></div>     
                <div className="scroll">
                    <span className="scroll-down"></span>
                    <span className="scroll-text">Scroll</span>
                </div>    

                {/*
                <div class="home-text container">
                    <h3>We are</h3>
                    <div id="home-text-slider" class="home-carousel home-theme">
                        <div class="item">
                            <div class="home-carousel-caption">         
                                <h2>Ashoka</h2>
                                <hr>
                                <p>An Award Winning Agency</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="home-carousel-caption">
                                <h2>Thinkers</h2>
                                <hr>
                                <p>A Digital Creative Agency</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="home-carousel-caption">
                                <h2>Dreamers</h2>
                                <hr>
                                <p>An Innovative Digital Agency</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="home-carousel-caption">
                                <h2>Artists</h2>
                                <hr>
                                <p>We Are Creative Artist</p>
                            </div>
                        </div>
                    </div>
                </div>         
                */}
            </section>
        </>
    )
}
