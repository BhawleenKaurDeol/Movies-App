// import React from 'react';
// import { BottomNavigation } from 'react-native-paper';
// import MovieList from "../lists/MovieList"

// // const AlbumsRoute = () => <Text>Albums</Text>;
// // const RecentsRoute = () => <Text>Recents</Text>;
// // const NotificationsRoute = () => <Text>Notifications</Text>;

// const MyComponent = ({ navigation }) => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'movies', title: 'Movies', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
//     { key: 'Search_Results', title: 'Search_Results', focusedIcon: 'album' },
//     { key: 'TVShows', title: 'TVShows', focusedIcon: 'history' },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     movies: (props) => <MovieList {...props} navigation={navigation} />,  // Pass navigation as prop
//     Search_Results : AlbumsRoute,
//     recents: RecentsRoute,
//     notifications: NotificationsRoute,
//   });

//   return (
//     <BottomNavigation
//       navigationState={{ index, routes }}
//       onIndexChange={setIndex}
//       renderScene={renderScene}
//     />
//   );
// };

// export default MyComponent;


import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import MovieList from '../lists/MovieList';
import SearchScreen from '../screens/SearchScreen'; // Import your SearchScreen component
import TVShowScreen from '../screens/TVShowScreen'; // Assuming you have a TVShows component

const MyComponent = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'movies', title: 'Movies', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'search', title: 'Search', focusedIcon: 'album' }, // Change to 'search'
    { key: 'tvShows', title: 'TV Shows', focusedIcon: 'history' }, // Ensure correct naming
  ]);

  const renderScene = BottomNavigation.SceneMap({
    movies: (props) => <MovieList {...props} navigation={navigation} />, // Pass navigation to MovieList
    search: (props) => <SearchScreen {...props} navigation={navigation} />, // Pass navigation to SearchScreen
    // tvShows: (props) => <TVShowScreeen {...props} navigation={navigation} />, // Pass navigation to TVShows
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
