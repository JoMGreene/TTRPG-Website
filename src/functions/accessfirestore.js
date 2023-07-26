import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { writeFile } from "fs";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
	const db = getFirestore(app);
	const auth = getAuth(app);

	async function insertIntoArray(docName, index, toWrite) {

		const docRef = doc(db, "ContentPages", docName);
		const docSnap = await getDoc(docRef);
		const preCon = docSnap.data()

		const content = preCon.Content;
		console.log(content)
		content.splice(index, 0, toWrite)
		console.log(content)
		await updateDoc(docRef, {
			Content: content
		})

	}



	signInWithEmailAndPassword(auth, "jomgreene97@gmail.com", "Authpass913290774")
		.then((userCredential) => {
			insertIntoArray("CharacterCreationMain", 5, "/hAdvantages & Disadvantages")
		
	
	  	})
	  	.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
	  	});

	
