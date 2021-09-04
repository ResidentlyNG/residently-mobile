import React from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { secondScreenBg, thumb } from '../../../../../assets/images';
import {
  Button,
  Green,
  Header,
  HeaderText,
  Image,
  RegularText,
  White,
} from '../../../../components';
import { success as styles } from './styles';

const Success = (props) => {
  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={secondScreenBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <Header
          title="Become a host"
          titleStyle={styles.header}
          iconFill={White}
        />

        <View style={styles.mainCard}>
          <View style={styles.thumbView}>
            <Image source={thumb} style={styles.thumb} />
          </View>
          <HeaderText title="Great Job!" style={styles.leadText} />
          <Text style={styles.homeText}>
            {`You just ${props.home ? 'created' : 'joined'} `}
            <Text style={styles.home}>{`${props.home || 'Block 5A'}`}</Text>
          </Text>
          <RegularText
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam viverra dignissim orci. "
            style={styles.subText}
          />
          <Button
            title="See Bills"
            style={styles.button}
            onPress={() => Actions.dashboard({ type: 'reset', bills: true })}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default Success;
