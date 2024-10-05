// import React from 'react';
// import { View, Text, Image, Button, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const MediaItem = ({ media }) => {
//   const navigation = useNavigation();  // For navigating to the details page

//   return (
//     <View style={styles.container}>
//       {/* Media Poster */}
//       <Image 
//         source={{ uri: `https://image.tmdb.org/t/p/w500/${media.poster_path}` }} 
//         style={styles.poster} 
//       />
      
//       {/* Media Title and Info */}
//       <View style={styles.details}>
//         <Text style={styles.title}>{media.title || media.name}</Text>
//         <Text style={styles.rating}>Rating: {media.vote_average}</Text>
        
//         {/* More Details Button */}
//         <Button 
//           title="More Details"
//           onPress={() => navigation.navigate('MediaDetails', { id: media.id, type: media.media_type })}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     alignItems: 'center',
//   },
//   poster: {
//     width: 100,
//     height: 150,
//     borderRadius: 8,
//   },
//   details: {
//     flex: 1,
//     marginLeft: 15,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   rating: {
//     marginVertical: 5,
//   },
// });

// export default MediaItem;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const MediaItem = ({ media, navigation }) => {
  const handlePress = () => {
    navigation.navigate('Details', { id: media.id }); // Navigate to details page
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      {media.poster_path ? (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${media.poster_path}` }}
          style={styles.image}
        />
      ) : (
        <Text>No Image Available</Text>
      )}
      <Text style={styles.title}>{media.title || media.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MediaItem;
