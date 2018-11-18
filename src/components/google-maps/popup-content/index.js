import React, { PureComponent } from 'react';

import './styles.scss'

export default class PopupContent extends PureComponent {

    selectedPlaceName = '';

    /**
     * We give the value of input to the class property selectedPlaceName here.
     * We don't need to setState the value here, as the view doesn't need to be re-rendered on every input change in this component
     */
    inputChangeHandler = ({target}) => {
        this.selectedPlaceName = target.value;
    };

    /**
     * This function calls getSelectedPlace parent component's method which saves the place
     */
    saveHandler = () => {
        this.selectedPlaceName && this.props.getSelectedPlace(this.selectedPlaceName)
    };

    /**
     * In this function we remove map click handler as it's fired first, then infobox's children's handlers are,
     * so we prevent that behaviour
     */
    popupMouseDownHandler = e => {
        window.google.maps.OverlayView.preventMapHitsFrom(e.target)
    };

    render() {
        return (
            <div
                className="popup-content"
                onMouseDown={this.popupMouseDownHandler}
            >
                <div>
                    <h2>Name</h2>
                    <div>
                        <input
                            className="title-input"
                            type="text"
                            onChange={this.inputChangeHandler}
                        />
                        <button
                            className="save-button"
                            onClick={this.saveHandler}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}