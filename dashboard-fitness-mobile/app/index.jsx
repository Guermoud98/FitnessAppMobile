import { View, Text, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light" />
            <Image className="h-full w-full absolute" source={require('../assets/images/bg_Img.jpg')} />
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className="flex justify-end pb-12 space-y-8"
            >
                <View className="flex items-center">
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        For you
                    </Text>
                </View>
            </LinearGradient>
        </View>
    );
}
