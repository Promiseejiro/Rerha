import React from "react";

const { Pixo } = window;

const PixoImage = ({ src, onChange }) => {
  const pixo = new Pixo.Bridge({
    type: "modal",
    apikey: "xxxxxxxxxxxx", // put your API key here!
    onSave: (img) => onChange(img.toDataURL()),
  });
  return <img src={src} onClick={() => pixo.edit(src)} />;
};

export default PixoImage;
