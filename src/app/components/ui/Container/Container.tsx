import { Container } from "@chakra-ui/react";

const CustomContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container fluid m={"auto"} maxW={"1200px"} px={{ base: 4, lg: 4, xl: 0 }}>
      {children}
    </Container>
  );
};

export default CustomContainer;
