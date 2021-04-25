import React, { Component } from 'react';
import { StatusBar, ImageBackground, View } from 'react-native';
import {
  Button,
  Green,
  Image,
  ParagraphText,
  RegularText,
} from '../../../components';
import {
  secondScreenBg,
  user,
  profileGroup,
  note,
  flash,
  netflix,
} from '../../../../assets/images';
import { home as styles } from './styles';
import { DottedPlus, MenuIcon } from '../../../../assets/svgs';

export default class Home extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor={Green} barStyle="light-content" />
        <ImageBackground
          style={styles.background}
          source={secondScreenBg}
          imageStyle={styles.imageBg}
          resizeMode="stretch">
          <View style={styles.topRow}>
            <Image source={user} style={styles.userImage} />
            <View style={styles.menuView}>
              <MenuIcon />
            </View>
          </View>
          <RegularText title=" Welcome Back," style={styles.welcomeText} />
          <ParagraphText title="Samuel." style={styles.username} />
          <View style={styles.mainCard}>
            <View style={styles.cardRow}>
              <View style={styles.profileView}>
                <View>
                  <ParagraphText title="Roommates" style={styles.title} />
                  <View style={styles.imageRow}>
                    <Image source={profileGroup} style={styles.profileGroup} />
                    <DottedPlus />
                  </View>
                </View>
              </View>
              <View style={styles.walletView}>
                <ParagraphText
                  title="Wallet Balance"
                  style={styles.walletTitle}
                />
                <ParagraphText title="₦ 350,000.00" style={styles.amount} />
                <RegularText
                  title="Available balance"
                  style={styles.availableText}
                />
              </View>
            </View>
            <View style={styles.billsRow}>
              <ParagraphText title="Your Bills" style={styles.leadBills} />
              <View>
                <RegularText title="See All" style={styles.seeAll} />
              </View>
            </View>

            <View style={styles.rentCard}>
              <View style={styles.cardMainGrid}>
                <View style={styles.cardBadge}>
                  <Image source={note} style={styles.note} />
                </View>
                <View style={styles.cardGrid}>
                  <View style={styles.innerRow}>
                    <ParagraphText
                      title="Yearly Rent"
                      style={styles.billTitle}
                    />
                    <RegularText
                      title="Amount"
                      style={styles.billAmountTitle}
                    />
                  </View>
                  <View style={styles.innerRow}>
                    <RegularText
                      title="Next payment : Not active"
                      style={styles.billStatus}
                    />
                    <ParagraphText title="₦0.00" style={styles.billAmount} />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.electricityCard}>
              <View style={styles.cardMainGrid}>
                <View style={styles.lightCardBadge}>
                  <Image source={flash} style={styles.flash} />
                </View>
                <View style={styles.cardGrid}>
                  <View style={styles.innerRow}>
                    <ParagraphText
                      title="Electricity Bill"
                      style={styles.lightBillTitle}
                    />
                    <RegularText
                      title="Amount"
                      style={styles.lightBillAmountTitle}
                    />
                  </View>
                  <View style={styles.innerRow}>
                    <RegularText
                      title="Next payment : 20/11/2020"
                      style={styles.lightBillStatus}
                    />
                    <ParagraphText
                      title="₦2,000.00"
                      style={styles.lightBillAmount}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.netflixCard}>
              <View style={styles.cardMainGrid}>
                <View style={styles.lightCardBadge}>
                  <Image source={netflix} style={styles.flash} />
                </View>
                <View style={styles.cardGrid}>
                  <View style={styles.innerRow}>
                    <ParagraphText
                      title="Electricity Bill"
                      style={styles.lightBillTitle}
                    />
                    <RegularText
                      title="Amount"
                      style={styles.lightBillAmountTitle}
                    />
                  </View>
                  <View style={styles.innerRow}>
                    <RegularText
                      title="Next payment : 20/11/2020"
                      style={styles.lightBillStatus}
                    />
                    <ParagraphText
                      title="₦2,000.00"
                      style={styles.lightBillAmount}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Button
              title="+   Add new bill"
              style={styles.button}
              titleStyle={styles.buttonTitle}
              // onPress={() => Actions.dashboard()}
            />
          </View>
        </ImageBackground>
      </>
    );
  }
}
