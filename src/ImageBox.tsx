interface Props {
    styles: any
    width: number
    height: number
}

const ImageBox = (props: Props) => {

    return (
        <>
        <div style={props.styles.imageBox.main}>
            <canvas
                width="100%"
                height="100%"
            >

            </canvas>
        </div>
        </>
    )
}

export default ImageBox;