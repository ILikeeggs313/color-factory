import React, {Component, useState, useEffect} from "react";
import {BrowserRouter, Redirect, Switch, Route} from "react-router-dom";
import ColorsList from "./ColorsList";
import AddColorForm from "./colorsForm";
import Color from "./Color";

const Routes =() =>{
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        green: "#00FF00",
        blue: "#0000FF",
        red: "#FF0000"
    };
    const [colors, updateColors] = useState(initialColors);
    useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [colors]
    );

    function handleAdd(newColorObj) {
        updateColors(addColors => ({...addColors, ...newColorObj}))
    }
    const renderCurrentColor = (props) => {
        const {color} = props.match.params;
        const hex = colors[color];
        return <Color hex={hex} color={color} {...props} />
    
    };

    
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorsList colors={colors} />
                </Route>
                <Route exact path="/colors/new">
                    <AddColorForm addColor={handleAdd} />
                </Route>
                <Route path="/colors/:color" render={renderCurrentColor} />
                <Redirect to="/colors" />
            </Switch>
    
            </BrowserRouter>
    
        );
    }
export default Routes;