import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
  DrawerNavigator,
  DrawerItems
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

///////////////////////////////////////////////////////////////////////
//
// Styles
//

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1:{
    fontSize: 26,
  },
  icon1:{
    marginLeft: 16,
  },
  headerHome: {
    backgroundColor: '#CDDC39',
  },
  headerGame: {
    backgroundColor: '#4CAF50',
  },
  headerBook: {
    backgroundColor: '#FFC107',
  },
})

///////////////////////////////////////////////////////////////////////
//
// HOME
//

class HomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title:'Home',
    drawerIcon: <Icon name="home" size={24} color="#4CAF50"/>,
    headerStyle: styles.headerHome,
    headerLeft: (
      <Icon name="bars" size={24}
        style={styles.icon1}
        onPress={()=>{navigation.navigate('DrawerOpen')}} />
    ),
  });

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>Home</Text>
        <Button title="Next" onPress={()=>navigate('HomeNext')}/>
      </View>
    );
  }
}

///////////////////////////////////////////////////////////////////////
//
// HOME > Next
//

class HomeNextScreen extends React.Component {
  static navigationOptions = {
    title:'Home Next',
    headerStyle: styles.headerHome,
  };

  render() {
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>Next</Text>
      </View>
    );
  }
}


///////////////////////////////////////////////////////////////////////
//
// GAME
//

class GameHomeScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title:'Games',
    drawerIcon: <Icon name="gamepad" size={24} color="#FF5722"/>,
    headerStyle: styles.headerGame,
    headerLeft: (
      <Icon name="bars" size={24}
        style={styles.icon1}
        onPress={()=>{navigation.navigate('DrawerOpen')}} />
    ),
  });

  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>Game Home</Text>
        <Button title="Start ABC" onPress={()=>navigate('GameABC')}/>
      </View>
    );
  }
}

///////////////////////////////////////////////////////////////////////
//
// GAME > GAME ABC
//

class GameABCScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    title:'Game ABC',
    headerStyle: styles.headerGame,
  });

  render(){
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>Game ABC</Text>
      </View>
    );
  }
}


///////////////////////////////////////////////////////////////////////
//
// BOOKS
//

class BookHomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title:'Books',
    drawerLabel: 'Books - Drawer Label',
    drawerIcon: <Icon name="book" size={24} color="#795548"/>,
    headerStyle: styles.headerBook,
    headerLeft: (
      <Icon name="bars" size={24}
        style={styles.icon1}
        onPress={()=>{navigation.navigate('DrawerOpen')}} />
    ),
  });

  render(){
    return (
      <View style={styles.view1}>
        <Text style={styles.text1}>Books</Text>
      </View>
    );
  }
}

///////////////////////////////////////////////////////////////////////
//
// Define Stack Structure
//

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen, },
  HomeNext: { screen: HomeNextScreen, },
});

const GameStack = StackNavigator({
  GameHome: { screen: GameHomeScreen, },
  GameABC: { screen: GameABCScreen, }
});

const BookStack = StackNavigator({
  BookHome: { screen: BookHomeScreen, }
});

///////////////////////////////////////////////////////////////////////
//
// Drawer
//

const MyApp = DrawerNavigator({
    HomeStack: { screen: HomeStack, },
    GameStack: { screen: GameStack, },
    BookStack: { screen: BookStack, }
  },
  {
    drawerWidth: 300,
    contentComponent: props => (
      <ScrollView>
        <View style={{padding:16,}}>
          <Text style={{fontSize:24}}>DRAWER TEST</Text>
        </View>
        <DrawerItems {...props} />
      </ScrollView>
    ),
  }
);

///////////////////////////////////////////////////////////////////////
//
// export
//

export default MyApp;
