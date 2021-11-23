import React from "react";
import { colors } from "../../styles/colors";
import { BsLinkedin, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import * as Styled from "./styles";
import CopyToClipboard from "../CopyToClipboard";

const Share = ({ post }) => {
  const [href, sethref] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      sethref(window.location.href);
    }
  }, []);

  const twitterShareUrl = `https://twitter.com/share?text=${post.title}&url=${href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${post.title}`;

  const whatsAppShareUrl = `https://wa.me/?text=${encodeURIComponent(href)}`;

  return (
    <section>
      <Styled.Container>
        <span>Compartilhar</span>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar no Facebook"
          className="facebook"
          href={facebookShareUrl}
        >
          <BsFacebook size={24} color={colors.primary} />
        </Styled.SocialLink>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar no LinkedIn"
          className="linkedin"
          href={linkedInShareUrl}
        >
          <BsLinkedin size={24} color={colors.primary} />
        </Styled.SocialLink>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar no WhatsApp"
          className="whatsapp"
          href={whatsAppShareUrl}
        >
          <BsWhatsapp size={24} color={colors.primary} />
        </Styled.SocialLink>

        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Compartilhar no Twitter"
          className="twitter"
          href={twitterShareUrl}
        >
          <BsTwitter size={24} color={colors.primary} />
        </Styled.SocialLink>
        <CopyToClipboard textToCopy={href} />
      </Styled.Container>
    </section>
  );
};

export default Share;
