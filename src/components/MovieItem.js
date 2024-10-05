import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MovieDetails from '../containers/MovieDetails';

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
        {/* Movie Popularity */}
      <Text style={styles.popularity}>Popularity: {movie.popularity}</Text>
      
      {/* Movie Release Date */}
      <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
        
        {/* More Details Button */}
        <Button 
          title="More Details"
          onPress={() => navigation.navigate('Details', { id: movie.id })}
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
  popularity: {
    fontSize: 16,
   
    color: '#444',
   
  },
  releaseDate: {
    fontSize: 16,
   
    color: '#444',
  },
});

export default MovieItem;
