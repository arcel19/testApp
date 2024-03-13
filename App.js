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
  Button,
  Alert,
  Platform
} from "react-native";

export default function App() {
  const handleOnPress = () => console.log("text press");

  return (
    <SafeAreaView style={styles.container}>
     
      {/* <TouchableNativeFeedback onPress={() => console.log("touch image")}>
        <Image
          blurRadius={10}
          fadeDuration={1000} 
          source={{
            width: 200,
            height: 300, 
            uri: "https://picsum.photos/200/300",
          }}
        />
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
          <Text> hello</Text>
        </View>
      </TouchableNativeFeedback> */}

      <Button
        color="orange" 
        title="press Me"
        onPress={() =>
          Alert.alert("my title", "my message", [
            { text: "yes", onPress: () => console.log("yes press") },
            { text: "no", onPress: () => console.log("no press") },
          ]) 
          // Alert.prompt("my tilte", "submit", (text) => console.log("insert text"))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS ==='android' ? 20 : 0 ,
    
  },
});
