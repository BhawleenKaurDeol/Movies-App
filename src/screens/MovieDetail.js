import React from 'react';
import { Button, Text, View } from 'react-native';

const MovieRoute = ({ navigation }) => {
  const navigateToDetails = () => {
    navigation.navigate('MovieDetails', { id: movie.id });
  };

  return (
    <View>
      <Text>Favorites</Text>
      <Button title="Go to Movie Detail" onPress={navigateToDetails} />
    </View>
  );
};

export default MovieRoute;
