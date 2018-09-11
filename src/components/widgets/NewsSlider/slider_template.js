import React from 'react';
import Slick from 'react-slick';
import SliderItem from './slider_item';



const SliderTemplate = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }

    let template = null;

    switch (props.type) {
        case ('featured'):
        template = props.data.map((item,i) =>{
            return (
                <SliderItem item={item} key={i}/>
            )
        })
        break;

        default:
        template = null;

    }

    return (
        <Slick {...settings}>
            {template}
        </Slick>
    );
}

export default SliderTemplate;
