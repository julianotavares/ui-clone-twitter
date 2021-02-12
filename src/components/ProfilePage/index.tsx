import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
        <ProfileData>
          <EditButton outlined>Editar perfil</EditButton>

          <h1>Juliano Tavares</h1>
          <h2>@julianotavares@gmail.com</h2>

          <p>
            Developer at <a href="http://www.orus.dev">@OrusTecnologia</a>
          </p>

          <ul>
            <li>
              <LocationIcon />
              Mineiros, Brasil
            </li>
            <li>
              <CakeIcon />
              Nascido(a) em 01 de fevereiro de 1981
            </li>
          </ul>

          <Followage>
            <span>
              seguindo <strong>94</strong>
            </span>
            <span>
              <strong>2993 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>
      </Banner>
    </Container>
  );
};

export default ProfilePage;
