import React, { FC } from 'react';
import { ScrollView, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Styles
import { styles } from './styles';
import { Text } from 'react-native';

// Components
import HeaderIOS from '@/src/components/Home/HeaderIOS';
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
        })}

        <ActionBanner />

        <View style={styles.content}>
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
