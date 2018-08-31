let FB;
export const initFeed = (callback) => {
  //  Load Facebooks JavaScript SDK
  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/sv_SE/sdk.js#xfbml=1&version=v3.1&appId=2140015826265955';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}