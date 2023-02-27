import React, { useState, useRef, useEffect } from "react";
import RecordRTC, { invokeSaveAsDialog } from "recordrtc";

function RecordMedia() {
  const [stream, setStream] = useState(null);
  const [blob, setBlob] = useState(null);
  const refVideo = useRef(null);
  const recorderRef = useRef(null);

  const handleRecording = async () => {
    // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 1920,
        height: 1080,
        frameRate: 30,
      },
      audio: true,
    });

    refVideo.current.srcObject = mediaStream;
    refVideo.current.onloadedmetadata = function (e) {
      refVideo.current.play();
    };

    setStream(mediaStream);
    recorderRef.current = new RecordRTC(mediaStream, { type: "video" });
    recorderRef.current.startRecording();
  
  };

  const handleStop = () => {
    recorderRef.current.stopRecording(() => {
      setBlob(recorderRef.current.getBlob());
    });
  };
  const handleSave = () => {
    invokeSaveAsDialog(blob);
    console.log(blob)
  };

  useEffect(() => {
    if (!refVideo.current) {
      return;
    }

    // refVideo.current.srcObject = stream;

  }, [stream, refVideo]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleRecording}>start</button>
         <button onClick={handleStop}>stop</button>
        <button onClick={handleSave}>save</button>
        {blob && (
          <div>
            <video
              src={URL.createObjectURL(blob)}
              controls
              autoPlay
              style={{ width: "700px", margin: "1em" }}
            />
          
          </div>
        )}
   <video ref={refVideo} controls ></video>
      </header>
    </div>
  );
}

export default RecordMedia;
