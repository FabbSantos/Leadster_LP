import React from 'react'
import { SvgBlob } from '../SvgBlob'
import { styled } from 'styled-components'
import Image from 'next/image'
import comparativo from './img/comparativo.png'
import rd from './img/selo_RD.png'
import noCard from './img/no-card.webp'
import rating from './img/rating.webp'

export default function Demo() {
  return (
    <SectionDemo>
      <SvgBlob />

      <ImageContainer>
        <Image src={comparativo} alt={'Comparativo'} width={700} height={651} loading='lazy' />
      </ImageContainer>

      {/* Container Geral direita */}
      <ContainerGeral>

        {/* Container Texto */}
        <ContainerText>
          <TitleDemo>
            Pronto para triplicar sua
            <TitleStrong>
              Geração de Leads?
            </TitleStrong>
          </TitleDemo>

          <SubtitleDemo>
            Criação e ativação em

            <Strong>
              4 minutos.
            </Strong>

          </SubtitleDemo>
        </ContainerText>
        {/*Fim Container Texto */}


        <DivContainerGeral>

          {/* Container botão e image*/}
          <ContainerButtonImg>
            <Button>
              Ver demonstração
            </Button>
            <Image src={rd} alt={'Top 10 Apps mais usados'} width={205} height={73} loading='lazy' />
          </ContainerButtonImg>
          {/* Fim Container botão e image*/}

          <ContainerRating>
            <CreditCard>
              <Image src={noCard} alt={'Não é necessário Cartão de Crédito'} width={16} height={16} loading='lazy'/>
              <ParagraphRating>
                <Strong>Não</Strong> é necessário Cartão de Crédito |
              </ParagraphRating>
            </CreditCard>
            
            <Rating>
              <Image src={rating} alt={'4.9/5 média de satisfação'} width={92} height={16} loading='lazy' />
              <ParagraphRating>
                <Strong>4.9</Strong>/5 média de satisfação
              </ParagraphRating>
            </Rating>
          </ContainerRating>

        </DivContainerGeral>
      </ContainerGeral>

    </SectionDemo>
  )
}

const SectionDemo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  overflow: hidden;

  z-index: 0;

  background-color: #f0f8ff;

  @media(min-width:768px) {
    flex-direction: row;
  }
`

const ContainerGeral = styled.div`
  color: #2c3e50;
  width: 95%;
  gap: 1.2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  @media (min-width:768px){
    width: 35%;
  }
`
const ContainerText = styled.div`
  border-bottom: 1px solid #c8d4dd;
  padding-bottom: 1.3rem;
  gap: 12px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`
const ImageContainer = styled.div`
  &>img {
    width: 416px;
    height: 389px;
      @media (min-width:768px){
        height: 651px;
        width: 700px;
      }
  }


`
const TitleDemo = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  @media (min-width:768px){
    font-size: 3rem;
  }
`
const TitleStrong = styled.strong`
  font-weight: 700;
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
`
const SubtitleDemo = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: .3ch;
`
const Strong = styled.strong`
  font-weight: 700;
`
const DivContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (min-width:768px){
    align-items: start;
    justify-content: start;
  }
`
const ContainerButtonImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  @media (min-width:768px){
      flex-direction: row;
      justify-content: start;
  }
  
`
const ContainerRating = styled.div`
  display: flex;
  min-width: min-content;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  padding: 2rem 0;
  align-items: center;
  @media (min-width:768px){
    padding: 0 0;
    flex-direction: row;
    justify-content: start;
}
`
const CreditCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: start;
  align-items: center;
`
const Rating = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: start;
  align-items: center;
`
const ParagraphRating = styled.p `
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
`
const Button = styled.button`
  box-shadow: 0 20px 30px 0 rgba(12, 0, 46, .1);
  background-color: #007dff;
  display: inline-block;
  padding: 18px 30px;

  border-radius: 45px;
  border: 1px solid #007dff;
  transition: all .3s linear;

  color: #fff;
  font-size: 1.1rem; 
  font-family: inherit;

  cursor: pointer;

  font-weight: 600;
  text-transform: uppercase;

  &:hover{
    background-color: transparent;
    outline: 1px solid #007dff;
    color: #007dff;
  }
`