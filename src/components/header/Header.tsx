import Image from 'next/image'
import logo from './img/logo.png'
import React from 'react'
import { styled } from 'styled-components'


export default function Header() {
  return (
    <HeaderHero>
          <Image src={logo} alt={'Leadster'} width={190} height={40} loading="eager" />
    </HeaderHero>
  )
}

    const HeaderHero = styled.header `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1.2rem;
    `
