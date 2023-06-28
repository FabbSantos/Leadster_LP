import React from 'react'
import { SvgBlob } from '../SvgBlob'
import { styled } from 'styled-components'
import Image from 'next/image'
import comparativo from './img/comparativo.png'

export default function Demo() {
  return (
    <SectionDemo>
        <SvgBlob/>
          <ImageContainer>
            <Image src={comparativo} alt={'Comparatvio'} width={700} height={651} loading='lazy'/>
          </ImageContainer>
    </SectionDemo>
  )
}

const SectionDemo = styled.section `
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
    overflow: hidden;

    @media(min-width:768px) {
        flex-direction: row;
    }
`

const ImageContainer = styled.div `
    height: auto;
    width: auto;
`


