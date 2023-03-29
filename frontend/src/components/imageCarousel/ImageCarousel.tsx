import React, {useRef} from 'react';
import "./ImageCarousel.css"
import ImageCard from "../imageCard/ImageCard";
import { CarouselType } from "../../interfaces";
import {getRefValue, useStateRef} from "../../lib/hooks";

export type Props = {
    items: Array<CarouselType>
}

const ImageCarousel = ({ items }: Props) => {
    const currentOffsetXRef = useRef(0);
    const startXRef = useRef(0);

    const [offsetX, setOffsetX, offsetXRef] = useStateRef(-770);

    const onTouchMove = (event: TouchEvent | MouseEvent) => {
        const currentX = getTouchEventData(event).clientX;
        const diff = getRefValue(startXRef) - currentX;
        const newOffsetX = getRefValue(currentOffsetXRef) - diff;

        setOffsetX(newOffsetX)
    }

    const onTouchEnd = () => {
        window.removeEventListener('touchmove', onTouchMove)
        window.removeEventListener('touchend', onTouchEnd)
        window.removeEventListener('mousemove', onTouchMove)
        window.removeEventListener('mouseup', onTouchEnd)
    }

    const onTouchStart = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        currentOffsetXRef.current = getRefValue(offsetXRef);
        startXRef.current = getTouchEventData(event).clientX

        window.addEventListener('touchmove', onTouchMove)
        window.addEventListener('touchend', onTouchEnd)
        window.addEventListener('mousemove', onTouchMove)
        window.addEventListener('mouseup', onTouchEnd)
    }

    function getTouchEventData(
        event:
            | TouchEvent
            | MouseEvent
            | React.TouchEvent<HTMLDivElement>
            | React.MouseEvent<HTMLDivElement>
    ) {
        return 'changedTouches' in event ? event.changedTouches[0] : event;
    }

    return (
        <div className='imagecarousel' onTouchStart={onTouchStart} onMouseDown={onTouchStart}>

            {/*<p>Image Carousel</p>*/}
            {/*/!*<ImageCard/>*!/*/}
            <ul className='imagecarousel__list' style={{ transform: `translate3d(${offsetX}px, 0, 0)`}}>
                {items.map((item, index) => (
                    <ImageCard key={index} {...item}/>
                ))}
            </ul>

        </div>
    );
};

export default ImageCarousel;
