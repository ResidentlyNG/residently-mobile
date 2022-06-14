import React from 'react';
import { ScrollView as Scroll, StyleSheet } from 'react-native';

export const ScrollView = ({ children, contentContainerStyle }) => (
  <Scroll
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[styles.contentContainer, contentContainerStyle]}>
    {children}
  </Scroll>
);

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50,
  },
});
