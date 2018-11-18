import React, { PureComponent } from 'react';

export default class PlacesList extends PureComponent {

    /**
     * This function passes checkbox target to parent
     */
    changeHandler = ({target}) => {
        this.props.getVisited(target);
    };

    render() {
        return (
            <div className="places-list-container">
                <div className="places-list-inner">
                    {
                        this.props.places.reduce((acc, item) => {
                            if(item.name.toUpperCase().includes(this.props.name.toUpperCase())){
                                acc.push(
                                    <div className="place-row" key={item.id}>
                                        <div>{item.name}</div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name={item.id}
                                                onChange={this.changeHandler}
                                                checked={item.visited}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            return acc;
                        }, [])
                    }
                </div>
            </div>
        )
    }
}