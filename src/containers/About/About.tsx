import * as Styled from "./styles";
import { colors } from "../../styles/colors";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

function About() {
  return (
    <Styled.Container>
      <Styled.ProfileImageWrapper>
        <Styled.ProfileImage src="/ka.png" />
      </Styled.ProfileImageWrapper>
      <Styled.Title>
        Olá! Me chamo <Styled.Hightlight>Karina Mesquita</Styled.Hightlight>
      </Styled.Title>
      <Styled.Text>
        Topping cake gingerbread dragée cupcake chupa chups. Chocolate fruitcake
        chupa chups. Marshmallow apple pie gummies oat cake sesame snaps
        liquorice jelly toffee macaroon. Pudding sweet bonbon cotton candy
        marshmallow chocolate bar pie. Gummies dragée brownie. Danish carrot
        cake cupcake ice cream bear claw liquorice chocolate cake chupa chups.
        Cake danish jelly beans sweet roll bear claw marzipan jelly. Caramels
        powder cookie. Candy canes cake soufflé candy. Dessert lollipop gummies
        fruitcake candy bear claw lollipop ice cream fruitcake.
      </Styled.Text>
      <Styled.Text>
        Jujubes cookie fruitcake cotton candy. Apple pie marzipan gummies
        gummies gummies oat cake pudding jelly. Sesame snaps jelly beans
        jujubes. Jelly puddingjujubes muffin lollipop sesame snaps topping.
        Pastry dessert liquorice lollipop muffin chupa chups ice cream oat cake
        sweet roll. Sugar plum pastry candy. Marshmallow cotton candy wafer
        tiramisu dessert lollipop. Bonbon sugar plum powder lollipop gingerbread
        croissant pie lollipop. Lollipop donut sweet roll dragée bear claw
        pastry tart ice cream.
      </Styled.Text>
      <Styled.Text>
        Dessert oat cake sesame snaps halvah oat cake. Caramels sweet dragée
        danish carrot cake dragée chocolate bar marzipan. Jelly-o jelly beans
        cotton candy wafer chocolate cake. Danish sweet roll candy gummies candy
        pie tootsie roll marshmallow gingerbread. Sweet chocolate cake sugar
        plum sweet sesame snaps jelly. Pie toffee apple pie topping ice cream
        jelly-o gummi bears icing. Cupcake chocolate bear claw apple pie icing
        candy powder jelly toffee.
      </Styled.Text>
      <Styled.Text>
        Caso queira entrar em contato comigo, basta me enviar um e-mail para
        <Styled.Hightlight> nina.enjoy@gmail.com</Styled.Hightlight> ou fique a
        vontade para me contatar através de uma das minhas redes sociais.
      </Styled.Text>
      <Styled.SocialWrapper>
        <Styled.Link href="#">
          <AiFillFacebook size={40} color={colors.primary} />
        </Styled.Link>
        <Styled.Link href="#">
          <AiFillInstagram size={40} color={colors.primary} />
        </Styled.Link>
        <Styled.Link href="#">
          <AiFillLinkedin size={40} color={colors.primary} />
        </Styled.Link>
      </Styled.SocialWrapper>
    </Styled.Container>
  );
}

export default About;
