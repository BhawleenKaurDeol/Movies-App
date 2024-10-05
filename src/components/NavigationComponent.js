import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import MovieList from '../lists/MovieList';
import SearchScreen from '../screens/SearchScreen'; // Import your SearchScreen component
import TVShowScreen from '../screens/TVShowScreen'; // Assuming you have a TVShows component


const MyComponent = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'movies', title: 'Movies', focusedIcon: 'film', unfocusedIcon: 'heart-outline' },
    { key: 'search', title: 'Search', focusedIcon: 'magnify' }, // Change to 'search'
    { key: 'tvShows', title: 'TV Shows', focusedIcon: 'television-box' }, // Ensure correct naming
  ]);

  const renderScene = BottomNavigation.SceneMap({
    movies: (props) => <MovieList {...props} navigation={navigation} />, // Pass navigation to MovieList
    search: (props) => <SearchScreen {...props} navigation={navigation} />, // Pass navigation to SearchScreen
    tvShows: (props) => <TVShowScreen {...props} navigation={navigation} />, // Pass navigation to TVShows
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#2c3e50', textColor:'#fff' }}
      activeColor="#fff"  
    inactiveColor="#ccc"
     
    />
  );
};

export default MyComponent;
