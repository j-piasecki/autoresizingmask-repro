import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, Button} from 'react-native';
import PagerView from 'react-native-pager-view';

const MyPager = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title={visible ? 'Hide' : 'Show'}
        onPress={() => {
          setVisible(!visible);
        }}
      />

      {visible && (
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="1">
            <Text>First page</Text>
          </View>
          <View key="2">
            <Text>Second page</Text>
          </View>
        </PagerView>
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
