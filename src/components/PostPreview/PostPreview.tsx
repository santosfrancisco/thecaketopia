import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";
import Date from "../Date";
import CoverImage from "../CoverImage";
import Link from "next/link";
import { imageBuilder } from "../../../lib/sanity";
import * as Styled from "./styles";
import React from "react";
import { colors } from "../../styles/colors";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Styled.Container>
      <Styled.CoverImageWrapper>
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
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
          <Styled.Excerpt>{excerpt}</Styled.Excerpt>
          <div>
            <Styled.ActionsWrapper>
              <div style={{ display: "flex", gap: 8 }}>
                <a href="#">
                  <FaFacebook size={24} color={colors.primary} />
                </a>
                <a href="#">
                  <FaTwitter size={24} color={colors.primary} />
                </a>
                <a href="#">
                  <FaWhatsapp size={24} color={colors.primary} />
                </a>
              </div>
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <Styled.Button>Ler</Styled.Button>
              </Link>
            </Styled.ActionsWrapper>
          </div>
        </Styled.PostInfoContent>
      </Styled.PostInfo>
    </Styled.Container>
  );
}
