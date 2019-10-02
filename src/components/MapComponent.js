import React from 'react';
import { connect } from 'react-redux';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
// import {easeIn, easeOut} from 'ol/easing.js';
import TileLayer from 'ol/layer/Tile.js';
import {fromLonLat} from 'ol/proj.js';
import OSM from 'ol/source/OSM.js';


class MapComponent extends React.Component {


    createMap(){
        this.view = new View({
            center: [0,0],
            zoom: 0
          });
        
        this.map = new Map({
            target: 'map',
            controls: [],
            layers: [
              new TileLayer({
                preload: 4,
                source: new OSM()
              })
            ],
            // Improve user experience by loading tiles while animating. Will make
            // animations stutter on mobile or slow devices.
            loadTilesWhileAnimating: true,
            view: this.view
          });
    }

    updateMap(data){
        let positionForMap =fromLonLat(data.iss_position)
        this.view.animate({center: positionForMap}, {zoom: 5},);
    }

    componentDidMount(){
        this.createMap();
    }

    render (){
        if (this.props.data.iss_position){
            this.updateMap(this.props.data)
        }
        
        return (
            <div>
                <h1>Map</h1>
                <div id="map"></div>
            </div>
        )
    }

}


const mapStateToProps = state => {
    return { 
        data: state.data,
    };
  };
  
export default connect(
  mapStateToProps,
  {  }
)(MapComponent);
