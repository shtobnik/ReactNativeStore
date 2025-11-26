import { FC } from 'react';
import { View, Text } from 'react-native';

// Components
import SearchBar from '@/src/components/SearchBar';

// Styles
import { styles } from './styles';

const HeaderIOS: FC = () => {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Text style={styles.logo}>STORE</Text>

      {/* SEARCH */}
      <SearchBar />
    </View>
  );
};

export default HeaderIOS;
