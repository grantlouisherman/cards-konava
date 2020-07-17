import React, { useEffect } from "react";

const DownloadButton = ({ stageNode }) => {
  useEffect(() => {}, [stageNode]);
  const onClickHandler = (evt) => {
    const link = document.createElement("a");
    link.download = "name";
    link.href = stageNode.getStage().toDataURL({ pixelRatio: 3 });;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <button onClick={onClickHandler}>Save Canvas</button>;
};

export default DownloadButton;
