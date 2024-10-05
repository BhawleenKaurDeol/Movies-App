// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { fetchMovies } from '../services/api';  // Your movie fetching API function

// const Details = ({ route }) => {
//   const { id } = route.params;
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchMovies(`/movie/${id}`);
//       setMovie(data);
//     };
//     fetchData();
//   }, [id]);

//   if (!movie) return <Text>Loading...</Text>;

//   return (
//     <View style={styles.container}>
//       {/* Movie Poster */}
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
//         style={styles.poster}
//       />
      
//       {/* Movie Title */}
//       <Text style={styles.title}>{movie.title}</Text>
      
//       {/* Movie Overview */}
//       <Text style={styles.overview}>{movie.overview}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center', // Vertically center the content
//     alignItems: 'center',     // Horizontally center the content
//     padding: 20,
//   },
//   poster: {
//     width: 300,
//     height: 450,
//     marginBottom: 20,  // Add spacing between the poster and the text
//     borderRadius: 10,  // Rounded corners for the image
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',  // Center the title text
//     marginBottom: 10,     // Spacing below the title
//   },
//   overview: {
//     fontSize: 16,
//     textAlign: 'center',  // Center the overview text
//     color: '#666',
//   },
// });

// export default Details;

import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { fetchMovies } from '../services/api';  // Your movie fetching API function

const Details = ({ route }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchMovies(`/movie/${id}`);
      setMovie(data);
    };
    fetchData();
  }, [id]);

  if (!movie) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      
            {/* Movie Title */}
            <Text style={styles.title}>{movie.title}</Text>

      {/* Movie Poster */}
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
        style={styles.poster}
      />
      

      
      {/* Movie Overview */}
      <Text style={styles.overview}>{movie.overview}</Text>

      {/* Popularity and Release Date on the same line */}
      <Text style={styles.info}>
        Popularity: {movie.popularity} | Release Date: {movie.release_date}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Vertically center the content
    alignItems: 'center',     // Horizontally center the content
    padding: 20,
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 30,  // Add spacing between the poster and the text
    borderRadius: 10,  // Rounded corners for the image
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',  // Center the title text
    marginBottom: 50,     // Spacing below the title
  },
  overview: {
    fontSize: 16,
    textAlign: 'center',  // Center the overview text
    color: '#666',
    marginBottom: 10,     // Spacing below the overview
  },
  popularity: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
    marginBottom: 10,     // Spacing below the popularity
  },
  releaseDate: {
    fontSize: 16,
    textAlign: 'center',
    color: '#444',
  },
});

export default Details;
