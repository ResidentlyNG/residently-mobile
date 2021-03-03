import React, { useState } from 'react';
import {
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { host, secondScreenBg } from '../../../assets/images';
import { Check, MainIcon, SearchIcon } from '../../../assets/svgs';
import { Green, ParagraphText, RegularText } from '../../components';
import { hp } from '../../components/utils';
import { MainView, Image } from '../../components/View';
import { inviteStyles as styles } from './styles';

const ContactCard = ({ ticked }) => (
  <TouchableOpacity
    style={styles.roleCard}
    onPress={() => Actions.invite_success()}>
    <View style={styles.cardRow}>
      <View style={styles.sectionRow}>
        <Image source={host} style={styles.host} />
        <View style={styles.sectionProfile}>
          <ParagraphText title="John Adewale" style={styles.title} />
          <RegularText
            title="Looking for roommates to get an apartment"
            style={styles.detail}
          />
        </View>
      </View>
      <View style={ticked ? styles.tickBox : styles.box}>
        {ticked ? <Check /> : null}
      </View>
    </View>
  </TouchableOpacity>
);

const Invite = () => {
  const [username, setUsername] = useState('');

  return (
    <>
      <StatusBar backgroundColor={Green} barStyle="light-content" />
      <ImageBackground
        style={styles.background}
        source={secondScreenBg}
        imageStyle={styles.imageBg}
        resizeMode="stretch">
        <View style={styles.topRow}>
          <MainIcon />
          <ParagraphText title="Invite your roommates" style={styles.header} />
        </View>
        <MainView style={styles.mainView}>
          <KeyboardAwareScrollView>
            <View>
              <ParagraphText
                title="Enter Residently Username"
                style={styles.residentTitle}
              />
              <View style={styles.searchView}>
                <SearchIcon />
                <TextInput
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                  placeholder="Find User"
                  style={styles.searchInput}
                />
              </View>
            </View>
            <ParagraphText
              title="Contacts on Residently"
              style={styles.contactsTitle}
            />
            <ScrollView
              style={{ height: hp(400) }}
              contentContainerStyle={{ paddingBottom: hp(50) }}
              showsVerticalScrollIndicator={false}>
              <ContactCard ticked />
              <ContactCard ticked />
              <ContactCard ticked />
              <ContactCard />
              <ContactCard />
              <ContactCard />
            </ScrollView>
          </KeyboardAwareScrollView>
        </MainView>
      </ImageBackground>
    </>
  );
};

export default Invite;
