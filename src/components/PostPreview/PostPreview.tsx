import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Date from "../Date";
import CoverImage from "../CoverImage";
import Link from "next/link";
import { imageBuilder } from "../../../lib/sanity";
import * as Styled from "./styles";
import React from "react";
import { colors } from "../../styles/colors";
import Share from "../Share";

export default function MoreStories({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <Styled.Container>
      <Styled.CoverImageWrapper>
        <CoverImage
          slug={slug}
          title={title}
          url={imageBuilder(coverImage).width(640).height(480).url()}
        />
      </Styled.CoverImageWrapper>
      <Styled.PostInfo>
        <Styled.PostInfoContent className="post-preview__content">
          <Styled.DateWrapper>
            <Date dateString={date} />
          </Styled.DateWrapper>
          <Styled.Title>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a>{title}</a>
            </Link>
          </Styled.Title>
        </Styled.PostInfoContent>
      </Styled.PostInfo>
    </Styled.Container>
  );
}
