import AppLoading from "expo-app-loading";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import { Themes } from "./assets/Themes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require("./assets/Fonts/Sydney-Serial-Regular.ttf"),
    "Sydney-Bold": require("./assets/Fonts/Sydney-Serial-Bold.ttf"),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.dark.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Image
          style={styles.icons}
          source={require("./assets/Icons/menu_dark.png")}
        />
        <Text
          style={(styles.icons, { fontFamily: "Sydney-Bold", fontSize: 32 })}
        >
          ensom
        </Text>
        <Image
          style={styles.icons}
          source={require("./assets/Icons/moon.png")}
        />
      </View>

      <View style={styles.card}>
        <ImageBackground
          style={styles.profile}
          imageStyle={{ borderRadius: 10 }}
          source={require("./assets/Profiles/mtl.jpg")}
        >
          <Text
            style={{
              position: "absolute",
              top: "4%",
              left: "4%",
              fontFamily: "Sydney",
              fontSize: 32,
              color: "black",
            }}
          >
            MTL
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: "4%",
              left: "4%",
              fontFamily: "Sydney",
              fontSize: 18,
              color: "black",
            }}
          >
            2 miles away
          </Text>
        </ImageBackground>
        <View style={styles.audio}>
          <Text
            style={{
              fontFamily: "Sydney",
              fontSize: 25,
              marginTop: "8%",
              marginLeft: "8%",
              marginBottom: "3%",
            }}
          >
            My hottest take
          </Text>
          <View style={styles.play}>
            <Image
              style={styles.playIcon}
              source={require("./assets/Icons/player_dark.png")}
            />
            <Image
              style={styles.waveIcon}
              source={require("./assets/Icons/audio_waveform_dark.png")}
            />
          </View>
        </View>
      </View>

      <View style={styles.actionBar}>
        <View style={styles.bottomIconText}>
          <Image
            style={styles.icons}
            source={require("./assets/Icons/discover_dark.png")}
          />
          <Text style={styles.actionText}>Discover</Text>
        </View>
        <View style={styles.bottomIconText}>
          <Image
            style={styles.icons}
            source={require("./assets/Icons/heart_dark.png")}
          />
          <Text style={styles.actionText}>Matches</Text>
        </View>
        <View style={styles.bottomIconText}>
          <Image
            style={styles.icons}
            source={require("./assets/Icons/messages_dark.png")}
          />
          <Text style={styles.actionText}>DMs</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: Themes.dark.bg,
    alignItems: "center",
  },

  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 0,
    width: "100%",
    padding: "5%",
  },

  card: {
    flex: 1,
    display: "flex",
    maxWidth: 585,
    backgroundColor: Themes.dark.bg,
    alignItems: "center",
    padding: "5%",
  },

  profile: {
    width: "100%",
    height: undefined,
    resizeMode: "contain",
    top: 0,
    aspectRatio: 1 / 1.1,
    marginBottom: "5%",
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    shadowOffset: Themes.dark.shadows.shadowOffset,
  },

  audio: {
    backgroundColor: Themes.dark.bgSecondary,
    borderRadius: 30,
    width: "100%",
    top: 0,
    paddingBottom: 24,
    shadowColor: Themes.dark.shadows.shadowColor,
    shadowOpacity: Themes.dark.shadows.shadowOpacity,
    shadowRadius: Themes.dark.shadows.shadowRadius,
    shadowOffset: Themes.dark.shadows.shadowOffset,
  },

  icons: {
    alignContent: "center",
    ...Platform.select({
      ios: {
        height: 41,
        width: 41,
      },
      android: {
        height: 54,
        width: 54,
      },
    }),
  },

  play: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: "5%",
    justifyContent: "center",
  },

  playIcon: {
    flex: 1,
    marginRight: "2%",
    alignContent: "center",
    resizeMode: "contain",
    ...Platform.select({
      ios: {
        height: 56,
        width: 56,
      },
      android: {
        height: 70,
        width: 70,
      },
    }),
  },

  waveIcon: {
    flex: 4,
    resizeMode: "contain",
    alignContent: "center",
    ...Platform.select({
      ios: {
        height: 56,
      },
      android: {
        height: 70,
      },
    }),
  },

  actionBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: "2%",
    backgroundColor: Themes.dark.navigation,
    position: "absolute",
    bottom: 0,
  },

  actionText: {
    fontFamily: "Sydney",
    fontSize: 18,
    color: Themes.dark.textSecondary,
  },

  bottomIconText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
