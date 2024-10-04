// const SearchScreen = () => {
//     const [query, setQuery] = useState('');
//     const [searchType, setSearchType] = useState('movie');
//     const [results, setResults] = useState([]);
 
//     const handleSearch = async () => {
//       if (!query) {
//         alert('Please enter a search term');
//         return;
//       }
//       const data = await fetchMovies(`/search/${searchType}?query=${query}`);
//       setResults(data.results);
//     };
 
//     return (
//       <>
//         <TextInput
//           placeholder="Search"
//           value={query}
//           onChangeText={(text) => setQuery(text)}
//         />
//         <Picker
//           selectedValue={searchType}
//           onValueChange={(itemValue) => setSearchType(itemValue)}>
//           <Picker.Item label="Movie" value="movie" />
//           <Picker.Item label="TV" value="tv" />
//           <Picker.Item label="Multi" value="multi" />
//         </Picker>
//         <Button title="Search" onPress={handleSearch} />
//         {results.length === 0 ? <Text>Enter a search term...</Text> : (
//           <FlatList
//             data={results}
//             renderItem={({ item }) => <MediaItem media={item} />}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         )}
//       </>
//     );
//  };
 
//  export default SearchScreen;

import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import MediaItem from '../components/MediaItem';  // Assuming MediaItem is in the same directory
import { fetchMovies } from '../services/api';  // Function to fetch movies/TV shows

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('movie');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) {
      alert('Please enter a search term');
      return;
    }
    const data = await fetchMovies(`/search/${searchType}?query=${query}`);
    setResults(data.results);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <Picker
        selectedValue={searchType}
        onValueChange={(itemValue) => setSearchType(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Movie" value="movie" />
        <Picker.Item label="TV" value="tv" />
        <Picker.Item label="Multi" value="multi" />
      </Picker>
      <Button title="Search" onPress={handleSearch} />
      {results.length === 0 ? (
        <Text>Enter a search term...</Text>
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <MediaItem media={item} navigation={navigation} /> // Pass navigation prop
          )}
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default SearchScreen;
