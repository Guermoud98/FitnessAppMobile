import { View, Text, Image } from 'react-native';
import React from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { widthPercentageToDP as wd} from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { sliderImages } from '../constant';

export default function ImageSlider() {
    return (
        <Carousel
            data={sliderImages}
            loop={true}
            autoplay={true}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={wd(100)}
            firstItem={1}
            autoplayInterval={4000}
            itemWidth={wd(100) - 70}
            slideStyle={{ display: 'flex', alignItems: 'center' }}

        />

    )
}

const ItemCard = ({ item, index }, parallaxProps) => {
    return (
        <View style={{ width: wd(100) - 70, height: hp(25) }}>
            <ParallaxImage
                source={item}
                containerStyle={{borderRadius: 20, flex: 1}}
                style={{resizeMode: 'contain'}}
                parallaxFactor={0.4}
                {...parallaxProps}

            />

        </View>
    )
}