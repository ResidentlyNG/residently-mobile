import React from 'react';
import { View } from 'react-native';
import { Header, ParagraphText } from '../../../components';
import { personal as styles } from './styles';

const Personal = () => {
  return (
    <View style={styles.background}>
      <Header title="Personal" />
      <View style={styles.mainView}>
        <View style={styles.titleBox}>
          <ParagraphText title="Full Name" style={styles.title} />
        </View>
        <ParagraphText title="Bisola Jabari" style={styles.detail} />
        <View style={styles.titleBox}>
          <ParagraphText
            title="Your Residently Username"
            style={styles.title}
          />
        </View>
        <ParagraphText title="@BisJabari" style={styles.detail} />
        <View style={styles.titleBox}>
          <ParagraphText title="Personal" style={styles.title} />
        </View>
        <ParagraphText title="(+234) 000 000 0000" style={styles.detail} />
        <View style={styles.divider} />
        <ParagraphText title="Bis@gmail.com" style={styles.detail} />
        <View style={styles.divider} />
        <ParagraphText title="Add Phone or Email" style={styles.detail} />
      </View>
    </View>
  );
};

export default Personal;
