import React, { FC } from 'react';
import { ScrollView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Styles
import { styles } from './styles';
import { Text } from 'react-native';

// Components
import HeaderIOS from '@/src/components/Home/HeaderIOS';
import ActionBanner from '@/src/components/Home/ActionBanner';
import PromoSlider from '@/src/components/PromoSlider';
import PromoBlock from '@/src/components/PromoBlock';
import SearchBar from '@/src/components/SearchBar';

const HomeScreen: FC = () => {
  const slides = [
    {
      id: '1',
      image: 'https://content1.rozetka.com.ua/banner_main/images_mobile_ua/original/624786376.jpg',
      content: null,
    },
    {
      id: '2',
      image: 'https://content1.rozetka.com.ua/banner_main/images_mobile_ua/original/626442356.png',
      content: null,
    },
    {
      id: '3',
      image: 'https://content2.rozetka.com.ua/banner_main/images_mobile_ua/original/626736558.png',
      content: null,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        style={styles.scrollView}
      >
        {Platform.select({
          ios: <HeaderIOS />,
        })}

        <ActionBanner />

        <PromoSlider data={slides} />
        <View style={styles.content}>
          <View style={styles.promoContainer}>
            <PromoBlock
              title="Картка STORE"
              subtitle="Покупки з перевагами"
              image="card"
              color="#312C19"
            />

            <PromoBlock
              title="Підписка Smart"
              subtitle="Безкоштовна доставка"
              image="subscribe"
              color="#212E22"
            />
          </View>

          {Platform.select({
            android: <SearchBar />,
          })}
          <Text style={styles.text}>HomeScreen !!!</Text>
        </View>

        {/* інші блоки:
        <BigSlider />
        <PromoCards />
        <QuickActions />
        <ProductSection title="..." />
        */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
