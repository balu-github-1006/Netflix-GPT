import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-svw aspect-video px-24 pt-[12%] m-auto absolute  text-white bg-gradient-to-r from-black">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-2 w-5/12">{overview}</p>
      <div className="my-4">
        <button className="p-2 px-4 bg-white text-black font-semibold  rounded-md mr-4 hover:bg-opacity-60">
          ▶️ Paly
        </button>
        <button className="p-2 px-4 bg-gray-700 text-white font-semibold  rounded-md mr-4 hover:bg-opacity-60">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
