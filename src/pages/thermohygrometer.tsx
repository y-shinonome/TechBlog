import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import DatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ja from 'date-fns/locale/ja'
import Thermohygrograph from '../components/thermohygrograph'
import { fetchThermohygroData } from '../utils/firestore'

type measurement =
  | {
      datetime: string
      temperature: number
      humidity: number
    }[]
  | undefined

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

registerLocale('ja', ja)

const Thermohygrometer: NextPage = () => {
  const [startDate, setStartDate] = useState(dayjs().toDate())
  const [endDate, setEndDate] = useState(dayjs().add(-1, 'd').toDate())
  const [selectedDate, setSelectedDate] = useState(dayjs().toDate())
  const [measurementData, setMeasurementData] = useState<measurement>(initData)
  const [queryCondition, setQueryCondition] = useState('latest')

  useEffect(() => {
    fetchThermohygroData(startDate, endDate).then((data) => {
      if (data?.length === 0) {
        setMeasurementData(initData)
      } else {
        setMeasurementData(data?.reverse())
      }
    })
  }, [startDate, endDate])

  const handleFetch = () => {
    if (queryCondition === 'latest') {
      setStartDate(dayjs().toDate())
      setEndDate(dayjs().add(-1, 'd').toDate())
    } else if (queryCondition === 'past') {
      setStartDate(dayjs(selectedDate).startOf('day').add(1, 'd').toDate())
      setEndDate(dayjs(selectedDate).startOf('day').toDate())
    }
    //この処理の後useEffectの依存配列によりfetchThermohygroData()が実行される
  }

  const handleDateChange = (date: Date) => {
    setSelectedDate(date)
    setQueryCondition('past')
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryCondition(e.target.value)
  }

  return (
    <>
      <div>
        <input
          type="radio"
          name="fetch"
          value="latest"
          checked={queryCondition === 'latest'}
          onChange={handleRadioChange}
        />
        最新24時間データ
        <br />
        <input
          className="my-2"
          type="radio"
          name="fetch"
          value="past"
          checked={queryCondition === 'past'}
          onChange={handleRadioChange}
        />
        日付指定
        <div className="ml-4 inline-block">
          <DatePicker
            className="border border-commonBlack/50 dark:border-commonWhite dark:bg-commonBlack"
            dateFormat="yyyy/MM/dd"
            locale="ja"
            selected={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <button
        className="button-common my-4 px-6 py-1 text-lg"
        onClick={handleFetch}
      >
        データ取得
      </button>
      <Thermohygrograph measurementData={measurementData} className="mb-20" />
    </>
  )
}

export default Thermohygrometer
