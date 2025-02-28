import { useRef, useEffect, useState } from 'react';

interface Props {
    width: number
    height: number
    id: string
    total_pixels_wide: number
    total_pixels_high: number
}

const Canvas = (props: Props) => {
    const canvasRef = useRef(null);

    const [mouseDown, setMouseDown] = useState(false);
    const [cords, setCords] = useState({
        x: 0,
        y: 0
    })

    /**
     * Wathces for initial mouse down and keeps track of mouse
     * (x,y)
     */
    useEffect(() => {
        // If the mouse is pressed down, the below useEffect takes over
        // keeping track of the mouse movement. This is due to how (x,y) can
        // sometimes be considered (0,0) if queried too soon after mounting (or
        // lack there of)
        if (mouseDown) return;
        const handleMouseMove = (e: any) => setCords({ x: e.clientX, y: e.clientY});
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    })

    /**
     * Watches if mouse is still down. 
     * If so, adds an event listener for the cords of the mouse (x,y).
     * Draws a box based off of those cords.
     * Ends by clearing the interval, which acts as a refresh rate of sorts,
     * and removing the mouse move event listener. 
     */
    useEffect(() => {

        // When the mouseDown state changes from true to false,
        // this effect is also triggered. However, we do not want
        // any state in the array buffer to change when the mouse is
        // technicall up. 
        if (!mouseDown) return;

        // Unable to store in mouse cordinates in state alone.
        // Probably due to useState being async :(
        // Iniitally set to cords because otherwise the thing is not
        // mounted and thinks (x,y) are zero. So it is kept track up until
        // the user clicks, at which point, this logic takes over. 
        let x: number = cords.x;
        let y: number = cords.y;

        // Helper functions that offset the location of the canvas in the DOM
        // so that the cordinates inputted onto the canvas match where the
        // mouse actually is.
        const get_x: any = (r: number) => (x - r);
        const get_y: any = (r: number) => (y - r);

        const handleWindowMousMove = (e: any) => {
                x = e.clientX,
                y = e.clientY
        }

        window.addEventListener("mousemove", handleWindowMousMove);

        // Draw a rectangle at a given interval so long as the mouse is down
        let interval = setInterval(() => {
            const canvas: any = canvasRef.current;
            const ctx: any = canvas.getContext('2d');
            let rect = ctx.canvas.getBoundingClientRect()

            // TODO: need to check the state of this pixel
            ctx.fillStyle = "#ff00ff";
            ctx.fillRect(get_x(rect.left), get_y(rect.top), 10, 10);

        }, 10);

        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", handleWindowMousMove);
        }
        
    }, [mouseDown]);

    /**
     * Returns the adjusted values of the (x,y) cordinates to match the "pixel"
     * like structure/image we are going for
     */
    const getAdjustedCordinates = () => {
        // h_spacing and w_spacing must be in this function scope because 
        // the width and height of the canvas could change with a window resize
        const h_spacing: number = props.height / props.total_pixels_high;
        const w_spacing: number = props.width / props.total_pixels_wide;

        const h_adjusted: number = props.height % h_spacing;
        const w_adjusted: number = props.width % w_spacing;

    }

    /**
     * Flips the state of a given bit found in the buffer array
     */
    const updateBufferArray = (x: number, y: number) => {
        // TODO: MAKE SURE THESE ARE FLOORED
        const bit = x * y;
    }

    return (
        <canvas 
            {...props} 
            width={props.width}
            height={props.height}
            ref={canvasRef} 
            onMouseDown={() => setMouseDown(true)} 
            onMouseUp={() => setMouseDown(false)} 
            
        />
        );
}

export default Canvas;