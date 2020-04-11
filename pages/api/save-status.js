import { db } from '../../lib/db'
import admin from 'firebase-admin'
import auth0 from '../../lib/auth0';

const saveStatus = async (request, response) => {
    const session = await auth0.getSession(request)
    if(session){
        console.log(session)
        const dados = request.body
        const today = new Date()
        const currentDate = today.getFullYear() + '-' + today.getMonth + '-' + today.getDate()
        await db.collection('markers')
        .doc(currentDate)
        .collection('checks')
        .doc(session.user.sub)
        .set({
            status: dados.status,
            user: session.user.sub,
            coordinates: new admin.firestore.GeoPoint(
                dados.coords.lat,
                dados.coords.long
            )
        })
    }
}

export default saveStatus