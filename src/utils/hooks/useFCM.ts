import { useEffect, useState } from "react";
import useFCMToken from "./useFCMToken";
import { messaging } from "../firebase";
import { MessagePayload, onMessage } from "firebase/messaging";
import { toast } from "react-toastify";

const useFCM = () => {
  const fcmToken = useFCMToken();
  const [messages, setMessages] = useState<MessagePayload[]>([]);
  useEffect(() => {
    console.log("useFCMToken", fcmToken)
    if ("serviceWorker" in navigator) {
      console.log("useFCMToken", fcmToken)
      const fcmmessaging = messaging();

      const unsubscribe = onMessage(fcmmessaging, (payload) => {
        console.log("Message received. ", payload)
        toast.dark(payload.notification?.title);
        setMessages((messages) => [...messages, payload]);
      });
      return () => unsubscribe();
    }
  }, [fcmToken]);

  
  return { fcmToken, messages };
};

export default useFCM;
