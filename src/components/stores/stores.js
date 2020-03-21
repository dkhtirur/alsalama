
import React, { Component } from "react";

import './stores.scss';

// import GoogleMapReact from 'google-map-react';



// class Marker extends Component {

//     // static propTypes = {
//     //     text: PropTypes.string
//     // };

//     constructor(props) {
//         super(props);

//         this.state = {
//             marker: props.marker
//         }
//     }

//     componentWillReceiveProps = (nextProps) => {
//         // console.log(nextProps);
//         this.setState({ marker: nextProps.marker });
//     }

//     render() {

//         let { marker } = this.state;

//         let m = require('./../../assets/images/marker.png');
//         // let mActive = require('./../../assets/images/marker-active.png');


//         // console.log(this.props.hover);
//         // const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

//         return (
//             <div className={`marker ${marker.expanded ? 'marker-active' : 'marker-inactive'}`}>
//                 <div className="marker-info">

//                     <p className="marker-caption">
//                         {marker.caption}

//                     </p>


//                     <small className="marker-address">
//                         {marker.address}
//                     </small>
//                 </div>

//                 <img alt='location' className="location" src={m}></img>

//             </div >
//         );
//     }
// }


export default class Stores extends Component {

    constructor(props) {

        super(props);

        this.state = {
            activeIndex: 0,
            // markers: [
            //     {
            //         caption: 'Clay Works, Edavanna',
            //         address: 'Athikkal Bricks and Clay Works, Edavanna, Malappuram, 676541',
            //         lat: 12.906100, lng: 77.580450,
            //         zoom: 13
            //     },
            //     {
            //         caption: 'Best Bricks, Nilambur',
            //         address: 'Best Bricks, Nilambur',
            //         lat: 13.058840, lng: 77.581070,
            //         zoom: 18

            //     },
            //     {
            //         caption: 'Clay Works, Bangalore',
            //         address: '701, Rahat Bagh, Nagavarpalaya, Bangalore',
            //         lat: 12.906100, lng: 77.580450,
            //         zoom: 18

            //     },
            //     {
            //         caption: 'Clay Works, Calicut',
            //         address: '3rd Floor, Casamia, Eranhipalam Junction, Calicut',
            //         lat: 52.955413, lng: 31.337844
            //     },
            //     {
            //         caption: 'Athikkakl Saw Mills, Caliut',
            //         address: 'Kallai, Calicut',
            //         lat: 12.797005, lng: 77.706684
            //     }]
        };
    }

    componentDidMount = () => {
        // this.setState({})

        // Show the first marker with default zoom
        // const { markers } = this.state;
        // this.viewMarker(markers, 0);
    }

    loadMap = () => {
        const { markers } = this.state;
        this.viewMarker(markers, 0);
    }

    viewMarker = (marker, index) => {
        let { markers, activeMarker } = this.state;
        activeMarker = marker;
        markers.forEach((marker) => {
            marker.expanded = false;
        })
        markers[index].expanded = true;
        this.setState({ markers, activeMarker });
    }

    render() {

        let center = {
            center: {
                lat: 12.976750,
                lng: 77.575280
            },
            zoom: 16
        };

        let { markers, activeMarker } = this.state;

        return (
            <div className="stores">
                <div className="page-content">
                    <h1 className="page-heading">
                        Stores
                    </h1>

                    <p className="page-desc">
                        We have our factory located at the heart of Malabar , Edavanna, Malappuram and have stores around the city. We also accept orders from around South India . Please contact our nearest distributors.
                    </p>
                </div>

                <div className="stores-container" style={{ height: '100vh', width: '100%' }}>
                    {/* <GoogleMapReact
                        center={activeMarker}
                        bootstrapURLKeys={{ key: 'AIzaSyDi9OjnBEJ15dT9auEfNbOQvh-z5HGTohs' }}
                        defaultCenter={center.center}
                        onGoogleApiLoaded={() => {
                            this.loadMap();
                        }}
                        defaultZoom={center.zoom}>

                        {
                            // .filter((marker) => { return marker.expanded })
                            markers.map((marker) => {
                                return (<Marker
                                    marker={marker}
                                    lat={marker.lat}
                                    lng={marker.lng}
                                    text={marker.caption}
                                />)
                            })
                        }

                    </GoogleMapReact> */}

                    <div className="list-group">

                        {/* Marker Right bar */}

                        <div className="list-group-item store-heading">
                            <h6 className="marker-heading">{markers.length} Stores in Bangalore</h6>
                        </div>

                        {
                            markers.map((marker, index) => {
                                return (<div key={index} onClick={() => { this.viewMarker(marker, index) }} className={`marker list-group-item list-group-item-action ${marker.expanded ? 'marker-active' : 'marker-inactive'}`} >
                                    <div class="marker-detail">
                                        <h6 class="mb-1 marker-caption">{marker.caption}</h6>
                                        <small>
                                            {marker.address}
                                        </small>
                                        {/* <small>3 days ago</small> */}
                                    </div>
                                    {/* <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p> */}
                                    {/* <small>Donec id elit non mi porta.</small> */}
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>)
    }
}
