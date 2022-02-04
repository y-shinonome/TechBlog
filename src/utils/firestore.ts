import {
  query,
  collection,
  orderBy,
  limit,
  startAt,
  endAt,
  getDocs,
} from 'firebase/firestore'
import { firestore } from './firebase'
import dayjs from 'dayjs'

export const fetchThermohygroData = async (startDate: Date, endDate: Date) => {
  try {
    const q = query(
      collection(firestore, 'thermohygrometer'),
      orderBy('datetime', 'desc'),
      startAt(startDate),
      endAt(endDate),
      limit(48)
    )
    const querySnapshot = await getDocs(q)
    const snapshot = querySnapshot.docs.map((doc) => {
      const datetime = dayjs(doc.data().datetime.seconds * 1000).format(
        'YYYY/MM/DD HH:mm'
      )
      return {
        datetime: datetime,
        temperature: doc.data().temperature,
        humidity: doc.data().humidity,
      }
    })
    return snapshot
  } catch (e) {
    return []
  }
}
