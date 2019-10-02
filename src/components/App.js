import React from 'react';
import MapComponent from './MapComponent';
import StatusISS from './StatusISS'

class App extends React.Component {
    render(){
        return (
            <div className="ui container">
                <div className="ui segment">
                    <div className="ui two column very relaxed grid">
                        <div className="column">
                            <StatusISS />
                        </div>
                        <div className="column">
                            <MapComponent /> 
                        </div>
                    </div>
                    <div className="ui vertical divider"></div>
                </div>
            </div>
        )
    }
}

export default App;