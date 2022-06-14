import React from 'react';
import { Image as Img, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BackIconRound } from '../../assets/svgs';
import {
  CatskillWhite,
  EarlyDawn,
  MineShaft,
  SelectiveYellow,
  Sunglow,
  White,
  WoodSmoke,
} from './Colors';
import { ParagraphText, RegularText } from './Text';
import { circle, hp, wp } from './utils';

export const MainView = (props) => {
  return (
    <View style={[styles.mainBackground, props.style]}>{props.children}</View>
  );
};

export const Image = ({ source, style, resizeMode }) => (
  <Img source={source} style={style} resizeMode={resizeMode || 'contain'} />
);

export const Tab = ({
  leftTabSelect,
  rightTabSelect,
  leftTabSelected,
  rightTabSelected,
  containerStyle,
  leftTitle,
  rightTitle,
}) => {
  const selectedStyle = (selected) =>
    selected ? styles.selectedTab : styles.tab;
  const noTabSelected = !leftTabSelected && !rightTabSelected;
  return (
    <View style={[styles.tabContainer, containerStyle]}>
      <TouchableOpacity
        style={
          noTabSelected ? styles.selectedTab : selectedStyle(leftTabSelected)
        }
        onPress={leftTabSelect}>
        <ParagraphText title={leftTitle} style={styles.tabTitle} />
      </TouchableOpacity>
      <TouchableOpacity
        style={selectedStyle(rightTabSelected)}
        onPress={rightTabSelect}>
        <ParagraphText title={rightTitle} style={styles.tabTitle} />
      </TouchableOpacity>
    </View>
  );
};

export const Header = ({
  backPress,
  title,
  titleStyle,
  iconFill,
  rightComponent,
  rightComponentPress,
  noBackIcon,
}) => {
  // const iconHandler = () => {
  //   if (rightComponent) return rightComponent;
  //   if (search) return <SearchSvg />;
  //   return null;
  // };

  return (
    <View style={styles.headerPane}>
      <View style={styles.flex}>
        {!noBackIcon ? (
          <TouchableOpacity
            onPress={backPress || (() => Actions.pop())}
            style={styles.backButton}>
            <BackIconRound fill={iconFill} />
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>
      <View style={styles.midFlex}>
        <ParagraphText title={title} style={[styles.headerTitle, titleStyle]} />
      </View>
      <View style={styles.flex}>
        {rightComponent ? (
          <TouchableOpacity
            style={styles.search}
            onPress={() => (rightComponentPress ? rightComponentPress() : {})}>
            {rightComponent}
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} />
        )}
      </View>
    </View>
  );
};

export const BillIcon = ({ backgroundColor, icon }) => (
  <View
    style={[styles.billIcon, { backgroundColor: backgroundColor || Sunglow }]}>
    {icon || <View />}
  </View>
);

export const TimeBadge = () => (
  <View style={styles.badge}>
    <View style={styles.stump} />
    <RegularText title="2 weeks" style={styles.duration} />
  </View>
);

const styles = StyleSheet.create({
  mainBackground: {
    backgroundColor: White,
    width: wp(339),
    height: hp(674),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  midFlex: {
    flexGrow: 3,
    alignItems: 'center',
    // flex: 3,
  },
  tabContainer: {
    width: wp(315),
    height: hp(42),
    borderRadius: 10,
    backgroundColor: CatskillWhite,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    width: wp(154),
    height: hp(34),
    borderRadius: 10,
    backgroundColor: White,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: wp(154),
    height: hp(34),
    justifyContent: 'center',
  },
  tabTitle: {
    color: MineShaft,
  },
  // backButton: {
  //   marginLeft: wp(10),
  // },

  headerPane: {
    height: 55,
    width: wp(360),
    // backgroundColor: ,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: wp(16),
    paddingLeft: wp(16),
  },
  headerTitle: {
    color: WoodSmoke,
    fontSize: 20,
    // fontWeight: 'bold',
    letterSpacing: 0.5,
    fontFamily: 'Oxygen-Bold',
  },

  billIcon: {
    ...circle(35.43),
  },
  badge: {
    borderRadius: 7,
    padding: 5,
    backgroundColor: EarlyDawn,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stump: {
    ...circle(8, SelectiveYellow),
  },
  duration: {
    color: SelectiveYellow,
    fontSize: 11,
    marginLeft: wp(3),
  },
});
