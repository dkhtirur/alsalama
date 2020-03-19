import React, { Component } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    CarouselCaption
} from 'reactstrap';
import TextLoop from "react-text-loop";

import ProductList from './../../resources/common/product-list/product-list';

import './landing.scss';

import InstagramEmbed from 'react-instagram-embed';

const products = [{
    name: 'Wire Cut Clay Brick',
    image: require('./../../assets/images/brickhand1.jpg'),
    dimensions: '8.5 * 4 * 3 inches',
    cost: 'Rs 16 per piece'

}, {
    name: 'Wire Cut Clay Brick (First)',
    image: require('./../../assets/images/bricks.jpg'),
    dimensions: '8.5 * 4 * 3 inches',
    cost: 'Rs 13 per piece'
}, {
    name: 'Hurudees',
    image: require('./../../assets/images/products/hurudees.jpeg'),
    dimensions: '2ft long',
    cost: 'Rs 80 per piece'
},
{
    name: 'Roofing Tile (Clay)',
    image: require('./../../assets/images/products/tile.jpeg'),
    // dimensions: '2ft long',
    cost: 'Rs 28 per piece'
}]


const items = [
    {
        src: require('./../../assets/images/glimpse/hall.jpg'),
        altText: 'Freshest fruits for your daily life',
        caption: 'Fruits and Vegetables directly from the farms.',
        heading: 'Fresh fruits & vegetables'
    }, {
        src: require('./../../assets/images/glimpse/passage.jpg'),
        heading: 'Refreshments',
        caption: 'Our entire bay to store all your favourite refreshments. Have you tried the new Tropicana Orange.',
    }, {
        src: require('./../../assets/images/brickdisplay3.jpg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    }, {
        src: require('./../../assets/images/glimpse/pathway.jpg'),
        altText: 'Nuts to Coconuts',
        heading: 'Nuts to Coconuts',
        caption: 'We stock all of your grocery needs sourced fresh everyday'
    }, {
        src: require('./../../assets/images/glimpse/walk.jpg'),
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

                {/* Tabs for Categories or  */}

                <h1 className="page-heading">
                    About
                    </h1>


                {/* Product list */}
                <ProductList products={products} />
                {/* Product list ends*/}


                {/* About Us Section */}
                <div className="about-us page-content">

                    <h1 className="page-heading">
                        About
                    </h1>

                    <p className="page-desc">
                        Established in 1993 by Athikkal Group , Athikkal Bricks and Clay Works has been serving the people of Kerala with quality bricks . From building Wire Cut Bricks and other Clay Works our team has a proven track record of delivering the products ahead of time . Our traditional state of the art facility can produce upto 10000 bricks a day . The production is environment friendly and runs throughout the year .

    As a leading producer of clay building materials, our goal is to create sustainable values with natural products : a shelter for our customers . Together we strive at supplying outstanding sustainable building material solutions for a better quality of life . Our solutions are highly energy efficient resource efficient that set high industry standards . We commit to continuous improvement to add to the value to the customers .

    First of its kind - For the first time in Kerala
                    </p>
                </div>

                {/* About Us Section Ends */}



                {/* Take A Glimpse */}

                <div className="page-content glimpse">

                    <h1 className="page-heading we-sell">
                        Know Us
                    </h1>

                    <p className="page-desc">
                        Undestand us a little more by having a glimpse of how we master the art of brick making
                    </p>


                    <div className="top-gallery">

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
                    </div>




                </div>

                {/* Take A Glimpse Ends */}

                <div className="follow-us page-content">

                    <h1 className="page-heading">
                        Follow Us
                    </h1>

                    <p className="page-desc">
                        Tune in to get frequent updates on offers and our products.
                    </p>



                    {/* <InstagramEmbed

                        url='https://www.instagram.com/p/BrA5Vh5lj12/'
                        // maxWidth={320}
                        hideCaption={false}
                        containerTagName='div'
                        protocol=''
                        injectScript
                        onLoading={() => { }}
                        onSuccess={() => { }}
                        onAfterRender={() => { }}
                        onFailure={() => { }}
                    /> */}

                </div>




                {/* Overlay Cards */}

                <div className="overlay-cards">

                </div>

                {/* Overlay Cards Ends */}

            </div>)
    }
}
