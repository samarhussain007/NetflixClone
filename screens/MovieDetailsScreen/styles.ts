import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  match: {
    color: "#59d467",
    fontWeight: "bold",
    marginRight: 5,
  },
  year: {
    color: "#757575",
    marginRight: 5,
  },
  ageContainer: {
    backgroundColor: "#e6e229",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    marginRight: 5,
    paddingHorizontal: 3,
  },
  age: {
    color: "black",
    fontWeight: "bold",
  },
  playButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  playButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  downloadButton: {
    backgroundColor: "#424242",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 3,
    marginVertical: 5,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
