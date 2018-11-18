import React, { Fragment } from 'react';

import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import blueIcon from '../../../images/blue-dot.png'
import redIcon from '../../../images/red-dot.png'

const MarkersWithLabel = props => (
    <Fragment>
        {
            props.places.reduce((acc, item) => {
                if(item.name.toUpperCase().includes(props.name.toUpperCase())){
                    acc.push(
                        <MarkerWithLabel
                            key={item.id}
                            position={{ lat: item.lat, lng: item.lng }}
                            labelAnchor={new window.google.maps.Point(0, 0)}
                            labelStyle={{ backgroundColor: "yellow", fontSize: "16px", padding: "5px 15px"}}
                            icon={{
                                url: item.visited ? blueIcon : redIcon,
                            }}
                        >
                            <div>{item.name}</div>
                        </MarkerWithLabel>
                    )
                }
                return acc;
            }, [])
        }
    </Fragment>
);

export default MarkersWithLabel;