import React, { Component } from 'react';
import Jitsi from 'react-jitsi';
import Loader from './Loader';
class Videochat extends Component {
    constructor(props) {
        super(props);
        this.roomName= 'random';
        this.displayName = this.props.name;
        this.interfaceConfig = {
          LANG_DETECTION: false,
          lang: "en",
          APP_NAME: "Chatbot",
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          HIDE_INVITE_MORE_HEADER: true,
          MOBILE_APP_PROMO: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "fullscreen",
            "fodeviceselection",
            "hangup",
            "profile",
            "chat",
            "settings",
            "videoquality",
            "tileview",
            "download",
            "help",
            "mute-everyone"
            // 'security'
          ]
        };
        this.config = {
          defaultLanguage: "en",
          prejoinPageEnabled: false
        };
    }
    handleAPI = JitsiMeetAPI => {
        JitsiMeetAPI.executeCommand("toggleVideo");
      };
    render() { 
        return ( 
            <Jitsi
                domain="meet.jit.si"
                onAPILoad={this.handleAPI}
                roomName={this.roomName}
                displayName={this.displayName}
                password={this.password}
                loadingComponent={Loader}
                interfaceConfig={this.interfaceConfig}
                config={this.config}
                containerStyle={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
            />
        );
    }
}
 
export default Videochat;