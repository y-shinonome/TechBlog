import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { query, collection, orderBy, limit, getDocs } from 'firebase/firestore'
import { firestore } from '../utils/firebase'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

type measurement = {
  datetime: string
  temperature: number
  humidity: number
}[]

const Thermohygrograph: React.FC = () => {
  const initData: measurement = [
    {
      datetime: '0',
      temperature: 0,
      humidity: 0,
    },
    {
      datetime: '0',
      temperature: 0,
      humidity: 0,
    },
  ]
  const [measurementData, setMeasurementData] = useState(initData)

  useEffect(() => {
    fetchMesurement()
  }, [])

  const fetchMesurement = async () => {
    const q = query(
      collection(firestore, 'thermohygrometer'),
      orderBy('datetime', 'desc'),
      limit(24)
    )
    const querySnapshot = await getDocs(q)
    const snapshot: measurement = querySnapshot.docs.map((doc) => {
      const datetime = dayjs(doc.data().datetime.seconds * 1000).format(
        'YYYY/MM/DD HH:mm'
      )
      return {
        datetime: datetime,
        temperature: doc.data().temperature,
        humidity: doc.data().humidity,
      }
    })
    setMeasurementData(snapshot.reverse())
  }

  const roundNearest5 = (x: number) => {
    return (Math.round((x * 2) / 10) * 10) / 2
  }

  return (
    <div className="mb-20">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={measurementData}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <Line
            name="気温"
            type="monotone"
            dataKey="temperature"
            stroke="#CC3333"
            yAxisId={1}
          />
          <Line
            name="湿度"
            type="monotone"
            dataKey="humidity"
            stroke="#3333CC"
            yAxisId={2}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Legend verticalAlign="top" />
          <XAxis
            dataKey="datetime"
            tickCount={24}
            dy={5}
            tickFormatter={(tickItem) => dayjs(tickItem).format('H:mm')}
          />
          <YAxis
            yAxisId={1}
            unit="℃"
            stroke="#CC3333"
            width={45}
            tickCount={6}
            domain={[
              (dataMin: number) => roundNearest5(dataMin) - 5,
              (dataMax: number) => roundNearest5(dataMax) + 15,
            ]}
          />
          <YAxis
            yAxisId={2}
            unit="%"
            stroke="#3333CC"
            orientation="right"
            width={45}
            tickCount={6}
            domain={[
              (dataMin: number) => roundNearest5(dataMin) - 15,
              (dataMax: number) => roundNearest5(dataMax) + 5,
            ]}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Thermohygrograph
