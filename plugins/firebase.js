import firebase from 'firebase'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({ projectId: 'vuexfire-sample-d755c' })
  .firestore()
const settings = { timestampsInSnapshots: true }
db.settings(settings)
