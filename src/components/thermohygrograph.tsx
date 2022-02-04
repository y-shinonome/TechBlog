import dayjs from 'dayjs'
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

type Props = {
  className?: string
  measurementData: measurement
}

type measurement =
  | {
      datetime: string
      temperature: number
      humidity: number
    }[]
  | undefined

const Thermohygrograph: React.FC<Props> = ({ className, measurementData }) => {
  return (
    <div className={className}>
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
