import { useState } from 'react';

interface Props {
    width: number
    height: number
    file_size_est: number
    styles: any
    funcs: {
        cSetWidth: Function,
        cSetHeight: Function,
        renderBlobAndGetURL: Function
    }
}

const ControlBar = (props : Props) => {

    const [url, setUrl] = useState<string>("");

    const {
        cSetWidth,
        cSetHeight,
        renderBlobAndGetURL
    } = props.funcs;

    const {
        main,
        title,
        form,
        inputs,
        submit,
        download
    } = props.styles.controlBar

    const getDownloadURL = () => setUrl(renderBlobAndGetURL());

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const nW: number = e.target.width.value;
        const nH: number = e.target.height.value;
        // Prevents refreshing of canvas if the values do not change
        if (nW && nW != props.width) cSetWidth(nW);
        if (nH && nH != props.height) cSetHeight(nH);
    }

    return (
        <>
        <div style={main}>
            <p style={title}>Control Bar</p> 
            <form onSubmit={handleSubmit} style={form}>
                <div style={inputs}>
                    <label htmlFor="height">Height </label>
                    <input 
                        type="number" 
                        id="height" 
                        name="height"
                        min="32"
                        max="4000"
                        defaultValue={props.height}
                        step="2"
                        pattern="\d*"
                    />
                </div>
                <div>
                    <label htmlFor="width">Width </label>
                    <input 
                        type="number" 
                        id="width"
                        name="width"
                        min="32"
                        max="4000"
                        defaultValue={props.width}
                        step="2"
                        pattern="\d*"
                    />
                </div>
                <button type="submit" style={submit}>
                    Change dimensions
                </button>
            </form>
            <div style={download}>
                <div id="file_size_estimate">
                    <p>
                        Current Size: {props.file_size_est} bytes
                    </p>
                </div>
                <button onClick={getDownloadURL}>
                    Get Download
                </button>
                <p id="download">
                    <a href={url}>
                        {url ? "Link" : ""}
                    </a>
                </p>
            </div>
        </div>
        </>
    );
}

export default ControlBar;