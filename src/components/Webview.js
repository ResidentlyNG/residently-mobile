import React, { useRef, useState } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { Actions } from 'react-native-router-flux';
import { RegularText } from './Text';
import { White } from './Colors';
import { hp, wp } from './utils';
import { TransactionLoader } from './Overlay';
import { verifyTransaction } from '../utils';

const Web = ({ uri, reference }) => {
  const [hasRedirected, setHasRedirected] = useState(false);
  const webview = useRef();

  const onNavigationStateChange = (event) => {
    const { url } = event;
    console.log('navURL', url);
    if (url.includes('wrenzo')) {
      setHasRedirected(true);
      verifyTransaction(reference)
        .then((response) => {
          console.log('reer', response);
          Actions.dashboard({ type: 'reset', wallet: true });
        })
        .catch((error) => console.log('ERR', error));
    }
  };
  const LoadingView = () => (
    <View style={styles.loadingView}>
      <TransactionLoader />
      <RegularText title="Loading..." style={styles.loadingText} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={White} barStyle="dark-content" />
      <WebView
        source={{ uri }}
        ref={webview}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        domStorageEnabled
        onNavigationStateChange={
          !hasRedirected ? onNavigationStateChange : null
        }
        mixedContentMode="always"
        thirdPartyCookiesEnabled
        renderLoading={LoadingView}
      />
    </SafeAreaView>
  );
};

export default Web;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingView: {
    alignItems: 'center',
    flex: 1,
  },
  loadingText: {
    marginTop: hp(10),
    fontSize: 20,
  },
  activityIndicator: {
    alignSelf: 'center',
    width: wp(100),
    height: hp(150),
  },
});
