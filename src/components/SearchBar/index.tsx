import { FC } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

import { SearchIcon, MicIcon, QrCodeIcon } from '@/src/components/IconButtons';

import { styles } from './styles';

interface SearchBarProps {
  placeholder?: string;
  showMic?: boolean;
  showQr?: boolean;
  onMicPress?: () => void;
  onQrPress?: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Я шукаю...',
  showMic = true,
  showQr = true,
  onMicPress,
  onQrPress,
}) => {
  return (
    <View style={styles.searchContainer}>
      {/* Ліва іконка пошуку */}
      <SearchIcon focused={false} color="#9CA3AF" size={18} />

      {/* Інпут */}
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#9CA3AF" />

      {/* Праві іконки */}
      <View style={styles.rightIcons}>
        {showMic && (
          <TouchableOpacity activeOpacity={0.7} onPress={onMicPress}>
            <MicIcon focused={false} color="#9CA3AF" size={26} />
          </TouchableOpacity>
        )}

        {showQr && (
          <TouchableOpacity style={styles.qrButton} activeOpacity={0.7} onPress={onQrPress}>
            <QrCodeIcon focused={false} color="#9CA3AF" size={26} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
