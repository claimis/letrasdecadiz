import db from "../../firebase.js"
import { getFirestore, collection, getDocs, query, limit, where} from "firebase/firestore";


export default async function obtenerAgrupaciones(collname) {
    let data = [];
    const querySnapshot = await getDocs(
        query(
                collection(db, collname),
                where("tipo_copla", "==", 2),
                limit(1)
        ))
        querySnapshot.forEach((doc) => {
           // console.log(doc.id, " => ", doc.data());
            data.push(doc.data())
        });

     return new Promise((resolve, reject) => {
        resolve(data)
     })
}