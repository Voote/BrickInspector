import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, Linking } from 'react-native';

export const CanOpenUrl = () => {
  const [connection, setConnection] = useState(false);
  const [url, setUrl] = useState('https://google.com');

  const checkInternet = () => {
    Linking.canOpenURL(url).then((connection) => {
      if (!connection) {
        setConnection(false);
      } else {
        fetch(url).then((res) =>
          setConnection(res.status !== 200 ? false : true),
        );
      }
    });
  };

  useEffect(() => {
    checkInternet();
  }, [url]);

  const handlePress = () => {
    setUrl(
      url === 'https://google.com'
        ? 'http://someweirdurlthatdoesntwork.com'
        : 'https://google.com',
    );
    checkInternet();
  };

  return (
    <View style={styles.container}>
      <Text>
        Connection:
        <Text style={{ color: connection ? 'green' : 'red' }}>
          {`   ${connection}`}
        </Text>
      </Text>
      <Text>{url.replace(/\https?:\/\//g, '')}</Text>
      <Button onPress={handlePress} title="Change server url" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-evenly',
    // justifyContent: 'space-around',
    alignItems: 'center',
  },
});
