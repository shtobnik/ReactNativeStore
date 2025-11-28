// React & RN
import React, { FC } from 'react';
import { View, TextInput } from 'react-native';

// Components
import { SearchIcon, MicIcon, QrCodeIcon } from '@/src/components/IconButtons';

// Styles
import { styles } from './styles';

// Types
interface SearchBarProps {
  placeholder?: string;
  showMic?: boolean;
  showQr?: boolean;
  onMicPress?: () => void;
  onQrPress?: () => void;
  onChangeText?: (value: string) => void; // <-- зробили опційним
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Я шукаю...',
  showMic = true,
  showQr = true,
  onMicPress,
  onQrPress,
  onChangeText,
}) => {
  const handleChangeText = (text: string): void => {
    if (onChangeText) {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.searchContainer}>
      {/* Left icon */}
      <SearchIcon focused={false} color="#9CA3AF" size={18} />

      {/* Input */}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        onChangeText={handleChangeText} // <-- тут викликаємо наш хендлер
      />

      {/* Right icons */}
      <View style={styles.rightIcons}>
        {showMic && (
          <View onTouchEnd={onMicPress}>
            <MicIcon focused={false} color="#9CA3AF" size={26} />
          </View>
        )}

        {showQr && (
          <View style={styles.qrButton} onTouchEnd={onQrPress}>
            <QrCodeIcon focused={false} color="#9CA3AF" size={26} />
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchBar;
