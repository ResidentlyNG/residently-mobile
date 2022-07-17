import React from 'react';
import DateSelector from 'react-native-datepicker';
import { wp } from './utils';

const DatePicker = ({
  date,
  dateStyle,
  futureDate,
  minDate,
  // maxDate,
  handleDateChange,
  // iconStyle,
  placeholder,
  showIcon,
}) => {
  return (
    <>
      <DateSelector
        style={[{ width: wp(208), justifyContent: 'center' }, dateStyle]}
        date={date}
        mode="date"
        placeholder={placeholder || 'select date'}
        format="DD/MM/YYYY"
        minDate={
          minDate || (futureDate ? new Date(Date.now()) : new Date(1900, 0, 1))
        }
        // maxDate={}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        useNativeDriver={true}
        showIcon={showIcon || false}
        customStyles={{
          dateInput: {
            //   marginLeft: 0,
            alignSelf: 'flex-start',
            //   color: '#000',
            borderWidth: 0,
            //   fontSize: 15,
            //   marginTop: hp(10),
            //   left: -wp(120),
          },
          dateText: {
            alignSelf: 'flex-start',
            fontSize: 16,
            fontFamily: 'Inter-Regular',
          },
          datePicker: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // '#d1d3d8',
            // justifyContent: 'center',
            color: '#000',
            fontSize: 20,
          },
          placeholderText: {
            alignSelf: 'flex-start',
            fontSize: 16,
            // marginTop: hp(18),
            // marginLeft: wp(3),
          },
          datePickerCon: {
            color: '#000',
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={handleDateChange}
      />
    </>
  );
};

export { DatePicker };
