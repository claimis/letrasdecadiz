import db from "../../firebase.js"
import { getFirestore, collection, getDocs, query, limit} from "firebase/firestore";


export default async function obtenerAgrupaciones() {

    const querySnapshot = await getDocs(query(collection(db, "agrupaciones"), limit(5)));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });



}