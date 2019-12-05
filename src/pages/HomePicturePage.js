import React from 'react';
import { Text, Image, View } from 'react-native';
import homeIcon from '../resources/labelIcon/photo.png'

class HomePicturePage extends React.Component {
  // //Tab导航的样式
  // static navigationOptions = ({ navigation, screenProps }) => {
  //   return {
  //     tabBarLabel: strings.HomePictureTabName,
  //     tabBarIcon: ({ tintColor }) => (
  //       <View style={styles.contentStyle}>
  //         <Image
  //           source={require('../resources/labelIcon/photo.png')}
  //           style={[labelStyles.icon, { tintColor: tintColor }]}
  //         />
  //       </View>)
  //   }
  // }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Image
          source={homeIcon}
        />
      </View>
    );
  }
}

export default HomePicturePage;
