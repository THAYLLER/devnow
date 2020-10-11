import React from 'react';

import {
  Container,
  Row,
  Col,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardGroup,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

import {
  FaReact,
  FaHtml5,
  FaAndroid,
  FaBootstrap,
  FaYarn,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaLinux,
  FaAngular,
  FaCss3Alt,
  FaSass,
  FaTrophy,
  FaEye,
  FaPuzzlePiece,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';
import banner from '../../assets/banner-principal.jpg';

import alloc from '../../assets/alloc.png';
import landing from '../../assets/lading.png';
import ezshop from '../../assets/ezshop.png';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import {
  BannerPrincipal,
  Overlay,
  H1,
  ButtonBemVindo,
  Coll,
  TextoPersonalizado,
  ContainerEquipe,
  Espaco,
  SocialButton,
  ListInlineItem,
  BannerImg,
  ServiceHeading,
  Cards,
  Fundo,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <BannerPrincipal id="inicio">
        <BannerImg src={banner} height="586.41px" width="100%" />
        <Overlay />
        <Container>
          <Row>
            <Coll lg="8" md="10" mx="auto">
              <H1>Tiramos sua idéia do papel</H1>
              <ButtonBemVindo
                className="btn btn-lg btn-success"
                to="https://discord.com/invite/DsF8ykG"
              >
                Faça seu orçamento
              </ButtonBemVindo>
            </Coll>
          </Row>
        </Container>
      </BannerPrincipal>
      <Fundo>
        <Container id="sobre">
          <Espaco />
          <Row>
            <Col lg="3" mr="auto" />
            <Col lg="6" mr="auto">
              <TextoPersonalizado>
                Devnow é um laboratorio de desenvolvimento e inovação, que tem
                como intuito o desenvolvimento dos mais diversos sistemas sendo
                ele mobile, web ou até desktop.
              </TextoPersonalizado>
              <TextoPersonalizado>
                Somos uma empresa brasileira que tem como missão tornar suas
                idéias em realidade.
              </TextoPersonalizado>
              <TextoPersonalizado>
                E também apoiamos a comunidade de desenvolvimento atraves da
                dissiminação de conhecimento, tudo para auxiliar os novos
                desenvolvedores.
              </TextoPersonalizado>
            </Col>
          </Row>
        </Container>
      </Fundo>
      <Container id="skills">
        <Espaco />
        <Row>
          <Col md="12">
            <SocialButton>
              <ListInlineItem>
                <FaReact size={50} color="#61dbfb" />
              </ListInlineItem>
              <ListInlineItem>
                <FaHtml5 size={50} color="#E44D26" />
              </ListInlineItem>
              <ListInlineItem>
                <FaCss3Alt size={50} color="#264de4" />
              </ListInlineItem>
              <ListInlineItem>
                <FaSass size={50} color="#CD6799" />
              </ListInlineItem>
              <ListInlineItem>
                <FaAndroid size={50} color="#3DDC84" />
              </ListInlineItem>
              <ListInlineItem>
                <FaBootstrap size={50} color="#080135" />
              </ListInlineItem>
              <ListInlineItem>
                <FaYarn size={50} color="#2188b6" />
              </ListInlineItem>
              <ListInlineItem>
                <FaDocker size={50} color="#0db7ed" />
              </ListInlineItem>
              <ListInlineItem>
                <FaGithub size={50} color="#000" />
              </ListInlineItem>
              <ListInlineItem>
                <FaNodeJs size={50} color="#68A063" />
              </ListInlineItem>
              <ListInlineItem>
                <FaLinux size={50} color="#000" />
              </ListInlineItem>
              <ListInlineItem>
                <FaAngular size={50} color="#B52E31" />
              </ListInlineItem>
            </SocialButton>
          </Col>
        </Row>
        <Espaco />
      </Container>
      <Fundo>
        <ContainerEquipe id="metas">
          <Row>
            <Col md="4">
              <FaTrophy size={60} color="#ffab40" />
              <ServiceHeading>Missão</ServiceHeading>
              <TextoPersonalizado>
                Prover Soluções Tecnologicas na area fullstack mais adequadas
                para o alcance dos objetivos de empresas e o atendimento das
                necessidades dos clientes.
              </TextoPersonalizado>
            </Col>
            <Col md="4">
              <FaEye size={60} color="#4caf50" />
              <ServiceHeading>Visão</ServiceHeading>
              <TextoPersonalizado>
                Ser referência nacional no segmento de Fullstack pela
                eficiência, eficácia e inovação nas nossas Soluções em
                Tecnologicas e sistemas.
              </TextoPersonalizado>
            </Col>
            <Col md="4">
              <FaPuzzlePiece size={60} color="#f11c0c" />
              <ServiceHeading>Valores</ServiceHeading>
              <TextoPersonalizado>
                Eficiência - Proatividade - Valorização humana - Preocupação com
                a satisfação do cliente - Postura colaborativa - Transparência -
                Comprometimento-Criatividade.
              </TextoPersonalizado>
            </Col>
          </Row>
        </ContainerEquipe>
      </Fundo>
      <CardGroup id="portifolio">
        <Cards>
          <CardImg top width="100%" src={alloc} alt="portifolio" />
          <CardBody>
            <CardTitle>Consultoria para empresa Aloc</CardTitle>
            <CardText>
              Auxiliei a empresa como consultor no projeto PDVOne, o qual a
              solução possui integração com o SAP B1
            </CardText>
          </CardBody>
        </Cards>
        <Cards>
          <CardImg top width="100%" src={landing} alt="portifolio" />
          <CardBody>
            <CardTitle>
              <a
                href="https://thayller.github.io/landing-page/"
                target="_blank"
              >
                Portifólio
              </a>
            </CardTitle>
            <CardText>
              Landing page com foco na captação de clientes para empresas que
              trabalham com vendas de planos de sáude.
            </CardText>
          </CardBody>
        </Cards>
        <Cards>
          <CardImg top width="100%" src={ezshop} alt="portifolio" />
          <CardBody>
            <CardTitle>
              <a href="http://www.ezshopmarket.com/" target="_blank">
                EzShop
              </a>
            </CardTitle>
            <CardText>
              Ecommerce focado em supermercado online para um mercado nos EUA
              feito em wordpress
            </CardText>
          </CardBody>
        </Cards>
      </CardGroup>
      <CardGroup>
        <Cards style={{ alignItems: 'center' }}>
          <CardImg
            style={{ width: 250 }}
            top
            width="150"
            src="https://lh3.googleusercontent.com/QLJBOXAObXV4UTtHMokNWdiKUWR4zv-aEM9eFpel72C42L1T1K1MZRyKEnabdscEb6c=s180-rw"
            alt="portifolio"
          />
          <CardBody>
            <CardTitle>
              <a
                href="https://play.google.com/store/apps/details?id=com.mr.consorcios.appsimulacao"
                target="_blank"
              >
                Mr Consórcio
              </a>
            </CardTitle>
            <CardText>
              Aplicativo para empresa de consórcios, tem como foco capitalizar
              de clientes
            </CardText>
          </CardBody>
        </Cards>
        <Cards style={{ alignItems: 'center' }}>
          <CardImg
            style={{ width: 250 }}
            top
            width="150"
            src="https://lh3.googleusercontent.com/T3DQ9wXhVbtgVGqacDbtryR3SCUjwWAejyxB6rlBUquRpdTpjBhtqoC1m45fsoMt5g=s180-rw"
            alt="portifolio"
          />
          <CardBody>
            <CardTitle>
              <a
                href="https://play.google.com/store/apps/details?id=com.simulador.economia"
                target="_blank"
              >
                Simulador de Economia
              </a>
            </CardTitle>
            <CardText>
              O simulador de economia foi criado com intuito de desmistificar o
              uso da tecnologia em beneficio ao meio-ambiente e oferecer ao
              usuário a possibilidade de comparar o uso de papel toalha com a
              solução do uso de secadores de mãos automático.
            </CardText>
          </CardBody>
        </Cards>
      </CardGroup>
      <Footer />
    </>
  );
};

export default Home;
