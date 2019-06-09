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
        src: require('./../../assets/images/shop/fruits.jpeg'),
        altText: 'Freshest fruits for your daily life',
        caption: 'Fruits and Vegetables directly from the farms.',
        heading: 'Fresh fruits & vegetables'
    }, {
        src: require('./../../assets/images/shop/twenty.jpeg'),
        heading: 'Refreshments',
        caption: 'Our entire bay to store all your favourite refreshments. Have you tried the new Tropicana Orange.',
        // caption: 'Slide 2'
    }, {
        src: require('./../../assets/images/shop/thirteen.jpeg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    }, {
        src: require('./../../assets/images/shop/crockery.jpeg'),
        altText: 'Crockery',
        heading: 'All the Crockery',
        caption: 'We have a seperate section for all the clay, ceramic and brass crockeries'
    }
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


                {/* Brand Landing */}
                <div className="intro">

                    <div className="first-line">
                        <h1 className="welcome">
                            Welcome
                        </h1>
                        <p>
                            to the
                        </p>
                    </div>

                    <h1 className="second-line">
                        <TextLoop children={["bigmarket store", "neighbourhood store", "all-in-one store", "everyday store", "everything store"]} />
                    </h1>
                </div>


                <div className="top-gallery">
                    {/* Carousel */}

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

                    {/* Carousel Ends */}

                </div>


                {/* About Us Section */}
                <div className="about-us page-content">

                    <h1 className="page-heading">
                        About Us
                    </h1>

                    <p className="page-desc">
                        The Big Market was Established in the Year of 1954 at Bangalore. Since then the growth has been tremendous with a wholehearted support from our beloved Customers who helped us to enter in modern trading in supermarket field in the year of 1994. Our key features are our store Locations at prime areas with the wide range of products from the local market as well as from the international markets. We believe that we could perform and develop only through satisfying thousands of Customers who put their trust in the Best Services we provide. We have been in the market for the past some time and have striving our best to .
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
                        url='https://www.instagram.com/p/BxH6zM4AGmn/'
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


            </div>)
    }
}
