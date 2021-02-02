import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "ui-rounded, system-ui, sans-serif",
    heading: "ui-rounded, Georgia, serif",
    mono: "Menlo, monospace",
  },
})

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
