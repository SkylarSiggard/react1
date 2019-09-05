import React from 'react'
import theme from '../components/theme.m4a'

export default function Header() {
    const audio = new Audio(theme)
  return (
    <header>
      <h1 onClick={() => audio.play()}>Gotta catch them all</h1>
    </header>
  )
}
