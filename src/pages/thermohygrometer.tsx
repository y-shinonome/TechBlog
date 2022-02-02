import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore'
import { firestore } from '../utils/firebase'

type measurement = {
  datetime: Date,
  temperature: number,
  humidity: number,
}[]

const Thermohygrometer: NextPage = () => {
  const initData:measurement = []
  const [measurementData, setMeasurementData] = useState(initData)

  useEffect(() => {
    fetchMesurement()
  },[])

  const fetchMesurement = async () => {
    const q = query(collection(firestore, 'thermohygrometer'), orderBy('datetime','desc'), limit(10))
    const querySnapshot = await getDocs(q)
    const snapshot:measurement = querySnapshot.docs.map((doc) => {
      const datetime = new Date(doc.data().datetime.seconds*1000)
      return ({
        datetime: datetime,
        temperature: doc.data().temperature,
        humidity: doc.data().humidity,
      })
    })
    setMeasurementData(snapshot)
  }

  return (
    <>
      <ul>
        {measurementData.map((measurement, index) => (
          <li key={index}>{`${measurement.datetime} : ${measurement.temperature}℃ : ${measurement.humidity}%`}</li>
        ))}
      </ul>  
    </>
  )
}

export default Thermohygrometer
