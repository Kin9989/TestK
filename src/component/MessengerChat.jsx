import React, { useEffect } from 'react';
import { FacebookProvider, MessengerCustomerChat } from 'react-facebook';

const MessengerChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v17.0'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <FacebookProvider appId="100093455920327">
      <MessengerCustomerChat
        pageId="113817248403137"
        appId="100093455920327"
        htmlRef=""
      />
    </FacebookProvider>
  );
};

export default MessengerChat;
