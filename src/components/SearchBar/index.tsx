// React & RN
import React, { FC, useState } from 'react';
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from 'react-native';

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

  // universal callbacks
  onChangeText?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = 'Я шукаю...',
  showMic = true,
  showQr = true,
  onMicPress,
  onQrPress,
  onChangeText,
  onSubmit,
}) => {
  const [localValue, setLocalValue] = useState<string>('');

  const handleChange = (text: string): void => {
    setLocalValue(text);
    if (onChangeText) onChangeText(text);
  };

  const handleSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>): void => {
    if (onSubmit) onSubmit(e.nativeEvent.text);
  };

  return (
    <View style={styles.searchContainer}>
      <SearchIcon focused={false} color="#9CA3AF" size={18} />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={localValue}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmit}
        returnKeyType="search"
      />

      <View style={styles.rightIcons}>
        {showMic && <MicIcon focused={false} color="#9CA3AF" size={26} />}
        {showQr && <QrCodeIcon focused={false} color="#9CA3AF" size={26} />}
      </View>
    </View>
  );
};

export default SearchBar;
