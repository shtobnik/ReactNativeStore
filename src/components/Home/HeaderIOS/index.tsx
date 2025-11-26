import { FC } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { SearchIcon, MicIcon, QrCodeIcon } from '@/src/components/IconButtons';
import SearchBar from '@/src/components/SearchBar';

// Styles
import { styles } from './styles';

const HeaderIOS: FC = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        {/* LOGO */}
        <Text style={styles.logo}>STORE</Text>

        {/* SEARCH */}
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

export default HeaderIOS;
