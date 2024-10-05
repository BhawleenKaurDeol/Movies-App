// const MovieDetails = ({ route }) => {
//     const { id } = route.params;
//     const [movie, setMovie] = useState(null);
 
//     useEffect(() => {
//       const fetchData = async () => {
//         const data = await fetchMovies(`/movie/${id}`);
//         setMovie(data);
//       };
//       fetchData();
//     }, [id]);
 
//     if (!movie) return <Text>Loading...</Text>;
 
//     return (
//       <>
//         <Text>{movie.title}</Text>
//         <Text>{movie.overview}</Text>
//         {/* Display additional movie details */}
//       </>
//     );
//  };

//  export default MovieDetails;
 
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { fetchMovies } from '../services/api';  // Your movie fetching API function

const MovieDetails = ({ route }) => {
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
    <>
      <Text>{movie.title}</Text>
      <Text>{movie.overview}</Text>
    </>
  );
};

export default MovieDetails;
