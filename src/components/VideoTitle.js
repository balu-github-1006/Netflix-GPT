import React from "react";

function VideoTitle({ title, plot, language, genre, awards, country }) {
  return (
    <div className="w-screen aspect-video pt-[30%] px-24  m-auto absolute  text-white bg-gradient-to-r from-black">
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-2 w-5/12">{plot}</p>
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
