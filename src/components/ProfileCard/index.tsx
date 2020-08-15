import React from 'react'

import { GrGithub } from 'react-icons/gr'
import { FaDribbble, FaTwitter } from 'react-icons/fa'

import { getImageUrl } from 'utils/getImageUrl'

import { Author } from 'types/api'

import * as S from './styles'

const icons = {
  Twitter: <FaTwitter />,
  GitHub: <GrGithub />,
  Dribbble: <FaDribbble />
}

const ProfileCard: React.FC<Author> = ({
  name,
  role,
  photo,
  socialLinks,
  description
}) => (
  <S.Card key={name}>
    <S.Image
      src={getImageUrl(photo.url)}
      alt={photo.alternativeText}
      loading="lazy"
    />
    <S.Name>{name}</S.Name>
    <S.Role>{role}</S.Role>
    <S.SocialLinks>
      {socialLinks.map(({ title, url }) => (
        <S.Link key={url}>
          <a href={url} title={title}>
            {icons[title]}
          </a>
        </S.Link>
      ))}
    </S.SocialLinks>
    <S.Description>{description}</S.Description>
  </S.Card>
)

export default ProfileCard
