// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAPnQiyUcWsGrfVtPdnnD9Jf1ZvsiJeTbc",
  authDomain: "the-one-4b706.firebaseapp.com",
  projectId: "the-one-4b706",
  storageBucket: "the-one-4b706.appspot.com",
  messagingSenderId: "1049977441027",
  appId: "1:1049977441027:web:24947cbe624f1835863736"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "./logo.png",
  };
  self.addEventListener('push', function (event) {
    // var notification = event.data.json();
    event.waitUntil(self.registration.showNotification(notificationTitle, notificationOptions));
  });
});
