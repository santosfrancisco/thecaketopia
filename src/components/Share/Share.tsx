import React from "react";
import { colors } from "../../styles/colors";
import { FiMail } from "react-icons/fi";
import { BsLinkedin, BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
import * as Styled from "./styles";

const Share = ({ post }) => {
  const [href, sethref] = React.useState("");
  const [origin, setOrigin] = React.useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      sethref(window.location.href);
      setOrigin(window.location.origin);
    }
  }, []);

  const twitterShareUrl = `https://twitter.com/share?text=${post.title}&url=${href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${post.title}`;

  const mailShareUrl = `mailto:?subject=${post.title}&body=${href}`;

  // let pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${href}&description=${post.title}`;
  // if (
  //   data.ghostPost.localFeatureImage &&
  //   data.ghostPost.localFeatureImage.publicURL
  // ) {
  //   pinterestShareUrl += `&media=${
  //     origin + data.ghostPost.localFeatureImage.publicURL
  //   }`;
  // }

  const whatsAppShareUrl = `https://wa.me/?text=${encodeURIComponent(href)}`;

  // const postContentRef = React.useRef();
  return (
    <section>
      <Styled.Container>
        <span>Compartilhar</span>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
          className="twitter"
          href={twitterShareUrl}
        >
          <BsTwitter size={32} color={colors.secondary} />
        </Styled.SocialLink>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
          className="facebook"
          href={facebookShareUrl}
        >
          <BsFacebook size={32} color={colors.secondary} />
        </Styled.SocialLink>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="linkedin"
          href={linkedInShareUrl}
        >
          <BsLinkedin size={32} color={colors.secondary} />
        </Styled.SocialLink>
        {/* <a
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
          className="pinterest"
          href={pinterestShareUrl}
        >
          <i className="icon icon-pinterest"></i>
          <span className="hidden">Pinterest</span>
        </a> */}
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
          className="whatsapp"
          href={whatsAppShareUrl}
        >
          <BsWhatsapp size={32} color={colors.secondary} />
        </Styled.SocialLink>
        <Styled.SocialLink
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
          className="email"
          href={mailShareUrl}
        >
          <FiMail size={34} color={colors.secondary} />
        </Styled.SocialLink>
        {/* <CopyLink textToCopy={href} /> */}
      </Styled.Container>
    </section>
  );
};

export default Share;
