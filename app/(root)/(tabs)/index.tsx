import Search from "@/components/Search";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <View className="bg-white h-full">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning!
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Ishan
              </Text>
            </View>
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}
