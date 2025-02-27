import { useState } from 'react';

interface Props {
    theme: {
        // color: string
        height: number
        width: number
    }
    _key: string
    id: string
    width: number
    height: number
}

/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * So... I tried to change the dimensions of each div element         *
 * if the user was to resize there window. That failed miserably.     *
 *                                                                    *
 * Here lies a tired interface, who will be remembered for            *
 * ensuring the millions of dimensional values were numbers, and not  *
 * some other arbitrary type. The TypeScript community thanks you,    *
 * interface Dimensions.                                              *
 *                                                                    *
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
// interface Dimensions {
//     width: number
//     height: number
// }

const PixelBox = (props: Props) => {
    // const [clicked, setClicked] = useState(felse);
    const [color, setColor] = useState<string>("black")

    const [state, setState] = useState<number>(0);

    const changeColor = () => {
        setColor(color === "black" ? "white" : "black");
        setState(state === 0 ? 1 : 0);
    }

    return (
        <div 
            style={{
                ...props.theme,
                backgroundColor: color
            }} 
            id={props.id} 
            key={props._key}
            onMouseDownCapture={() => {
                console.log(`clicked ${props.id}`);
                changeColor();
            }}
            onDragStart={(e) => e.preventDefault()}
            >
            
        </div>
    )
}

export default PixelBox