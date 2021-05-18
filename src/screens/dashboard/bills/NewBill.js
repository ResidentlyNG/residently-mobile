import React, { Component } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { host, roomie } from '../../../../assets/images';
import {
  BackIcon,
  Check,
  MiniForwardChevrolet,
  SearchIcon,
} from '../../../../assets/svgs';
import {
  AthensGray,
  Green,
  HeaderText,
  Image,
  ParagraphText,
  RegularText,
  White,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import { hp, wp } from '../../../components/utils';
import { newBill as styles } from './styles';

const ContactCard = ({ ticked }) => (
  <TouchableOpacity
    style={styles.roleContactCard}
    onPress={() => Actions.invite_success()}>
    <View style={styles.contactCardRow}>
      <View style={styles.sectionRow}>
        <Image source={host} style={styles.contactHost} />
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

const AddUser = ({ username, setUsername }) => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <HeaderText title="Add Residently Users" style={styles.userHeaderText} />
    <ParagraphText
      title="Enter a Residently username"
      style={styles.userSubText}
    />
    <KeyboardAwareScrollView>
      <View>
        {/* <ParagraphText
          title="Enter Residently Username"
          style={styles.residentTitle}
        /> */}
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
  </View>
);

export default class NewBill extends Component {
  state = {
    modal: false,
    username: '',
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  openModal = () => this.handleChange('modal', true);

  closeModal = () => this.handleChange('modal', false);

  setUsername = (value) => this.handleChange('username', value);

  render() {
    const { modal, username } = this.state;

    return (
      <View style={styles.background}>
        <TouchableOpacity
          style={styles.backArrow}
          onPress={() => Actions.pop()}>
          <BackIcon />
        </TouchableOpacity>
        <HeaderText title="Create new bill" style={styles.headerText} />
        <RegularText
          title="Create a bill through one of the following options"
          style={styles.subText}
        />

        <TouchableOpacity
          style={styles.roleCard}
          onPress={() => Actions.custom_bill()}>
          <View style={styles.cardRow}>
            <Image source={host} style={styles.host} />
            <View>
              <ParagraphText title="Personal Bill" style={styles.title} />
              <RegularText
                title="Someone who needs a roommate"
                style={styles.detail}
              />
            </View>
            <View style={styles.arrowBox}>
              <MiniForwardChevrolet />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.roleCard,
            { borderColor: AthensGray, marginTop: hp(20) },
          ]}
          onPress={() => this.openModal()}>
          <View style={styles.cardRow}>
            <Image source={roomie} style={styles.host} />
            <View>
              <ParagraphText title="Group Bill" style={styles.title} />
              <RegularText
                title="Looking for roommates to get an apartment"
                style={styles.detail}
              />
            </View>
            <View style={[styles.arrowBox, { backgroundColor: Green }]}>
              <MiniForwardChevrolet />
            </View>
          </View>
        </TouchableOpacity>
        <ModalBlur
          visible={modal}
          hasBackdrop
          style={{
            height: hp(650),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: wp(375),
            backgroundColor: White,
            alignSelf: 'center',
            bottom: -hp(25),
          }}
          fixed
          onBackdropPress={() => this.closeModal()}
          render={
            <AddUser
              closeModal={() => this.closeModal()}
              username={username}
              setUsername={(value) => this.setUsername(value)}
            />
          }
        />
      </View>
    );
  }
}
