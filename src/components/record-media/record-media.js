import { useState, useEffect, useRef } from "react";

const RecordMedia = () => {
  const videos = useRef();
  let recordedFile = useRef();
  const [strem,setStream]= useState(null)
  let chunks = [];
  const handleMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
  setStream(stream)
      videos.current.srcObject = stream;
  recordedFile = new MediaRecorder(strem);
      videos.current.onloadedmetadata = function (e) {
        videos.current.play();
      };
    } catch (error) {
      console.log(error);
    }
  };
 
  const stopRecording =  () => {
recordedFile.ondataavailable= function(e){
  chunks.push(e.data)
}

console.log(chunks)
  };


  const startRecording = () => {

    console.log(chunks)
  };

  // }

  useEffect(() => {
    // stopRecording()
  }, [recordedFile]);

  return (
    <div>
      <video ref={videos} controls></video>
      <video ref={recordedFile} controls></video>
      <button onClick={handleMedia}>Record</button>

      <button onClick={stopRecording}>stop</button>
      <button onClick={startRecording}>start</button>
    </div>
  );
};

export default RecordMedia;
