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
    height: 200,
    resizeMode: 'contain',
    borderRadius: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 8,
  },

  price: {
    fontSize: 16,
    opacity: 0.6,
  },
});
