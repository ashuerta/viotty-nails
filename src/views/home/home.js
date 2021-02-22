import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Search from "@material-ui/icons/Search";
import Header from "components/Header/header.js";
import CustomInput from "components/CustomInput/customInput.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import Button from "components/CustomButton/customButton.js";
import Start from "./sections/start";


const useStyles = makeStyles(styles);

export default function Home(props) {
    const classes = useStyles();
    const {...prop} = props;

    return(
        <>
            <Header brand="Viotty Nails" color="viotty"
                rightLinks={
                    <div>
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <CustomInput
                                    white
                                    inputRootCustomClasses={classes.inputRootCustomClasses}
                                    formControlProps={{
                                        className: classes.formControl
                                    }}
                                    inputProps={{
                                        placeholder: "Search",
                                        inputProps: {
                                        "aria-label": "Search",
                                        className: classes.searchInput
                                        }
                                    }}
                                />
                                <Button justIcon round color="white">
                                    <Search className={classes.searchIcon} />
                                </Button>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Button
                                    href="#pablo"
                                    className={classes.navLink}
                                    onClick={e => e.preventDefault()}
                                    color="transparent">
                                    Login
                                </Button>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <Button
                                    href="#pablo"
                                    className={classes.registerNavLink}
                                    onClick={e => e.preventDefault()}
                                    color="pink"
                                    round>
                                    Register
                                </Button>
                            </ListItem>
                        </List>
                    </div>
                }
            />
            <Start />
        </>
    )
}
