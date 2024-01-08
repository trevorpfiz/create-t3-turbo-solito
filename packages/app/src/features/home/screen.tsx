"use client";

import { Text, View } from "react-native";
import { MotiLink } from "solito/moti/app";

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl font-bold"> Welcome to Solito.</Text>
      <Text className="my-4 font-bold">Variables!</Text>
      <Text className="duration-[500ms] text-xl font-bold transition active:scale-150">
        Transitions
      </Text>

      <Text className="my-8 animate-bounce font-bold placeholder:text-white">
        Animations
      </Text>

      <MotiLink
        href="/user/fernando"
        animate={({ hovered, pressed }) => {
          "worklet";

          return {
            scale: pressed ? 0.95 : hovered ? 1.1 : 1,
            rotateZ: pressed ? "0deg" : hovered ? "-3deg" : "0deg",
          };
        }}
        transition={{
          type: "timing",
          duration: 150,
        }}
      >
        <Text selectable={false} className="mt-5 text-base font-bold">
          Moti Link
        </Text>
      </MotiLink>
    </View>
  );
};

export default HomeScreen;
