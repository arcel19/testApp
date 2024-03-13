import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handleOnPress = () => console.log("text press");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handleOnPress}>
        Arcelcapital hello test goooo !
      </Text>

      <TouchableNativeFeedback onPress={() => console.log("touch image")}>
        {/* <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300, 
            uri: "https://picsum.photos/200/300",
          }}
        /> */}
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
          <Text> hello</Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
