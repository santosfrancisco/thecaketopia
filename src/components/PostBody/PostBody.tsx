import BlockContent from "@sanity/block-content-to-react";
import { Content } from "./styles";

export default function PostBody({ content }) {
  return (
    <Content>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
      />
    </Content>
  );
}
