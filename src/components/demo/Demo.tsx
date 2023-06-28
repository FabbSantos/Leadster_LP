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
          <Image src={comparativo} alt={'Comparativo'} width={700} height={651} loading='lazy'/>
        </ImageContainer>


      <ContainerText>

      <TitleDemo>
        Pronto para triplicar sua 
        <TitleStrong>
          Geração de Leads? 
        </TitleStrong>
      </TitleDemo>

      <SubtitleDemo>
        Criação e ativação em 
        
        <SubtitleStrong>
          4 minutos.
        </SubtitleStrong>

      </SubtitleDemo>

      </ContainerText>

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

  background-color: #f0f8ff;

  @media(min-width:768px) {
    flex-direction: row;
  }
`

const ImageContainer = styled.div `
  height: auto;
  width: auto;
  flex-basis: 30%;
`
const TitleDemo = styled.h2 `
  font-size: 3rem;
  font-weight: 500;
`

const ContainerText = styled.div `
  color: #2c3e50;
  gap: 6px;
  display: flex;
  text-align: left;
  flex-basis: 30%;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  border-bottom: 1px solid #c8d4dd;
  padding-bottom: 1.3rem;
`

const  TitleStrong = styled.strong `
  font-weight: 700;
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
`

const SubtitleDemo = styled.h3 `
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: .3ch;
`
const SubtitleStrong = styled.strong `
  font-weight: 700;
`