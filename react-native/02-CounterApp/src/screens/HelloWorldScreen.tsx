import { Text, View } from 'react-native';

export const HelloWorldScreen = () => {
  return (
      // eslint-disable-next-line react/react-in-jsx-scope,react-native/no-inline-styles
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue' }}>
        {/* eslint-disable-next-line react/react-in-jsx-scope,react-native/no-inline-styles */}
        <Text style={{ fontSize: 50 }}>Hello World :D!</Text>
      </View>
  );
};
