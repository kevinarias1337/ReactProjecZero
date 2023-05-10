import React, {Component} from "react";
import ErrorPic from 'D:/ReactProject0/react-project-cero/src/assets/error-404.png'

class Error404 extends Component{
    render(){
        return(
            <div className="Error-Content">
                <h2>Error 404: Url no encontrada.</h2>
                <img className="Error-Icon" src={ErrorPic} alt="Error 404"></img>
            </div>         
        );
    }
}

export default Error404;