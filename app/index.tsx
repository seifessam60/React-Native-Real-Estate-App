import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className={"text-3xl text-red-500 font-rubik-bold"}>
        Weclome Seif Essam
      </Text>
      <Link href={"/sign-in"}>Sign In Now</Link>
    </View>
  );
}
