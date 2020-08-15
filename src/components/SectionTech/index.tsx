import React from 'react'

import Heading from 'components/Heading'
import Container from 'components/Container'

import { getImageUrl } from 'utils/getImageUrl'

import { SectionTechProps } from 'types/api'

import * as S from './styles'

const SectionTech = ({ title, techIcons }: SectionTechProps) => (
  <S.Wrapper>
    <Container>
      <Heading reverseColor>{title}</Heading>
      <S.IconsContainer>
        {techIcons.map(
          ({ title: iconName, icon: { url, alternativeText } }) => (
            <S.Icon key={iconName}>
              <S.Icons
                src={getImageUrl(url)}
                alt={alternativeText}
                loading="lazy"
              />
              <S.IconsName>{iconName}</S.IconsName>
            </S.Icon>
          )
        )}
      </S.IconsContainer>
    </Container>
  </S.Wrapper>
)

export default SectionTech
