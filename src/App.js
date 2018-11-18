import React, { PureComponent } from 'react';

import SearchWithPlacesList from './components/search-with-list';
import GoogleMaps from './components/google-maps';
import './App.scss';

export default class App extends PureComponent {

    state = {
        name: '',
        places: []
    };

    /**
     * This function adds the new place to the state
     */
    addNewPlace = place => {
        this.setState((prevState) => {
            return {
                places: [
                    ...prevState.places,
                    {
                        ...place,
                        id: this.state.places.length,
                        visited: false
                    }
                ]
            }
        })
    };

    /**
     * This function gets search value from child component and sets in state
     */
    setSearchValue = name => this.setState({ name });

    /**
     * This function finds checked place and marks as visited
     */
    setVisited = target => {
         const places = this.state.places.reduce((acc, item) => {
             if(Number(target.name) === item.id) {
                 item.visited = target.checked;
             }
             acc.push(item);
             return acc;
         }, []);
         this.setState({places});
    };

    render() {
        return (
            <div className="App">
                <SearchWithPlacesList
                    places={this.state.places}
                    name={this.state.name}
                    setSearchValue={this.setSearchValue}
                    setVisited={this.setVisited}
                />
                <GoogleMaps
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCdvrB_FvDc0vnJIMkingWz4Jtk5EwOFt8&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center={{lat: 40.16, lng: 44.44 }}
                    places={this.state.places}
                    addNewPlace={this.addNewPlace}
                    name={this.state.name}
                />
            </div>
        );
    }
}
