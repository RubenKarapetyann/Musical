import { StyleSheet, View } from 'react-native';
import TabsProvider from './navigation/TabsNavigation/TabsProvider';
import { NavigationContainer } from "@react-navigation/native"
import { PaperProvider } from "react-native-paper"

export default function App() {
  return (
    // <View style={styles.container}>
    <PaperProvider>
      <NavigationContainer>
        <TabsProvider/>
      </NavigationContainer>
    </PaperProvider>
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
