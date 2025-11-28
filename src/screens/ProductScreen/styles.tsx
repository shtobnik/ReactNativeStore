import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 16,
  },

  scrollView: {
    paddingBottom: 200,
  },

  card: {
    marginBottom: 20,
  },

  imageContainer: {
    width: '95%',
    height: 300,
    justifyContent: 'center',
    boxSizing: 'border-box',
    marginHorizontal: 'auto',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
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
    color: '#fff',
    borderBottomWidth: 0.2,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    marginVertical: 8,
  },
});
