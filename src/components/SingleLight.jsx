import { useState } from 'react'
import LightTurnedOff from '/images/light-turned-off.svg'
import LightBlue from '/images/light-blue.svg'
import LightGreen from '/public/images/light-green.svg'
import LightOrange from '/public/images/light-orange.svg'
import LightPink from '/public/images/light-pink.svg'
import LightRed from '/public/images/light-red.svg'
import LightYellow from '/public/images/light-yellow.svg'

const lights = [
  LightBlue,
  LightGreen,
  LightOrange,
  LightPink,
  LightRed,
  LightYellow,
]

export const SingleLight = () => {
  const [isOn, setIsOn] = useState(true)

  const getRandomIndex = () => {
    return Math.floor(Math.random() * lights.length)
  }

  const randomIndex = getRandomIndex()

  const imageSrc = isOn ? lights[randomIndex] : LightTurnedOff

  const handleLightToggle = () => {
    setIsOn(!isOn)
  }

  return <img onClick={handleLightToggle} src={imageSrc} alt="single light" />
}
