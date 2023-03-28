import React, {Component} from "react";

export default class ColorFinder extends Component{
    static defaultProps = {
        backgroundColor: "red",
        width: "150px",
        height: "100px",
    };
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    };
    handleClick() {
        this.props.removeColor(this.props.colorId);
    }
    render() {
        const { backgroundColor, width, height } = this.props;
    
        return (
            <div className="ColorFinder">
            <div
              style={{
                backgroundColor: backgroundColor,
                width: `${width}px`,
                height: `${height}px`,
              }}
            ></div>
            <button onClick={this.handleClick}>Remove Color</button>
          </div>
    
        );
      }
    
}