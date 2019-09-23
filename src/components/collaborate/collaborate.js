
import React, { Component } from "react";

import './collaborate.scss';

import Gallery from 'react-photo-gallery';

export default class Collaborate extends Component {

    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }


    render() {

        const photos = [
            {
                // src: require('./../../assets/images/shop/fruits.jpeg'),
                width: 4,
                height: 3
            },
            {
                //src: require('./../../assets/images/shop/twenty.jpeg'),
                width: 1,
                height: 1
            },
            {
                //src: require('./../../assets/images/shop/two.jpeg'),
                width: 4,
                height: 3
            },
            {
                //src: require('./../../assets/images/shop/three.jpeg'),
                width: 4,
                height: 3
            },

            {
                // src: require('./../../assets/images/shop/thirteen.jpeg'),
                width: 1,
                height: 1
            },

        ];

        return (
            <div className="gallery">
                <div className="page-content">
                    <h1 className="page-heading">

                    </h1>

                    <p className="page-desc">
                        Our stores are designed for a smooth customer experience . Spacios walkspace area allows for a relaxed shopping experience with your friends and family
                    </p>
                </div>

                <iframe src="https://docs.google.com/document/d/e/2PACX-1vTFYdjp9BkCbXoAllvv2k_TeJgT755aukRtW3A4t2BADwINcgYpYmB_ABZ8TssNmBaEBIw1L6LlcWob/pub?embedded=true"></iframe>
                {/* <Gallery photos={photos} />; */}

            </div>)
    }
}
