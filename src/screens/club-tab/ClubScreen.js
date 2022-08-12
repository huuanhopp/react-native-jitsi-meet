/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect, useRef} from 'react';
import type {Node} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
// import JitsiMeet, {JitsiMeetView, JitsiMeetSDK} from 'react-native-jitsi-meet';

const profile = {
  appID: 1961870913,
  scenario: 0,
};

const ClubScreen: () => Node = () => {
  const jitsiRef = useRef(null);

  const onConferenceTerminated = nativeEvent => {
    /* Conference terminated event */
    console.log(nativeEvent);
  };

  const onConferenceJoined = nativeEvent => {
    /* Conference joined event */
    console.log(nativeEvent);
  };

  const onConferenceWillJoin = nativeEvent => {
    /* Conference will join event */
    console.log(nativeEvent);
  };

  useEffect(() => {
    setTimeout(() => {
      const url = 'https://streammedia.stepup.edu.vn/sayhi'; // can also be only room name and will connect to jitsi meet servers
      const userInfo = {
        displayName: 'Test',
        email: 'user@example.com',
        avatar:
          'https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-14-2.jpg.webp',
      };
      const options = {
        audioMuted: false,
        audioOnly: true,
        videoMuted: false,
        subject: 'your subject',
        token: 'your token',
      };
      const meetFeatureFlags = {
        addPeopleEnabled: false,
        calendarEnabled: true,
        callIntegrationEnabled: true,
        chatEnabled: false,
        closeCaptionsEnabled: true,
        inviteEnabled: false,
        androidScreenSharingEnabled: true,
        liveStreamingEnabled: false,
        meetingNameEnabled: true,
        meetingPasswordEnabled: true,
        pipEnabled: true,
        kickOutEnabled: true,
        conferenceTimerEnabled: true,
        videoShareButtonEnabled: false,
        recordingEnabled: true,
        reactionsEnabled: true,
        raiseHandEnabled: true,
        tileViewEnabled: false,
        toolboxAlwaysVisible: false,
        toolboxEnabled: false,
        welcomePageEnabled: false,
      };
      // JitsiMeet.audioCall(url, userInfo, options, meetFeatureFlags);
      /* You can also use JitsiMeet.audioCall(url) for audio only call */
      /* You can programmatically end the call with JitsiMeet.endCall() */
    }, 1000);
  }, []);
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        {/*<JitsiMeetView*/}
        {/*  ref={jitsiRef}*/}
        {/*  onConferenceTerminated={onConferenceTerminated}*/}
        {/*  onConferenceJoined={onConferenceJoined}*/}
        {/*  onConferenceWillJoin={onConferenceWillJoin}*/}
        {/*  style={{height: '40%', width: '100%'}cd ios}*/}
        {/*/>*/}
      </View>
      {/*<TouchableOpacity*/}
      {/*  style={{position: 'absolute', bottom: 100}}*/}
      {/*  onPress={() => console.log(jitsiRef?.current, JitsiMeet)}>*/}
      {/*  <Text>{'jitsi'}</Text>*/}
      {/*</TouchableOpacity>*/}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ClubScreen;
