import React from 'react';
import { Text, View } from 'react-native';

class DevicesPage extends React.Component {
  static navigationOptions = {

    // tabBarLabel: strings.DevicesTabName,
    // tabBarIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('../resources/labelIcon/devices.png')}
    //     style={[labelStyles.icon, { tintColor: tintColor }]}
    //   />
    // )
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Devices</Text>
      </View>
    );
  }
}

export default DevicesPage;
