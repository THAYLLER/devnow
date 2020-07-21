import React from 'react';

import { Container } from 'reactstrap';

import { FaYoutube, FaMediumM } from 'react-icons/fa';
import { Rodapes, Text, SocialUl, SocialLi, SocialLink } from './styles';

const Footer: React.FC = () => {
  return (
    <Rodapes className="bg-light">
      <Container>
        <Text>© 2020 Copyright Todos os direitos reservados para Devnow</Text>
        <SocialUl>
          <SocialLi>
            <SocialLink href="https://www.youtube.com/channel/UCpTy-xb2cAqvxI21Tk8f74A?view_as=subscriber">
              <FaYoutube size={20} color="#f11c0c" />
            </SocialLink>
            <SocialLink href="https://medium.com/@thayller">
              <FaMediumM size={20} color="#000" />
            </SocialLink>
          </SocialLi>
        </SocialUl>
      </Container>
    </Rodapes>
  );
};

export default Footer;
