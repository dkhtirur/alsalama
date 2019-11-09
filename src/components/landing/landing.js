import React, { Component } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import TextLoop from "react-text-loop";

import './landing.scss';

import InstagramEmbed from 'react-instagram-embed';


const items = [
    {
        src: require('./../../assets/images/brickdisplay1.jpg'),
        altText: 'Freshest fruits for your daily life',
        caption: 'Fruits and Vegetables directly from the farms.',
        heading: 'Fresh fruits & vegetables'
    }, {
        src: require('./../../assets/images/brickdisplay2.jpg'),
        heading: 'Refreshments',
        caption: 'Our entire bay to store all your favourite refreshments. Have you tried the new Tropicana Orange.',
    }, {
        src: require('./../../assets/images/brickdisplay3.jpg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    }, {
        src: require('./../../assets/images/brickhand1.jpg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    }, {
        src: require('./../../assets/images/brickhand2.jpg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    }, {
        src: require('./../../assets/images/brickhand3.jpg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    },
];

export default class Landing extends Component {

    constructor(props) {
        super(props);

        this.state = { activeIndex: 0 };
    }



    onExiting = () => {
        this.animating = true;
    }

    onExited = () => {
        this.animating = false;
    }

    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex = (newIndex) => {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}>
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.heading} />

                </CarouselItem>
            );
        });

        const { activeIndex } = this.state;

        return (
            <div className="landing">


                <div className="intro">

                    <div className="first-line">
                        <h1 className="welcome">hello<br /> there</h1>
                    </div>

                    <h1 className="second-line">
                        {/* <TextLoop children={["clay works", "your complete clay solution", "", "everyday store", "everything store"]} /> */}
                    </h1>
                </div>


                {/* <div className="top-gallery">
                    Carousel

                    <div className="card">

                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}>

                            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                            {slides}

                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </div>

                    Carousel Ends

                </div> */}


                {/* What we Sell */}

                <div className="page-content">

                    <h1 className="page-heading we-sell">
                        We Sell
                    </h1>

                    <h1 className="page-tagline">
                        <span>Clay Bricks</span>
                        <span>Clay Tiles</span>
                        <span>Flooring Tiles</span>
                        <span>Hurudees</span>

                        <span>&</span>

                        <span>lot more</span>

                    </h1>


                </div>


                {/* What we Sell Ends */}


                {/* About Us Section */}
                <div className="about-us page-content">

                    <h1 className="page-heading">
                        About Us
                    </h1>

                    <p className="page-desc">
                        Established in 1993 by Athikkal Group , Athikkal Bricks and Clay Works has been serving the people of Kerala with quality bricks . From building Wire Cut Bricks and other Clay Works our team has a proven track record of delivering the products ahead of time . Our traditional state of the art facility can produce upto 10000 bricks a day . The production is environment friendly and runs throughout the year .

    As a leading producer of clay building materials, our goal is to create sustainable values with natural products : a shelter for our customers . Together we strive at supplying outstanding sustainable building material solutions for a better quality of life . Our solutions are highly energy efficient resource efficient that set high industry standards . We commit to continuous improvement to add to the value to the customers .

    First of its kind - For the first time in Kerala
                    </p>
                </div>

                {/* About Us Section Ends */}


                <div className="follow-us page-content">

                    <h1 className="page-heading">
                        Follow Us
                    </h1>

                    <p className="page-desc">
                        Tune in to get frequent updates on offers and our products.
                    </p>



                    <InstagramEmbed

                        url='https://www.instagram.com/p/BrA5Vh5lj12/'
                        maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    />

                </div>




                {/* Overlay Cards */}

                <div className="overlay-cards">

                </div>

                {/* Overlay Cards Ends */}

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkFWeXk-_6H1_MdupA7OPqXccMqtx1tFCCk_5R5URBKiIgLQ/viewform?embedded=true" width="100%" height="930" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


            </div>)
    }
}
