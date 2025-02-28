import { useState, useEffect } from 'react';

import Canvas from './Canvas';

interface ImageBoxProps {
    styles: any
    width: number
    height: number
}

const ImageBox = (props: ImageBoxProps) => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    /**
     * Resize the canvase if the window size changes.
     * TODO: Will also have to redraw the entire canvase.
     */
    useEffect(() => {
        const resizeCanvas = () => {
            const doc = document.getElementById("image-box")?.getBoundingClientRect();
            if (!doc) return;
            setDimensions({
                width: doc.right - doc.left,
                // 0.049 * windo.innerHeight is magic
                height: doc.bottom - doc.top - (window.innerHeight * .049)
            })
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        }
    }, [])

    return (
        <>
        <div style={props.styles.imageBox.main}>
            <Canvas
                id="canvas"
                width={dimensions.width}
                height={dimensions.height}
                total_pixels_wide={props.width}
                total_pixels_high={props.height}
            />
        </div>
        </>
    )
}

export default ImageBox;