// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_APP_MESSENGER,
  databaseURL: process.env.REACT_APP_DB_URL,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "user/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    userName: info.userName,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};

// READ INFO
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  // const userRef=ref(db,"user/")
  remove(ref(db, "user/" + id));
  Toastify("Sİlme işlemi başarılı");
};

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  // const userRef = ref(db, "user/");

  const updates = {};

  updates["user/" + info.id] = info;

  return update(ref(db), updates);
};
