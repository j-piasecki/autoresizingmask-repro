import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  ScrollView,
} from 'react-native';
import PagerView from 'react-native-pager-view';

const PagerData = new Array(100).fill(null).map((_, index) => index);
const Data = new Array(10).fill(null).map((_, index) => index);
const Colors = [
  'red',
  'blue',
  'green',
  'yellow',
  'purple',
  'orange',
  'pink',
  'black',
  'wheat',
  'gray',
];

const MyPager = () => {
  const [pagerVisible, setPagerVisible] = React.useState(false);
  const [squaresVisible, setSquaresVisible] = React.useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title={pagerVisible ? 'Hide pager' : 'Show pager'}
        onPress={() => {
          setPagerVisible(!pagerVisible);
        }}
      />

      <Button
        title={squaresVisible ? 'Hide squares' : 'Show squares'}
        onPress={() => {
          setSquaresVisible(!squaresVisible);
        }}
      />

      {pagerVisible && (
        <PagerView style={styles.pagerView} initialPage={0}>
          {PagerData.map(item => (
            <View key={item}>
              <Text>Page no. {item}</Text>
            </View>
          ))}
        </PagerView>
      )}

      {squaresVisible && (
        <ScrollView style={{flex: 1}}>
          {Data.flatMap(item =>
            Colors.map(color => (
              <View
                key={`item-${item}-color-${color}`}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: color,
                  margin: 5,
                }}
              />
            )),
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default MyPager;
