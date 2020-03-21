
import React, { useState, useContext } from "react";

import { GlobalContext } from './../../Store';

import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselControl,
    CarouselCaption
} from 'reactstrap';

import InstagramEmbed from 'react-instagram-embed';

import ProductList from './../../resources/common/product-list/product-list';

import './landing.scss';

export default function Landing() {

    const [animate, setAnimate] = useState(false);

    const [activeIndex, setActiveIndex] = useState(0)

    const { products, items = [], categories } = useContext(GlobalContext);

    const [category, setCategory] = useState(categories[0]);

    function onExiting() {
        setAnimate(true);
    }

    function onExited() {
        setAnimate(false);
    }

    function next() {
        if (animate) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
        // this.setState({ activeIndex: nextIndex });
    }

    function previous() {

        if (animate) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);

    }

    function goToIndex(newIndex) {
        if (animate) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}>
                <img src={item.src} alt={item.altText} />

                <CarouselCaption captionText={item.caption} captionHeader={item.heading} />

            </CarouselItem>
        );
    });

    return (
        <div className="landing">

            {/* Categories */}
            <div className="categories">
                {categories.map((item) => <div key={item.name} onClick={() => setCategory(item)} className={`category-label ${item.name === category.name ? 'active' : ''}`}>{item.label}</div>)}
            </div>
            {/* Categories Ends */}

            {/* Product list */}
            <ProductList products={products} />
            {/* Product list ends*/}


            {/* Branding and Marketin */}

            <div className="below">


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
                                next={next}
                                previous={previous}>

                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />

                                {slides}

                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                            </Carousel>
                        </div>
                    </div>




                </div>

                {/* Take A Glimpse Ends */}

            </div>



            <div className="follow-us page-content">

                <h1 className="page-heading">
                    Follow Us
                    </h1>

                <p className="page-desc">
                    Tune in to get frequent updates on offers and our products.
                    </p>



                <InstagramEmbed

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
                />

            </div>




            {/* Overlay Cards */}

            <div className="overlay-cards">

            </div>

            {/* Overlay Cards Ends */}

        </div>)
}
// }
