import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  card: {
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 16,
  },

  price: {
    fontSize: 20,
    marginVertical: 8,
  },
});
