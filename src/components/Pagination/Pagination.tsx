import { Container, Navigate } from "./styles";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { POSTS_PER_PAGE } from "../../../lib/constants";
import { getAllPostsForHome } from "../../../lib/api";
import { useRouter } from "next/router";
import { ScreenClass } from "react-awesome-styled-grid";

function Pagination({ count, onGetPosts, currentPage }) {
  const { push } = useRouter();
  const getPosts = async (page) => {
    const newPosts = await getAllPostsForHome(false, page);
    onGetPosts(newPosts);
    push(`/?page=${page}`, undefined, { shallow: true });
  };
  return (
    <Container>
      <Navigate
        disabled={currentPage <= 0}
        onClick={() => getPosts(currentPage - 1)}
      >
        <IoMdArrowRoundBack size={20} />
        <ScreenClass
          render={(screen) =>
            screen == "xs" ? "Mais antigos" : "Posts mais antigos"
          }
        />
      </Navigate>
      <Navigate
        disabled={currentPage + 1 * POSTS_PER_PAGE >= count}
        onClick={() => getPosts(currentPage + 1)}
      >
        <ScreenClass
          render={(screen) =>
            screen == "xs" ? "Mais recentes" : "Posts mais recentes"
          }
        />
        <IoMdArrowRoundForward size={20} />
      </Navigate>
    </Container>
  );
}

export default Pagination;
