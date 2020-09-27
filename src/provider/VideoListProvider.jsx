import React, { createContext, useContext, useState } from 'react';

const VideoListContext = createContext(null);

const useVideoContext = () => {
  const context = useContext(VideoListContext);
  if (!context) {
    throw new Error(`Can't use "VideoListContext" without an AuthProvider!`);
  }
  return context;
};

const VideoListProvider = ({ children }) => {
  const [videoList, setVideoList] = useState(null);
  const [error, setError] = useState(null);

  return (
    <VideoListContext.Provider
      value={{ videoList, error, setVideoList, setError }}
    >
      {children}
    </VideoListContext.Provider>
  );
};

export { useVideoContext };
export default VideoListProvider;
