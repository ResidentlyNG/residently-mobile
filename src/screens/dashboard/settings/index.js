import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bestSpace, billsBg } from '../../../../assets/images';
import {
  Personal,
  MenuChevrolet,
  Persons,
  Card,
  Settings as SettingsSvg,
  Privacy,
  StarRadii,
  Terms,
  Help,
  NotificationSetting,
} from '../../../../assets/svgs';
import {
  Image,
  White,
  ParagraphText,
  RegularText,
  DodgerBlue,
  ScienceBlue,
  Green,
  Coral,
  Sunglow,
  WoodSmoke,
} from '../../../components';
import { hp } from '../../../components/utils';
import { settings as styles } from './styles';

const MenuView = ({ backgroundColor, icon, title, onPress }) => (
  <TouchableOpacity style={styles.menuView} onPress={onPress}>
    <View
      style={[styles.iconView, { backgroundColor: backgroundColor || White }]}>
      {icon}
    </View>
    <ParagraphText title={title} style={styles.menuTitle} />
    <View style={styles.chevrolet}>
      <MenuChevrolet />
    </View>
  </TouchableOpacity>
);

const Settings = () => {
  const { profile } = useSelector((state) => state.profile);

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={WoodSmoke} barStyle="light-content" />
      <ImageBackground
        source={billsBg}
        style={styles.darkHeaderBg}
        imageStyle={styles.imageBg}
      />
      <View style={styles.headerGrid}>
        <View style={styles.profileImageView}>
          <Image source={bestSpace} style={styles.profileImage} />
        </View>
        <View style={styles.usernameView}>
          <ParagraphText title={profile?.fullname} style={styles.fullname} />
          <RegularText
            title={`@${profile?.username}`}
            style={styles.username}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: hp(90) }}>
        <View style={styles.menuContainer}>
          <MenuView
            title="Personal"
            backgroundColor={DodgerBlue}
            icon={<Personal />}
            onPress={() => Actions.personal()}
          />
        </View>
        <View style={styles.menuContainer}>
          <MenuView
            title="My Home"
            backgroundColor={ScienceBlue}
            icon={<Persons />}
            onPress={() => Actions.my_home()}
          />
        </View>

        <View style={styles.menuContainer}>
          <MenuView
            title="Payment"
            backgroundColor={Green}
            icon={<Card />}
            onPress={() => Actions.card()}
          />
          <View style={styles.divider} />
          <MenuView
            title="Settings"
            backgroundColor={Sunglow}
            icon={<SettingsSvg />}
          />
          <View style={styles.divider} />
          <MenuView
            title="Privacy Policy"
            backgroundColor={Coral}
            icon={<Privacy />}
          />
        </View>

        <View style={styles.menuContainer}>
          <MenuView title="Refer and earn" icon={<StarRadii />} />
          <View style={styles.divider} />
          <MenuView title="Notifications" icon={<NotificationSetting />} />
          <View style={styles.divider} />
          <MenuView title="Terms and Conditions" icon={<Terms />} />
          <View style={styles.divider} />
          <MenuView title="Support" icon={<Help />} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Settings;
