import React from 'react';
import  ReactDOM  from "react-dom/client";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    
        state = {lat: null, errormessage : ''};

        
        
    

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
             err => this.setState({errormessage : err.message})
             );
        }
    
    render() {
        if(this.state.errormessage && !this.state.lat){
            return <div>
                Error : {this.state.errormessage}
            </div>
        }
        if(this.state.lat && !this.state.errormessage){
            return <div>
                <SeasonDisplay lat = {this.state.lat}/>
            </div>
        }
        return <div>
            <Spinner message = 'Please accept location request'/>
        </div>
    
}

}
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <React.StrictMode>
    <App/>
   </React.StrictMode>
);