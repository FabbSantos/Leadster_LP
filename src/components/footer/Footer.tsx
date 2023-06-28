import React from 'react'
import styled from 'styled-components'
import { LinkedIn, Facebook, Instagram } from '../SocialIcons'

export default function Footer() {
    return (
        <FooterContainer>

            <ColumnFooter>
                <FooterHeading>Links Principais</FooterHeading>
                <UlFooter>

                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Home</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Ferramenta</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Preços</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Contato</FooterLink>
                    </LiFooter>

                </UlFooter>
            </ColumnFooter>

            <ColumnFooter>
                <FooterHeading>Cases</FooterHeading>
                <UlFooter>

                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Geração de Leads B2B</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Geração de Leads em Software</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Geração de Leads em Imobiliária</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Cases de Sucesso</FooterLink>
                    </LiFooter>

                </UlFooter>
            </ColumnFooter>

            <ColumnFooter>
                <FooterHeading>Materiais</FooterHeading>
                <UlFooter>

                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Blog</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Parceria com Agências</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Guia Definitivo do Marketing</FooterLink>
                    </LiFooter>
                    <LiFooter>
                        <FooterLink href='#' rel='noreferrer'>Materiais Gratuitos</FooterLink>
                    </LiFooter>

                </UlFooter>
            </ColumnFooter>

            <ColumnFooter>
                <FooterHeading>Siga a Leadster</FooterHeading>

                <ContainerSocial>
                    <FooterSocialLink><LinkedIn/></FooterSocialLink>
                    <FooterSocialLink><Facebook/></FooterSocialLink>
                    <FooterSocialLink><Instagram/></FooterSocialLink>
                </ContainerSocial>

                <ContainerContact>

                    <ContainerSocial>
                        <Strong>E-mail: </Strong><FooterLink href="mailto:contato@leadster.com.br">contato@leadster.com.br</FooterLink>
                    </ContainerSocial>

                    <ContainerSocial>
                        <Strong>Telefone: </Strong><FooterLink href="tel:+554298828-9851">(42) 98828-9851</FooterLink>
                    </ContainerSocial>
                    
                </ContainerContact>

            </ColumnFooter>

        </FooterContainer>
    )
}


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 2rem 1rem;
    gap: 4rem;

    @media (min-width: 768px){
        flex-direction: row;
    }
`

const ColumnFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 1.1rem;

    text-align: left;
`
const FooterHeading = styled.h4`
    font-size: 1.2rem;
    color #2c3e50;
    margin-bottom: 20px;
    font-weight: 600;
`
const UlFooter = styled.ul`
    list-style-type: none;
    padding-left: 0;
`
const LiFooter = styled.li`
    margin-bottom: 20px;
`
const FooterLink = styled.a`
    text-decoration: none;
    color: #677294;
    cursor: pointer;
    transition: color .2s ease;

    &:hover {
        color: #007dff;
    }
` 
const FooterSocialLink = styled.a `
    width: 46px;
    height: 46px;
    border-radius: 50%;
    font-size: 14px;
    line-height: 45px;
    color: #578696;
    display: inline-block;
    background-color: #ebeef5;
    text-align: center;
    transition: all .2s linear;    
    cursor: pointer;
    
    &:hover{
        background-color: #007dff;

        & > svg {
            fill: #fff;
        }
    }
`
const Strong = styled.strong`
    font-weight: 600;
`
const ContainerSocial = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    &${FooterSocialLink} + ${FooterSocialLink} {
        margin-left: 15px;
    }
`
const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: start;
    margin-top: 15px;
`
