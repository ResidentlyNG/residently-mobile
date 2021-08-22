import React, { Component } from 'react';
import {
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { profileGroup } from '../../../../assets/images';
import { Cross, ForwardArrow, Insight } from '../../../../assets/svgs';
import {
  Button,
  Green,
  HeaderText,
  ParagraphText,
  RegularText,
  Tab,
  White,
} from '../../../components';
import { ModalBlur } from '../../../components/Overlay';
import { hp, wp } from '../../../components/utils';
import NewBill from '../../authentication/SetUp';
import { bills as styles } from './styles';

const BillItem = ({ last }) => (
  <TouchableOpacity style={styles.billItem} onPress={() => Actions.bill()}>
    <View style={styles.billRow}>
      <ParagraphText title="Electricity Bill" style={styles.billTitle} />
      <Image source={profileGroup} style={styles.profileGroup} />
    </View>
    <View style={styles.amountRow}>
      <HeaderText title="₦ 2,000.00" style={styles.billAmount} />
      <RegularText title="Due: In 2 weeks" style={styles.billDate} />
    </View>
    {!last ? <View style={styles.billDivider} /> : null}
  </TouchableOpacity>
);

const ButtonPlus = () => (
  <View style={styles.plusView}>
    <Cross />
  </View>
);

// const Button = ({ icon, onPress, title, titleStyle }) => (
//   <TouchableOpacity style={styles.button} onPress={onPress}>
//     <View style={styles.actionRow}>
//       <View style={styles.buttonLeftIcon}>{icon}</View>
//       <ParagraphText
//         title={title}
//         style={[styles.actionButtonTitle, titleStyle]}
//       />
//       {/* <View style={styles.buttonIcon}>{icon}</View> */}
//     </View>
//   </TouchableOpacity>
// );

class Bills extends Component {
  state = {
    selected: 'shortTerm',
    modal: false,
  };

  handleChange = (prop, value) => this.setState({ [prop]: value });

  render() {
    const { modal, selected } = this.state;
    const { profile } = this.props;

    return (
      <>
        <StatusBar backgroundColor={White} barStyle="dark-content" />
        <View style={styles.background}>
          <View style={styles.headerGrid}>
            <View />
            <ParagraphText title="Bills" style={styles.headerText} />
            {profile.home_id ? (
              <TouchableOpacity onPress={() => Actions.create_bill()}>
                {/* this.handleChange('modal', true)}> */}
                <ButtonPlus />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </View>

          {!profile.home_id ? (
            <View style={styles.noHomeView}>
              <RegularText
                title="You have not setup a home yet."
                style={styles.noHome}
              />
              <RegularText
                title="you need to setup a home before you can create a bill."
                style={styles.noHomeSub}
              />
              <Button
                title="Setup your home"
                style={styles.noHomeButton}
                onPress={() => Actions.home_setup()}
              />
            </View>
          ) : (
            <>
              <View style={styles.insightContainer}>
                <View style={styles.walletView}>
                  <RegularText
                    title="Wallet balance"
                    style={styles.walletText}
                  />
                  <ParagraphText title="₦ 350,000.00" style={styles.amount} />
                  <View style={styles.divider} />
                  <View style={styles.statsGrid}>
                    {/* spent */}
                    <View style={styles.outerSpentCircle} />
                    <View style={styles.stats}>
                      <RegularText title="You spent" style={styles.statTitle} />
                      <ParagraphText
                        title="₦ 350,000.00"
                        style={styles.statAmount}
                      />
                    </View>
                    <View style={styles.verticalDivider} />
                    {/* owing balance */}
                    <View style={styles.balanceCircle} />
                    <View style={[styles.stats, { marginLeft: wp(13) }]}>
                      <RegularText title="You spent" style={styles.statTitle} />
                      <ParagraphText
                        title="₦ 350,000.00"
                        style={styles.statAmount}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.insightRow}>
                  <Insight />
                  <ParagraphText title="View Insight" style={styles.insight} />
                </View>
              </View>

              <View style={styles.leadRow}>
                <ParagraphText title="Your Bills" style={styles.yourBills} />
                <TouchableOpacity
                  style={styles.seeAllButton}
                  onPress={() => Actions.bill_list()}>
                  <RegularText title="See All" style={styles.seeAll} />
                  <View style={styles.arrow}>
                    <ForwardArrow fill={Green} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.billsCard}>
                <Tab
                  containerStyle={styles.tabContainer}
                  leftTabSelect={() =>
                    this.handleChange('selected', 'shortTerm')
                  }
                  rightTabSelect={() =>
                    this.handleChange('selected', 'longTerm')
                  }
                  rightTabSelected={selected === 'longTerm'}
                  leftTabSelected={selected === 'shortTerm'}
                />
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: hp(30) }}>
                  <BillItem />
                  <BillItem />
                  <BillItem />
                  <BillItem last />
                </ScrollView>
              </View>
              {/* <Button
                title="Add a new bill"
                icon={<ButtonPlus />}
                style={styles.button}
                onPress={() => this.handleChange('modal', true)}
                // titleStyle={styles.buttonTitle}
                left
                flex
              /> */}
            </>
          )}
        </View>
        <ModalBlur
          visible={modal}
          hasBackdrop
          style={{
            height: hp(678),
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: wp(375),
            backgroundColor: White,
            alignSelf: 'center',
            bottom: -hp(25),
          }}
          fixed
          onBackdropPress={() => this.handleChange('modal', false)}
          render={
            <NewBill closeModal={() => this.handleChange('modal', false)} />
          }
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(Bills);
