import React, { PureComponent } from 'react';

import SearchField from './search-field';
import PlacesList from './places-list';
import './styles.scss'

export default class SearchWithPlacesList extends PureComponent {

    /**
     * This function gets search value from child SearchField component and passes to parent
     */
    getSearchValue = name => {
        this.props.setSearchValue(name)
    };

    /**
     * This function gets the checkbox target from child PlacesList component and gives to parent
     */
    getVisited = target => {
        this.props.setVisited(target)
    };

    render() {
        return (
            <div className="search-with-list">
                <div className="inner-container">
                    <SearchField
                        getSearchValue={this.getSearchValue}
                        getVisited={this.getVisited}
                    />
                    <PlacesList
                        name={this.props.name}
                        places={this.props.places}
                        getVisited={this.getVisited}
                    />
                </div>
            </div>
        )
    }
}