
import React, { Component } from "react";

import './gallery.scss';

import Gallery from 'react-photo-gallery';

export default class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }


    render() {

        const photos = [
            {
                src: require('./../../assets/images/shop/fruits.jpeg'),
                width: 4,
                height: 3
            },
            {
                src: require('./../../assets/images/shop/twenty.jpeg'),
                width: 1,
                height: 1
            },
            {
                src: require('./../../assets/images/shop/two.jpeg'),
                width: 4,
                height: 3
            },
            {
                src: require('./../../assets/images/shop/three.jpeg'),
                width: 4,
                height: 3
            },

            {
                src: require('./../../assets/images/shop/thirteen.jpeg'),
                width: 1,
                height: 1
            },

        ];

        return (
            <div className="gallery">
                <div className="page-content">
                    <h1 className="page-heading">
                        Gallery
                    </h1>

                    <p className="page-desc">
                        Our stores are designed for a smooth customer experience . Spacios walkspace area allows for a relaxed shopping experience with your friends and family
                    </p>
                </div>

                <Gallery photos={photos} />;

            </div>)
    }
}
