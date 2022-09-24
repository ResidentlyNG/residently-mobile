import React, { useEffect } from 'react';
import {
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useDispatch, useSelector } from 'react-redux';
import {
  billsBg,
  homeMainBg,
  host,
  profileGroup,
} from '../../../../assets/images';
import { Check, Cross, Personal } from '../../../../assets/svgs';
import {
  Header,
  Image,
  HeaderText,
  RegularText,
  ScienceBlue,
  White,
  ActionButton,
  FlatList,
} from '../../../components';
import { getHome } from '../../../store/actions/profile';
import { myHome as styles } from './styles';

const ButtonPlus = () => (
  <TouchableOpacity
    onPress={() => Actions.crib_invite()}
    style={styles.plusView}>
    <Cross />
  </TouchableOpacity>
);

const ContactCard = ({ user }) => {
  const isActive = !user.invited;
  const username = user?.fullname || user.phone;
  return (
    <View style={styles.roleCard}>
      <View style={styles.cardRow}>
        <View style={styles.sectionRow}>
          {isActive ? (
            <Image source={host} style={styles.host} />
          ) : (
            <View style={styles.profileBorder}>
              <View style={styles.profile}>
                <Personal />
              </View>
            </View>
          )}
          <View style={styles.sectionProfile}>
            <HeaderText title={username} style={styles.title} />
          </View>
        </View>
        <View style={isActive ? styles.tickBox : styles.box}>
          <Check />
        </View>
      </View>
    </View>
  );
};

const MyHome = (props) => {
  const {
    profile: { home, loading, profile },
    bills: { bills },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const reset = props.type === 'reset';

  const pullToRefresh = () => dispatch(getHome());

  useEffect(() => {
    pullToRefresh();
  }, []);

  const userList = home?.users?.filter((user) => user.id !== profile?.id) || [];
  const invitations =
    home?.invitations?.map((iv) => {
      return Object.assign(iv, { invited: true });
    }) || [];
  const users = userList.concat(invitations);
  const noFlatmates = users.length === 0;
  const billCount = bills.filter((bill) => !bill.user_id).length;

  return (
    <ImageBackground
      source={homeMainBg}
      style={styles.background}
      resizeMode="stretch"
      imageStyle={styles.mainImageBg}>
      <StatusBar backgroundColor={ScienceBlue} barStyle="light-content" />
      <ImageBackground
        source={billsBg}
        style={styles.darkHeaderBg}
        imageStyle={styles.imageBg}
      />

      <Header
        title="My Crib"
        iconFill={White}
        titleStyle={styles.headerTitle}
        backPress={() =>
          reset ? Actions.dashboard({ profile: true }) : Actions.pop()
        }
      />
      <Image source={profileGroup} style={styles.profileGroup} />

      <HeaderText title={home?.name} style={styles.blockRoom} />
      <RegularText
        title={`💵  ${billCount} Bills created`}
        style={styles.billsCount}
      />
      {/* <View style={styles.mainView}> */}
      <View style={styles.headerRow}>
        <HeaderText title="Your house mates" style={styles.mainTitle} />
        <ButtonPlus />
      </View>

      {noFlatmates ? (
        <View style={styles.noFlatmatesView}>
          <HeaderText
            title="Invite your house mates"
            style={styles.noRoommatesHeader}
          />
          <RegularText
            title="If you live with someone or a group of people, you can add them here with just their phone number"
            style={styles.noRoommatesText}
          />
          <ActionButton
            title="Add a house mate"
            style={styles.noRoommatesButton}
            // icon={<Cross />}
            onPress={() => Actions.crib_invite()}
          />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={users}
            isRefreshing={loading}
            handlePullToRefresh={pullToRefresh}
            renderItem={({ item }) => <ContactCard key={item.id} user={item} />}
            style={{ height: 340 }}
          />
        </View>
      )}

      {/* <ParagraphText title="Invite your roommates today" />
      <RegularText title="" /> */}
    </ImageBackground>
  );
};

export default MyHome;
