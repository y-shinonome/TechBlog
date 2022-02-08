import { ReactNode } from 'react'
import { createId } from '../utils/createId'

type Props = {
  children: ReactNode
}

const CustomH3: React.FC<Props> = ({ children }) => {
  return <h3 id={createId()}>{children}</h3>
}

export default CustomH3
