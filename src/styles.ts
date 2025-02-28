const styles: any = Object.freeze({
    root: {
        textAlign: "center",
        backgroundColor: "#00ff00",
        background: "content-box radial-gradient(white,#101a10)",
        display: "flex",
        flexDirection: "row",
        flexWrap:"nowrap",
        height: "100vh",
        width: "100vw",
        minWidth: "100%",
        minHeight: "100%",
        margin: "auto",
        justifyContent: "center",
        alignContent: "center"
    },
    controlBar: {
        main: {
            color: "black",
            backgroundColor: "white",
            boxShadow: "6px 0 20px 5px #00ff00",
            width: "16vw",
            height: "95vh",
            minWidth: "250px",
            margin: "1rem 1rem 1rem 0.3rem",
        },
        tile: {
            color: "red",
            padding: "10px"
        },
        form: {
            padding: "10px",
            margin: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            backgroundColor: "white",
        },
        inputs: {
            padding: "5px"
        },
        submit: {
            margin: "5px"
        },
        download: {
            // TODO: put download button on the bottom
        },
    },
    imageBox: {
        main: {
            display: "flex",
            width: "79vw",
            height: "95vh",
            minWidth: "1000px",
            backgroundColor: "white",
            boxShadow: "-8px 0px 20px 5px #00ff00",
            flexDirection: "column",
            flexWrap: "wrap",
            margin: "1rem 0.3rem 1rem 1rem"
        },
    },
    pixelBox: {
        main: {
            backgroundColor: "black",
        }
    }
});

export default styles;