import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import {
  query,
  collection,
  orderBy,
  limit,
  startAt,
  endAt,
  getDocs,
} from 'firebase/firestore'
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
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'

type Props = {
  className?: string
}

type measurement = {
  datetime: string
  temperature: number
  humidity: number
}[]

const initData: measurement = [
  {
    datetime: '0',
    temperature: 0,
    humidity: 0,
  },  {
    datetime: '0',
    temperature: 0,
    humidity: 0,
  }
]
const initialDate = new Date()

registerLocale('ja', ja)

const Thermohygrograph: React.FC<Props> = ({ className }) => {
  const [startDate, setStartDate] = useState(dayjs().toDate())
  const [endDate, setEndDate] = useState(dayjs().add(-1, 'd').toDate())
  const [measurementData, setMeasurementData] = useState(initData)
  const [queryCondition, setQueryCondition] = useState('latest')
  const [selectedDate, setSelectedDate] = useState(initialDate)

  useEffect(() => {
    fetchSnapshot()
  }, [endDate])

  const fetchSnapshot = async () => {
    try {
      const q = query(
        collection(firestore, 'thermohygrometer'),
        orderBy('datetime', 'desc'),
        startAt(startDate),
        endAt(endDate),
        limit(48)
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
      if (snapshot.length === 0) {
        setMeasurementData(initData)
      } else {
        setMeasurementData(snapshot.reverse())
      }
    } catch (e) {
      console.error(e)
    }
  }

  const handleFetch = () => {
    if (queryCondition === 'latest') {
      setStartDate(dayjs().toDate())
      setEndDate(dayjs().add(-1, 'd').toDate())
    } else if (queryCondition === 'past') {
      setStartDate(dayjs(selectedDate).startOf('day').add(1, 'd').toDate())
      setEndDate(dayjs(selectedDate).startOf('day').toDate())
    }
    //この処理の後useEffectの依存配列によりfetchSnapshot()が実行される
  }

  const handleChange = (date: Date) => {
    setSelectedDate(date)
    setQueryCondition('past')
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryCondition(e.target.value)
  }

  return (
    <div className={className}>
      <div>
        <input
          type="radio"
          name="fetch"
          value="latest"
          checked={queryCondition === 'latest'}
          onChange={handleOnChange}
        />
        最新24時間データ<br/>
        <input
          className='my-2'
          type="radio"
          name="fetch"
          value="past"
          checked={queryCondition === 'past'}
          onChange={handleOnChange}
        />
        日付指定
        <div className='inline-block ml-4'>
          <DatePicker
            className='border-commonBlack/50 border'
            dateFormat='yyyy/MM/dd'
            locale='ja'
            selected={selectedDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="button-common px-2 my-2" onClick={handleFetch}>
        データ取得
      </button>

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
            dot={false}
          />
          <Line
            name="湿度"
            type="monotone"
            dataKey="humidity"
            stroke="#3333CC"
            yAxisId={2}
            dot={false}
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
            tickCount={5}
            domain={[10, 30]}
            allowDataOverflow={true}
          />
          <YAxis
            yAxisId={2}
            unit="%"
            stroke="#3333CC"
            orientation="right"
            width={45}
            tickCount={7}
            domain={[20, 80]}
            allowDataOverflow={true}
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Thermohygrograph
