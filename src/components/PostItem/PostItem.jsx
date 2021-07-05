import React from "react";

import { Container } from "./styles";

// title será um H2

const PostItem = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PostItem;
