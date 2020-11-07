import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from 'expo-location';


// export default function App() {
//   return <Loading />;
// }

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude, longitude } 
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false});
      // Send to API and get weather!
    } catch (error) {
      Alert.alert("Can`t find your location.", "Try again");
    }
  }
  componentDidMount() { 
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
