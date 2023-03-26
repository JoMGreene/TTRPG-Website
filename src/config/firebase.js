import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyciG9gfO-TSOzPZsv4Bl98BhJTeE3IgM",
  authDomain: "ttrpg-site.firebaseapp.com",
  projectId: "ttrpg-site",
  storageBucket: "ttrpg-site.appspot.com",
  messagingSenderId: "666572433097",
  appId: "1:666572433097:web:b6008aefd4348ba9a08f18",
  measurementId: "G-G9Q4ZPD0ZR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);