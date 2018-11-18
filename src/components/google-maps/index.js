import React, { PureComponent } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

import PopupContent from './popup-content';
import MarkersWithLabel from './markers';

class GoogleMaps extends PureComponent {

    state = {
        lat: 0,
        lng: 0,
        modalIsOpen: false,
        modalPosition: null,
    };

    /**
     * Here we get coordinates of the map when user clicks on mp, also set modal open state as Infobox is conditionally mounted/unmounted
     */
    mapClickHandler = props => {
        this.setState({
            lat: props.latLng.lat(),
            lng: props.latLng.lng(),
            modalIsOpen: true,
        });
    };

    /**
     * Here we set modal open's state to false, as Infobox is conditionally mounted/unmounted
     */
    infoBoxClickHandler = () => this.setState({ modalIsOpen: false });


    /**
     * This function gets place name from child PopupContent component when user saves a place and adds new place from parent component
     **/
    getSelectedPlace = name => {
        this.setState({
            modalIsOpen: false
        });
        this.props.addNewPlace({
            name,
            lat: this.state.lat,
            lng: this.state.lng
        })
    };

    render() {
        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={this.props.center}
                onClick={this.mapClickHandler}
            >
                <MarkersWithLabel
                    places={this.props.places}
                    name={this.props.name}
                />
                {
                    this.state.modalIsOpen &&
                    <InfoBox
                        onCloseClick={this.infoBoxClickHandler}
                        position={new window.google.maps.LatLng(
                            this.state.lat,
                            this.state.lng
                        )}
                        options={{ enableEventPropagation: true }}
                    >
                        <PopupContent
                            getSelectedPlace={this.getSelectedPlace}
                        />
                    </InfoBox>
                }
            </GoogleMap>
        )
    }
}

export default withScriptjs(withGoogleMap(GoogleMaps))