
import React, { Component } from "react";

import './gallery.scss';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import Gallery from 'react-photo-gallery';


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
        // caption: 'Slide 2'
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

        const { activeIndex } = this.state;


        // const photos = [
        //     {
        //         src: require('./../../assets/images/shop/fruits.jpeg'),
        //         width: 4,
        //         height: 3
        //     },
        //     {
        //         src: require('./../../assets/images/shop/twenty.jpeg'),
        //         width: 1,
        //         height: 1
        //     },
        //     {
        //         src: require('./../../assets/images/shop/two.jpeg'),
        //         width: 4,
        //         height: 3
        //     },
        //     {
        //         src: require('./../../assets/images/shop/three.jpeg'),
        //         width: 4,
        //         height: 3
        //     },

        //     {
        //         src: require('./../../assets/images/shop/thirteen.jpeg'),
        //         width: 1,
        //         height: 1
        //     },

        // ];

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

                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}>

                    <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}

                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>

                {/* <Gallery photos={photos} />; */}

            </div>)
    }
}
