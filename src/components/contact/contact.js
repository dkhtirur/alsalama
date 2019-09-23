
import React, { Component } from "react";

import './contact.scss';

export default class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }


    render() {

        return (
            <div className="contact">
                {/* <div className="page-content">
                    <h1 className="page-heading">
                        Contact
                    </h1>

                    <p className="page-desc">
                        Send us any kind of request by filling the below form . We shall arrange a callback at the earliest.
                    </p>
                </div> */}

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkFWeXk-_6H1_MdupA7OPqXccMqtx1tFCCk_5R5URBKiIgLQ/viewform?embedded=true" width="100%" height="930" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </div>)
    }
}
