import React from 'react';
import { ScrollView, StatusBar, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { user } from '../../../../assets/images';
import {
  CloseProfile,
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

const Settings = () => (
  <View style={styles.background}>
    <StatusBar backgroundColor={White} barStyle="dark-content" />
    <View style={styles.headerGrid}>
      <Image source={user} style={styles.profileImage} />
      <View style={styles.usernameView}>
        <ParagraphText title="Bisola Jabari" style={styles.fullname} />
        <RegularText title="@Bisijabari" style={styles.username} />
      </View>
      <View style={styles.bell}>
        <CloseProfile />
      </View>
    </View>

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: hp(30) }}>
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
        <MenuView title="Payment" backgroundColor={Green} icon={<Card />} />
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

export default Settings;
