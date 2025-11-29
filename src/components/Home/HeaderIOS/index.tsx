import { FC, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import SearchBar from '@/src/components/SearchBar';
import { RootStackParamList } from '@/src/navigation/types';
import { styles } from './styles';

const HeaderIOS: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (value: string): void => {
    navigation.navigate('Search', { initialQuery: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>STORE</Text>

      <SearchBar onChangeText={setQuery} onSubmit={handleSubmit} />
    </View>
  );
};

export default HeaderIOS;
