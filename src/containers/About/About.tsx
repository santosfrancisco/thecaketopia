import * as Styled from "./styles";
import { colors } from "../../styles/colors";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import BlockContent from "@sanity/block-content-to-react";

function About({ author }) {
  return (
    <Styled.Container>
      <Styled.ProfileImageWrapper>
        <Styled.ProfileImage src={author.authorImage || ""} />
      </Styled.ProfileImageWrapper>
      <Styled.Title>
        Olá! Me chamo <Styled.Hightlight>{author.name}</Styled.Hightlight>
      </Styled.Title>
      <Styled.BioContent>
        <BlockContent
          blocks={author.bio}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        />
      </Styled.BioContent>
      <Styled.SocialWrapper>
        <Styled.Link href={author.facebook}>
          <AiFillFacebook size={40} color={colors.primary} />
        </Styled.Link>
        <Styled.Link href={author.instagram}>
          <AiFillInstagram size={40} color={colors.primary} />
        </Styled.Link>
        <Styled.Link href={author.linkedin}>
          <AiFillLinkedin size={40} color={colors.primary} />
        </Styled.Link>
      </Styled.SocialWrapper>
    </Styled.Container>
  );
}

export default About;
