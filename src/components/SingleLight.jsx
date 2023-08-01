import { useState } from 'react'
import LightTurnedOff from '/images/light-turned-off.svg'
import LightBlue from '/images/light-blue.svg'

export const SingleLight = () => {
  const [isOn, setIsOn] = useState(false)

  const imageSrc = isOn ? LightBlue : LightTurnedOff

  const handleLightToggle = () => {
    setIsOn(!isOn)
  }

  return <img onClick={handleLightToggle} src={imageSrc} alt="single light" />
}
