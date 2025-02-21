/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {
  ZegoUIKitPrebuiltCall,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  GROUP_VIDEO_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

export default function VideoCall(props) {
  // const { userId, token, userName, roomId } = route.params
  const zegoAppId = ;
  const zegoAppSign =
    '';
  const userId = 'demo_user_id';
  const userName = 'Demo User';
  const roomId = 'demo_room_id';

  const handleNavigation = () => {
    console.log('handleNavigation');
    // const jumpToAction = navigateTo('Dashboard', {
    //   data: 'https://website.com/dashboard',
    // })
    // navigation.dispatch(jumpToAction)
  };

  console.log('ONE_ON_ONE_VIDEO_CALL_CONFIG', ONE_ON_ONE_VIDEO_CALL_CONFIG);
  console.log('GROUP_VIDEO_CALL_CONFIG', GROUP_VIDEO_CALL_CONFIG);

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltCall
        appID={zegoAppId}
        appSign={zegoAppSign}
        userID={userId}
        userName={userName}
        callID={roomId}
        config={{
          ...GROUP_VIDEO_CALL_CONFIG,
          // layout: {
          //   mode: ZegoLayoutMode.pictureInPicture,
          // },
          onLeave: handleNavigation,
          onLeaveConfirmation: () => {
            Alert.alert(
              'Leave Meeting',
              'Are you sure you want to leave the meeting?',
              [
                {text: 'Cancel', style: 'cancel'},
                {text: 'Leave', onPress: handleNavigation},
              ],
            );
          },
        }}
      />
      {/* <ZegoUIKitPrebuiltVideoConference
        appID={parseInt(zegoAppId)}
        appSign={zegoAppSign}
        userID={userId}
        userName={userName}
        conferenceID={roomId}
        config={{
          turnOnCameraWhenJoining: true,
          turnOnMicrophoneWhenJoining: true,
          onLeave: handleNavigation,
          onLeaveConfirmation: () => {
            Alert.alert(
              'Leave Meeting',
              'Are you sure you want to leave the meeting?',
              [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Leave', onPress: handleNavigation }
              ]
            );
          },
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
});
