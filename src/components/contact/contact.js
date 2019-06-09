
import React, { Component } from "react";

import './contact.scss';

export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }


    render() {

        const photos = [
            {
                src: require('./../../assets/images/shop/fruits.jpeg'),
                width: 2,
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
            <div className="contact">
                <div className="page-content">
                    <h1 className="page-heading">
                        Contact
                    </h1>

                    <p className="page-desc">
                        Send us any kind of request by filling the below form . We shall arrange a callback at the earliest.
                    </p>
                </div>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdlGLCgUd4SW8Zoj_1mqctTUAEOVQuW2BGe-ibu-dq7nmwefQ/viewform?embedded=true" width="640" height="930" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>


            </div>)
    }
}
