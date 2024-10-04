// import { Picker } from '@react-native-picker/picker';

// const MovieList = ({navigation}) => {
//    const [selectedCategory, setSelectedCategory] = useState('popular');
//    const [movies, setMovies] = useState([]);

//    useEffect(() => {
//      const fetchData = async () => {
//        const data = await fetchMovies(`/movie/${selectedCategory}`);
//        setMovies(data.results);
//      };
//      fetchData();
//    }, [selectedCategory]);

//    return (
//      <>
//        <Picker
//          selectedValue={selectedCategory}
//          onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
//          <Picker.Item label="Now Playing" value="now_playing" />
//          <Picker.Item label="Popular" value="popular" />
//          <Picker.Item label="Top Rated" value="top_rated" />
//          <Picker.Item label="Upcoming" value="upcoming" />
//        </Picker>
//        <FlatList
//          data={movies}
//          renderItem={({ item }) => <MovieItem movie={item} />}
//          keyExtractor={(item) => item.id.toString()}
//        />
//      </>
//    );
// };

// export default MovieList;

import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MovieItem from '../components/MovieItem';  // Assuming MovieItem is already created
import { fetchMovies } from '../services/api';  // Function for fetching movies from TMDB API

const MovieList = ({ navigation }) => {
  // States for the selected category and the fetched movies list
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [movies, setMovies] = useState([]);

  // Fetch movies whenever the selected category changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(`/movie/${selectedCategory}`);
      setMovies(data.results);
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      {/* Dropdown Picker for selecting movie categories */}
      <Picker
        selectedValue={selectedCategory}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
        <Picker.Item label="Now Playing" value="now_playing" />
        <Picker.Item label="Popular" value="popular" />
        <Picker.Item label="Top Rated" value="top_rated" />
        <Picker.Item label="Upcoming" value="upcoming" />
      </Picker>
      
      {/* Movie List */}
      {movies.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieItem movie={item} navigation={navigation} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default MovieList;

