import { StyleSheet, View } from 'react-native';
import TabsProvider from './navigation/TabsNavigation/TabsProvider';
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <TabsProvider/>
      </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
