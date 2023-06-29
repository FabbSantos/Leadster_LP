import React from 'react'
import { styled } from 'styled-components'

export default function LegalText() {
  return (
    <LegalContainer>
          <Copyright>Copyright © 2015 - 2022 Todos os direitos reservados | <CopyrightSpan>Leadster</CopyrightSpan></Copyright>
          <Adress>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP 80010-000 | Termos de uso</Adress>
    </LegalContainer>
  )
}


const LegalContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    border-top: 1px solid #c8d4dd;
    justify-content: space-between;
    padding: 5%;

    @media(min-width:768px) {
        padding: 2% 15%;
        flex-direction: row;
    }
`
const Copyright = styled.p`
    font-size: .9rem;
    color: #2c3e50;
    font-weight: 600;
    text-align: left;
`
const CopyrightSpan = styled.span`
    color: #007dff;
`
const Adress = styled.p`
    font-size: .9rem;
    color: #2c3e50;
    font-weight: 400;
    text-align: left;
`