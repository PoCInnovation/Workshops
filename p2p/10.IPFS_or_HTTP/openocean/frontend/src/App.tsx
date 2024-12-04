import Header from "./organisms/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import theme, { colors } from "./theme";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages";
import { FC } from "react";
import ImageDetailsPage from "./pages/images/:id";
import ImagePage from "./pages/images";
import UploadPage from "./pages/Upload";

const Layout: FC = () => (
  <VStack
    h="100vh"
    w="100vw"
    bg={`linear-gradient(180deg, ${colors.gray[900]}, ${colors.gray[700]})`}
  >
    <Header />
    <VStack
      overflowY="scroll"
      w="100%"
      h="100%"
      px="84px"
      py="32px"
      spacing="48px"
    >
      <Outlet />
    </VStack>
  </VStack>
);

const queryClient = new QueryClient;

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/images/*">
                <Route index element={<ImagePage />} />
                <Route path=":id" element={<ImageDetailsPage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
