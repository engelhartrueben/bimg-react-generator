import { useState, useEffect } from 'react';

import ImageBox from "./ImageBox";
import ControlBar from './ControlBar';

import styles from "./styles";
// import './App.css'

const App = () => {
  // default standard 1920x1080
  const [width, setWidth] = useState<number>(100);
  const [height, setHeight] = useState<number>(100);
  
  // Warning latch
  //    If the user changes the size of the window, the event
  //    listener can trigger 3 to 4 times. I want to warn the user
  //    not piss them off.
  const [warningLatch, setWarningLatch] = useState(false);

  // TODO what happens if dividing by 8 gives decimal?
  const [totalBytes, setTotalBytes] = useState<number>(
    (width * height) / 8
  );

  // TODO create helper function that creates the specified "image" with right width and height
  const [buf, setBuf] = useState<ArrayBuffer>(new ArrayBuffer(totalBytes));

  // lock stops the setting of width and height
  // also used to check if the user would like to save before exiting
  // const [lock, setLock] = useState<Boolean>(false);



  // If either width or heigh change, change the total bytes in the buffer
  useEffect(() => {
    // TODO add alert to make sure no data is overwritten
    // USE LOCK HERE
    setTotalBytes(
      (width * height) / 8
    )
  }, [width, height])

  useEffect(() => {
    setBuf(new ArrayBuffer(totalBytes));
  }, [totalBytes])


  // NOT DONE
  // TODO Add meta data to the width and size in the blob itself
  const renderBlobAndGetURL = (): string => {
    let b = new Blob([buf]);
    let f = new File([b], 'my_blob.bimg', { type: 'application/octet-stream'});
    return URL.createObjectURL(f);
  }

  const handleResize = () => setWarningLatch(true);

  useEffect(() => {
    window.addEventListener("resize", () => handleResize, true);
  })

  useEffect(()=> {
    alert(
      `
      Resizing the window is a bad idea.\n
      It costs too much to re-render each pixel, literally.
      Refresh and don't move the window again. Got it?
      `
    );
  }, [warningLatch])

  // Pass info from child to parent
  const cSetHeight = (h: number) => setHeight(h);
  const cSetWidth = (w: number) => setWidth(w);

  const funcs = {
    cSetHeight,
    cSetWidth,
    renderBlobAndGetURL
  }

  return (
    <>
    <div style={styles.root}>
      <div>
        <ImageBox 
          styles={styles}
          width={width}
          height={height}
        />
      </div>
      <div>
        <ControlBar 
          width={width} 
          height={height} 
          funcs={funcs} 
          file_size_est={totalBytes}
          styles={styles}
        />
      </div>
    </div>
    </>
  )
}

export default App
