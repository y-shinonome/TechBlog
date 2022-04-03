import {
  useRef,
  useState,
  useEffect,
  createContext,
  Children,
  isValidElement,
  cloneElement,
} from 'react'

type Props = google.maps.MapOptions & {
  style: { [key: string]: string }
}

export const MapContext = createContext<google.maps.Map | undefined>(undefined)

const Map: React.FC<Props> = ({ children, style, ...options }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<google.maps.Map>()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  useEffect(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  return (
    <>
      <div ref={ref} style={style} />
      <MapContext.Provider value={map}>
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            return cloneElement(child, { map })
          }
        })}
      </MapContext.Provider>
    </>
  )
}

export default Map
