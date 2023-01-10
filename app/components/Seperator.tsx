import React, {ReactElement} from 'react';
import { StyleSheet, View } from "react-native";

const Seperator = (): ReactElement => {
    return (
          <View style={styles.view}>
          
          </View>
      );
}

const styles = StyleSheet.create({
    view: {
      padding: 5
    },
  });

export default Seperator;
