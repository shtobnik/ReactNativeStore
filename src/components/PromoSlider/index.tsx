// React & RN
import React, { FC, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

// Styles
import { styles } from './styles';

// Types
import { SlideItem, PromoSliderProps } from './types';

const { width } = Dimensions.get('window');

const PromoSlider: FC<PromoSliderProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const xOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(xOffset / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(item: SlideItem) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        renderItem={({ item }: { item: SlideItem }) => (
          <View style={styles.slide}>
            {item.content && (
              <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.content.title}</Text>
                <Text style={styles.subtitle}>{item.content.subtitle}</Text>
                <Text style={styles.price}>{item.content.price}</Text>
                <Text style={styles.credit}>{item.content.credit}</Text>
              </View>
            )}

            {Array.isArray(item.image) ? (
              <View style={styles.imagesContainer}>
                {item.image.map((image: string) => (
                  <Image source={{ uri: image }} style={styles.phoneImage} resizeMode="contain" />
                ))}
              </View>
            ) : (
              <Image source={{ uri: item.image }} style={styles.contentImage} />
            )}
          </View>
        )}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {data.map((_, i: number) => (
          <View key={i} style={[styles.dot, activeIndex === i && styles.activeDot]} />
        ))}
      </View>
    </View>
  );
};

export default PromoSlider;
