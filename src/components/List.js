import React from 'react';
import {
  FlatList as RNFlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { HeaderText, RegularText } from './Text';
import * as Colors from './Colors';
import { wp, hp } from './utils';
import { Spinner } from './Overlay';

export const FlatList = ({
  data,
  emptyComponent,
  handlePullToRefresh,
  isRefreshing,
  isFetchingMore,
  keyExtractorId,
  renderItem,
  style,
}) => {
  const emptyComponentText = () => {
    return 'You do not have any flatmates yet. \n Any flatmate you add will appear here.';
  };

  return (
    <RNFlatList
      style={[styles.flatList, style]}
      data={data}
      showsVerticalScrollIndicator={false}
      // onEndReached={handleFetchMoreTransaction}
      onEndReachedThreshold={0.8}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handlePullToRefresh}
          tintColor={Colors.DodgerBlue}
        />
      }
      keyExtractor={(item) => String(item[keyExtractorId || 'id'])}
      renderItem={renderItem}
      ListEmptyComponent={() =>
        emptyComponent || (
          <View style={styles.noTransactionView}>
            <HeaderText
              title={'No Flatmate yet'}
              style={styles.noHistoryText}
            />
            <RegularText
              title={emptyComponentText()}
              style={styles.noHistorySubText}
            />
          </View>
        )
      }
      // ListHeaderComponent={
      //   shouldHeaderShow
      //     ? () =>
      //         !!data &&
      //         data.length > 0 && (
      //           <View style={styles.transactionsHeader}>
      //             <RegularText
      //               title="Transaction history"
      //               style={styles.transactionsHeaderTitle}
      //             />
      //             {isRefreshing ? (
      //               <RegularText
      //                 title="updating..."
      //                 style={styles.transactionsHeaderUpdatedTime}
      //               />
      //             ) : (
      //               <RegularText
      //                 title="updated now"
      //                 style={styles.transactionsHeaderUpdatedTime}
      //               />
      //             )}
      //           </View>
      //         )
      //     : () => <View />
      // }
      ListFooterComponent={() =>
        isFetchingMore ? (
          <Spinner size="small" color={Colors.DarkBlue} />
        ) : (
          <View />
        )
      }
      ListFooterComponentStyle={{ marginTop: hp(20) }}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    // width: '100%',
    // zIndex: -400,
  },
  noTransactionView: {
    alignItems: 'center',
  },
  image: {
    width: wp(193.13),
    height: hp(208.37),
    marginTop: hp(79),
  },
  noHistoryText: {
    marginTop: hp(26),
  },
  noHistorySubText: {
    marginTop: hp(10),
    width: wp(325),
    lineHeight: 25,
    textAlign: 'center',
  },
});
