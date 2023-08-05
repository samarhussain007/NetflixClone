import { View, Text, Image, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import movie from "../../assets/data/movie";
import {
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";

const firstSeason = movie.seasons.items[0];

const firstEpisode = movie.seasons.items[0].episodes.items[0];

const MovieDetailsScreen = () => {
  const [currentSeason, setCurrentSeason] = useState(firstSeason);
  const seasonNames = movie.seasons.items.map((el) => el.name);
  const [currentEpisode, setCurrentEpisode] = useState(
    firstSeason.episodes.items[0]
  );
  console.log(seasonNames);
  return (
    <View>
      <VideoPlayer episode={currentEpisode.episodes.items[0]} />
      <FlatList
        data={currentSeason.episodes.items}
        style={{ marginBottom: 250 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View
              style={{
                padding: 12,
              }}
            >
              <Text style={styles.title}>{movie.title}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={styles.match}>98% match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                  <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name="hd" size={24} color="white" />
              </View>
            </View>

            <Pressable
              onPress={() => console.warn("lol")}
              style={styles.playButton}
            >
              <Text style={styles.playButtonText}>
                <Entypo name="controller-play" size={16} color="black" />
                Play
              </Text>
            </Pressable>

            <Pressable
              onPress={() => console.warn("lol")}
              style={styles.downloadButton}
            >
              <Text style={styles.downloadButtonText}>
                <AntDesign name="download" size={16} color="white" style={{}} />{" "}
                Download
              </Text>
            </Pressable>
            <Text
              style={{
                color: "white",
                marginVertical: 10,
              }}
            >
              {movie.plot}
            </Text>
            <Text style={styles.year}>Cast: {movie.cast}</Text>
            <Text style={styles.year}>Creator: {movie.creator}</Text>

            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <AntDesign name="plus" size={24} color="white" />
                <Text
                  style={{
                    color: "darkgrey",
                    marginTop: 5,
                  }}
                >
                  My List
                </Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Feather name="thumbs-up" size={24} color="white" />
                <Text
                  style={{
                    color: "darkgrey",
                    marginTop: 5,
                  }}
                >
                  Rate
                </Text>
              </View>
              <View style={{ alignItems: "center", marginHorizontal: 20 }}>
                <Ionicons name="share-social" size={24} color="white" />
                <Text
                  style={{
                    color: "darkgrey",
                    marginTop: 5,
                  }}
                >
                  Share
                </Text>
              </View>
            </View>
            <Picker
              selectedValue={currentSeason.name}
              // style={{ color: "white" }}

              itemStyle={{
                color: "white",
              }}
              onValueChange={(itemValue, itemIndex) => {
                setCurrentSeason(movie.seasons.items[itemIndex]);
              }}
            >
              {seasonNames.map((seasonNames) => (
                <Picker.Item
                  label={seasonNames}
                  value={seasonNames}
                  key={seasonNames}
                />
              ))}
            </Picker>
          </View>
        }
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            onPress={(episode) => {
              setCurrentEpisode(episode);
            }}
          />
        )}
      />
    </View>
  );
};

export default MovieDetailsScreen;
