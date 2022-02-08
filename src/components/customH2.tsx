import { ReactNode } from 'react'
import { createId } from '../utils/createId'

type Props = {
  children: ReactNode
}

const CustomH2: React.FC<Props> = ({ children }) => {
  return <h2 id={createId()}>{children}</h2>
}

export default CustomH2
