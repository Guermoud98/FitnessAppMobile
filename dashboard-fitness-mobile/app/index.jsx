import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();
    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <StatusBar style="light" />
            <Image style={{ height: '100%', width: '100%', position: 'absolute' }} source={require('../assets/images/bg_Img.jpg')} />
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{ width: wp(100), height: hp(70), justifyContent: 'flex-end', paddingBottom: 12 }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} style={{ alignItems: 'center', marginBottom: 16 }}>
                    <Text style={{ fontSize: hp(5), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                        Best <Text style={{ color: '#f43f5e' }}>Workouts</Text>
                    </Text>
                    <Text style={{ fontSize: hp(5), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                        For you
                    </Text>
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(200).springify()} style={{ alignItems: 'center' }}>
                    <TouchableOpacity 
                     onPress={()=> router.push('home')} // pour passer à la page home
                    style={{ height: hp(7), width: wp(80), backgroundColor: '#f43f5e', alignItems: 'center', justifyContent: 'center', borderRadius: 9999, borderWidth: 2, borderColor: '#d4d4d8' }}>
                        <Text style={{ fontSize: hp(3), color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>
                            Get started 
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
}
