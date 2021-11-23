import ResetCSS from "../styles/Reset";
import GlobalStyle from "../styles/Global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
