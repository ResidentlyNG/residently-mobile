import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Header,
  HeaderText,
  Image,
  ParagraphText,
  White,
  WoodSmoke,
} from '../../../components';
import { billsBg, profile } from '../../../../assets/images';
import { personal as styles } from './styles';

const Personal = () => {
  const { profile: user } = useSelector((state) => state.profile);
  const phone = user?.phone.slice(1);

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={WoodSmoke} barStyle="light-content" />
      <ImageBackground
        source={billsBg}
        style={styles.darkHeaderBg}
        imageStyle={styles.imageBg}
      />

      <Header
        title="Personal Info"
        iconFill={White}
        titleStyle={styles.headerTitle}
      />

      <View style={styles.mainView}>
        <View style={styles.profileArc}>
          <View style={styles.profileView}>
            <Image source={profile} style={styles.profile} />
          </View>
        </View>
        <View style={styles.titleBox}>
          <HeaderText title="Full Name" style={styles.title} />
        </View>
        <ParagraphText title={user?.fullname} style={styles.detail} />
        <View style={styles.titleBox}>
          <HeaderText title="Username" style={styles.title} />
        </View>
        <ParagraphText title={`@${user?.username}`} style={styles.detail} />
        <View style={styles.titleBox}>
          <HeaderText title="Email address" style={styles.title} />
        </View>
        <ParagraphText title={user?.email} style={styles.detail} />
        <View style={styles.titleBox}>
          <HeaderText title="Phone number" style={styles.title} />
        </View>
        <ParagraphText title={`(+234) ${phone}`} style={styles.detail} />
      </View>
    </View>
  );
};

export default Personal;
