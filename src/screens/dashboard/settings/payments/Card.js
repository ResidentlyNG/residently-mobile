import React, { useState } from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  cardBg,
  cardMask,
  mastercard,
  noCard,
} from '../../../../../assets/images';
import {
  ActionButton,
  Header,
  HeaderText,
  Image,
  RegularText,
  White,
} from '../../../../components';
import { addCard as addCardFn } from '../../../../utils';
import { cardStyles as styles } from './styles';
import showToast from '../../../../components/Toast';

const Card = () => {
  const { card } = useSelector((state) => state.wallet);
  const [loading, setLoading] = useState(false);
  const cardExists = Object.entries(card).length > 0;
  const cardExpiry = cardExists
    ? `${card?.exp_month}/${card?.exp_year.slice(2)}`
    : '';

  const addCard = () => {
    setLoading(true);
    addCardFn({ amount: '100' })
      .then((response) => {
        const { authorization_url: uri, reference } = response.data.data;
        console.log('RX', response);
        Actions.webview({ uri, reference });
      })
      .catch((error) => {
        console.log('err', error);
        showToast(error?.message || 'Something went wrong', 'error');
      })
      .finally(() => setLoading(false));
  };

  return (
    <ImageBackground
      source={cardBg}
      style={styles.background}
      imageStyle={styles.imageBg}
      resizeMode="stretch">
      <StatusBar barStyle="dark-content" backgroundColor={White} />
      <Header title="Payments" />
      <View style={styles.mainView}>
        {!cardExists ? (
          <>
            <Image source={noCard} style={styles.noCard} />
            <HeaderText title="No Card" style={styles.noCardHeader} />
            <RegularText
              title="You will need a card to complete transactions, pay bills and also top up your personal wallet"
              style={styles.noCardText}
            />
            <ActionButton
              title="Add a new card"
              style={styles.addCardButton}
              onPress={addCard}
              loading={loading}
            />
          </>
        ) : (
          <>
            <HeaderText title="Your Card" style={styles.headerText} />
            <ImageBackground
              source={cardMask}
              style={styles.cardBackground}
              imageStyle={styles.cardImageBg}>
              <HeaderText
                title={`**** **** **** ${card?.last_four}`}
                style={styles.pan}
              />
              <View style={styles.cardItemRow}>
                <HeaderText title={cardExpiry} style={styles.detail} />
                <HeaderText title="***" style={styles.detail} />
                <Image source={mastercard} style={styles.mastercard} />
              </View>
            </ImageBackground>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

export default Card;
