import React, { FC } from 'react';
import { ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Styles
import { styles } from './styles';
import { Text } from 'react-native';

// Components
import HeaderIOS from '@/src/components/Home/HeaderIOS';
import HeaderAndroid from '@/src/components/Home/HeaderAndroid';
import ActionBanner from '@/src/components/Home/ActionBanner';

const HomeScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        style={styles.scrollView}
      >
        {Platform.select({
          ios: <HeaderIOS />,
          android: <HeaderAndroid />,
        })}

        <ActionBanner />

        <Text style={styles.text}>HomeScreen</Text>

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
