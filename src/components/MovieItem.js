import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieItem = ({ movie }) => {
  const navigation = useNavigation();  // For navigating to the details page

  return (
    <View style={styles.container}>
      {/* Movie Poster */}
      <Image 
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} 
        style={styles.poster} 
      />
      
      {/* Movie Title and Info */}
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.rating}>Rating: {movie.vote_average}</Text>
        
        {/* More Details Button */}
        <Button 
          title="More Details"
          onPress={() => navigation.navigate('MovieDetails', { id: movie.id })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    marginVertical: 5,
  },
});

export default MovieItem;
