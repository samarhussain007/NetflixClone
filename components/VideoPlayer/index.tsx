import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { Episode } from "../../types";
import { Video, ResizeMode } from "expo-av";
import { Playback } from "expo-av/build/AV";
import { styles } from "./stytles";

interface VideoPlayerProps {
  episode: Episode;
}

const VideoPlayer = (props: VideoPlayerProps) => {
  const { episode } = props;
  const [status, setStatus] = useState({});
  const video = useRef<Playback>(null);

  useEffect(() => {
    if (!video) {
      return;
    }
    async () => {
      await video?.current?.unloadAsync();
      await video?.current?.loadAsync({ uri: episode.video }, {}, false);
    };
  });
  return (
    <Video
      ref={video}
      style={styles.video}
      source={{
        uri: episode.video,
      }}
      posterSource={{
        uri: episode.poster,
      }}
      posterStyle={{
        resizeMode: "cover",
      }}
      usePoster={true}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      isLooping
      onPlaybackStatusUpdate={(status) => setStatus(() => status)}
    />
  );
};

export default VideoPlayer;
