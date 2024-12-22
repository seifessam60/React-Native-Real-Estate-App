import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className={"bg-white h-full"}>
      <ScrollView contentContainerClassName={"h-full"}>
        <Image
          source={images.onboarding}
          className={"w-full h-4/6"}
          resizeMode={"contain"}
        />
        <View className={"px-10"}>
          <Text
            className={
              "text-base font-rubik text-center uppercase text-black-200"
            }
          >
            Welcome To ReState
          </Text>
          <Text
            className={
              "text-3xl font-rubik-bold text-black-300 text-center mt-2"
            }
          >
            Let's Get You Closer To {"\n"}{" "}
            <Text className={"text-primary-300"}>Your Ideal Home</Text>
          </Text>
          <Text
            className={"text-lg text-center font-rubik mt-12 text-black-200"}
          >
            Login to ReState With Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className={
              "bg-white w-full shadow-md shadow-zinc-300 py-4 mt-5 rounded-full"
            }
          >
            <View className={"flex flex-row items-center justify-center"}>
              <Image
                source={icons.google}
                className={"w-5 h-5"}
                resizeMode={"contain"}
              />
              <Text className={"ml-2 text-lg font-rubik-medium text-black-300"}>
                Continue With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
