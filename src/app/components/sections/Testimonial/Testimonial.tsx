import { Box } from "@chakra-ui/react";
import CustomContainer from "../../ui/Container/Container";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    id: 1,
    quote:
      "Innovative Foxes partnered with Etumos and our global telecoms client to deliver a highly flexible and on-brand Email and Landing Page Template set. Innovative Foxes designed and built a modern, proven high conversion layout to help the client maximize registrations. The team was easy to collaborate with, met every deadline, and operated independently with confidence. Innovative Foxes also provided thorough training, ensuring the client felt fully supported post-launch, all at a fair price.",
    author: "Josh",
    company: "Etumos",
    companyLink: "https://etumos.com/",
  },
];

const Testimonial = () => {
  return (
    <Box mt={{ base: 16, md: 32 }}>
      {/*
      <VStack gap={0} mb={{ base: 6, md: 10 }}>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="shorter"
          textAlign="center"
          textTransform="uppercase"
        >
          What{" "}
          <Text as="span" color="orangeCustom" fontWeight="semibold">
            Others
          </Text>{" "}
          Have To Say
        </Heading>
      </VStack>
      */}
      <CustomContainer>
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.id}
            author={t.author}
            company={t.company}
            companyLink={t.companyLink}
            quote={t.quote}
          />
        ))}
      </CustomContainer>
    </Box>
  );
};

export default Testimonial;
