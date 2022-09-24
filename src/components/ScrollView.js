import React from 'react';
import { RefreshControl, ScrollView as Scroll, StyleSheet } from 'react-native';
import { DodgerBlue } from './Colors';

export const ScrollView = ({
  children,
  contentContainerStyle,
  refreshControl,
  isRefreshing,
  handlePullToRefresh,
}) => (
  <Scroll
    showsVerticalScrollIndicator={false}
    refreshControl={
      refreshControl ? (
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={handlePullToRefresh}
          tintColor={DodgerBlue}
        />
      ) : undefined
    }
    contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
    {children}
  </Scroll>
);

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50,
  },
});
