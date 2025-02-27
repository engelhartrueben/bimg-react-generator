const styles: any = Object.freeze({
    root: {
        textAlign: "center",
        backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        flexWrap:"nowrap",
        height: "100%",
        width: "100%",
        minWidth: "100%",
        minHeight: "100%"
    },
    controlBar: {
        main: {
            color: "black",
            backgroundColor: "white",
            width: "15vw",
            height: "94vh",
            minWidth: "250px",
        },
        form: {
            padding: "10px",
            margin: "10px"
        },
        inputs: {
            padding: "5px"
        },
        submit: {
            margin: "5px"
        }
    },
    imageBox: {
        main: {
            display: "flex",
            width: "79vw",
            height: "94vh",
            minWidth: "1000px",
            margin: "17px",
            backgroundColor: "white",
            flexDirection: "column",
            flexWrap: "wrap"
        },
    },
    pixelBox: {
        main: {
            backgroundColor: "black",
        }
    }
});

export default styles;