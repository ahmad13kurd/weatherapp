import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props)=>{
        return (
            <form onSubmit={props.getWeather}>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    
                    <input type="text" className="form-control" name="city" placeholder="City"/>
                    </div>
                    <div className="form-group col-md-4">
                   
                    <input type="text" className="form-control" name="country" placeholder="Country"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark">GET WEATHER</button>
            </form>
        );
    }


export default Form;