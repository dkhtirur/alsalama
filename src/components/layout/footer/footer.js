

import React from "react";

import "./footer.scss";

export default function Footer() {


    return (<footer>

        {/* What we Sell */}

        <div className="page-content products">


            {/* Marketing Content */}
            <h1 className="page-heading we-sell">
                Products
            </h1>

            <div>

                <div className="tagline-wrapper">

                    <h1 className="page-tagline">


                        <span>Clay Bricks</span>
                        <span>Clay Tiles</span>
                        {/* <span>Flooring Tiles</span>
                <span>Hurudees</span>

                <span>&</span>

                <span>lot more</span> */}



                    </h1>
                </div>



                <iframe
                    title='google form'
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfkFWeXk-_6H1_MdupA7OPqXccMqtx1tFCCk_5R5URBKiIgLQ/viewform?embedded=true"
                    height="930" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>


            </div>



            {/* Marketing Content Ends */}



        </div>


        {/* What we Sell Ends */}
        <div className="footer-content">
            <div className="left">
                {/* <img className="mb-2" src={logo} alt="" /> */}
                <small className="d-block mb-3 text-muted">© 1993-2019</small>
            </div>

        </div>


        <div className="footer-end">
            <div className="content flex-80" flex="80">
                <p className="md-caption">
                    Got any questions send us an{" "}
                    <a href="mailto:ashique181@hotmail.com">email</a>
                </p>
                <div className="social">
                    <h4 className="md-subhead">Call +91 7899205111</h4>
                </div>
                <p className="copyright">
                    Copyright © 2019, Athikkal Bricks and Clay Works. Since 1993, All
                    rights reserved.
      </p>
            </div>
        </div>


    </footer>
    );

}

