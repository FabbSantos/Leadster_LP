import React from 'react'
import Header from '../header/Header'
import styled from 'styled-components'

export default function Hero() {
  return (
    <section>
      <Header />
      <main>
        <SectionHero>

          <HeadingWeb>
            Webinars Exclusivos
          </HeadingWeb>

          <HeadingOne>
            Menos Conversinha,<br />
            <HeadingSpan>Mais Conversão</HeadingSpan>
          </HeadingOne>

          <Subtitle>
            Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio
          </Subtitle>

        </SectionHero>
      </main>
    </section>
  )
}


const SectionHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0;
  gap:12px;
  
  background-color: #f0f8ff;

  text-align: center;
`

const HeadingOne = styled.h1` 
  color: #2c3e50;
  font-size: 3rem;
  font-weight: 500;

  font-size: 2rem;
  @media (min-width:768px){
    font-size: 5.5rem;
  }
  
  &::after {
    content: "";
    display: inline-block;
    border-bottom: 2px solid #c8d4dd;
    width: 100%;
    transform: translate(-5%, -30px);
    @media (min-width:768px){
      width: 115%;
    }
  }

`
const HeadingSpan = styled.span`
  background: rgb(31,118,240);
  background: -moz-linear-gradient(-45deg, rgba(31,118,240,1) 0%, rgba(44,131,251,1) 100%);
  background: -webkit-linear-gradient(-45deg, rgba(31,118,240,1) 0%, rgba(44,131,251,1) 100%);
  background: linear-gradient(-45deg, rgba(31,118,240,1) 0%, rgba(44,131,251,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1f76f0",endColorstr="#2c83fb",GradientType=1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  position: relative;
  font-weight: 700;
  font-size: 2rem;
  @media (min-width:768px){
      font-size: 5.5rem;
  }

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 25px;
    height: 25px;
    background: url("/asset-header.png") no-repeat;
    background-size: contain;
    transform: translateY(1px) translateX(-12px);


    @media (min-width:768px){
      width: 50px;
      height: 50px;
      transform: translateY(15px) translateX(-30px);
    }
  }
`

const HeadingWeb = styled.h2`
  font-size: 1rem;
  color: #007eff;
  border: 3px solid #007eff;
  border-radius: 20px;
  border-bottom-left-radius: 3px;
  text-transform: uppercase;
  padding: 6px 20px;
  
`

const Subtitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  text-align: center;
`