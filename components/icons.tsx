import Image from 'next/image'
import logo from '../public/assets/logo.svg'
import twitch from '../public/assets/twitch-logo.svg'
import youtube from '../public/assets/youtube-logo.svg'

type IconProps = {
  size: number
}

export function Logo({ size }: IconProps) {
  return (
    <Image
      src={logo}
      alt='slime2 Logo'
      className='inline-block'
      height={size}
      width={size}
    />
  )
}

export function Twitch({ size }: IconProps) {
  return (
    <Image
      src={twitch}
      alt='Twitch Logo'
      className='inline-block'
      height={size}
      width={size}
    />
  )
}

export function YouTube({ size }: IconProps) {
  return (
    <Image
      src={youtube}
      className='inline-block'
      alt='YouTube Logo'
      height={size}
      width={size}
    />
  )
}
