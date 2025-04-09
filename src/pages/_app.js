// pages/_app.js
import "../styles/globals.css"; // Tailwind
import Navbar from "../components/navbar";
import { useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const firebaseConfig = {
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      };

      // Pastikan tidak inisialisasi ganda
      if (!getApps().length) {
        const app = initializeApp(firebaseConfig);
        getAnalytics(app);
      }
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

