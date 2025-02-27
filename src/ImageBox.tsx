// import { useState, useEffect } from 'react';
import PixelBox from "./PixelBoxes";

// import styles from "./styles";

interface Props {
    styles: any
    width: number
    height: number
}

const ImageBox = (props: Props) => {

    return (
        <>
        <div style={props.styles.imageBox.main}>
            {
                Array.from({length: props.height}, (_, height) => (
                    <div>
                        {
                            Array.from({ length: props.width }, (_, width) => (
                                <PixelBox 
                                    id={String(height) + "," + String(width)}
                                    _key={String(height) + "," + String(width)}
                                    theme={{
                                        width: (window.innerWidth * .79) / props.width,
                                        height: (window.innerHeight * .94) / props.height,
                                    }}
                                    width={props.width}
                                    height={props.height}
                                />
                            ))
                        }
                </div>
                ))
            }
            
        </div>
        </>
    )
}

export default ImageBox;