import React from "react";

const Youtube = (props) => {
  const video = props.videos.map((video) => {
    const url = "https://www.youtube.com/embed/" + video.id.videoId;

    return (
      <div style={{ margin: "20px", textAlign: "center" }}>
        <iframe
          id="ytplayer"
          type="ytplayer"
          width="480"
          height="270"
          src={url}
          frameborder="0"
        />
      </div>
    );
  });

  return <div style={{ marginTop: "10px" }}>{video}</div>;
};

export default Youtube;
