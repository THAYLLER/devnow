import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Col, Card, Input } from 'reactstrap';

export const BannerPrincipal = styled.header`
  background-color: #453a34;
  height: 586.41px;
  width: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: -10;
  left: 0;
  background-color: #212529;
  opacity: 0.5;
  height: 586.41px;
  width: 100%;
`;

export const BannerImg = styled.img`
  position: absolute;
  top: -10;
  left: 0;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 4.2rem;
  line-height: 110%;
  margin: 2.8rem 0 1.68rem 0;
`;

export const H5 = styled.h5`
  color: #fff;
  font-size: 1.35rem;
  line-height: 110%;
  margin: 1.0933333333rem 0 0.656rem 0;
`;

export const ButtonBemVindo = styled(Link)``;

export const ContainerEquipe = styled(Container)`
  text-align: center;
`;

export const Coll = styled(Col)`
  text-align: center;
  padding-top: 183px;
`;

export const TextoPersonalizado = styled.p`
  margin-bottom: 3rem;
  color: #868e96;
  font-size: 16px;
`;

export const Espaco = styled.div`
  padding-top: 150px;
`;

export const SocialButton = styled.ul`
  margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
`;

export const ListInlineItem = styled.li`
  margin-right: 0.5rem;
  display: inline-block;
  padding: 15px;
`;

export const ServiceHeading = styled.h4`
  margin: 15px 0;
  text-transform: none;
  font-weight: 700;
`;

export const Cards = styled(Card)`
  text-align: center;
  margin: 20px;
  border: 0;
`;

export const Fundo = styled.div`
  background-color: #f8f9fa;
  padding: 100px 0;
`;
