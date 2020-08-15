import React from 'react'
import * as S from './styles'

import { getImageUrl } from 'utils/getImageUrl'

import { ImageProps } from 'types/api'

const Logo = ({ url, alternativeText }: ImageProps) => (
  <S.LogoWrapper src={getImageUrl(url)} alt={alternativeText} />
)

export default Logo
