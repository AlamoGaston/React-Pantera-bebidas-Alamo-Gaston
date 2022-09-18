import { initializeApp } from "firebase/app";
import { getFirestore, where, doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIpjqOxz3lDPAtX3sl6QT4frOKbBFEgT8",
  authDomain: "pantera-bebidas-bedc8.firebaseapp.com",
  projectId: "pantera-bebidas-bedc8",
  storageBucket: "pantera-bebidas-bedc8.appspot.com",
  messagingSenderId: "728443372091",
  appId: "1:728443372091:web:3556e7d1503bb37a79521e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestoreList = async (drinkId) => {
  let q;
  if (drinkId) {
    q = query(collection(db, "drinks"), where("category", "==", drinkId));
  } else {
    q = query(collection(db, "drinks"));
  }

  const querySnapshot = await getDocs(q);

  const dataFromFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFirestore;
};

export const firestoreDetail = async (itemId) => {
  const docRef = doc(db, "drinks", itemId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: itemId,
      ...docSnap.data(),
    };
  } else {
    console.log("No existe");
  }
};
