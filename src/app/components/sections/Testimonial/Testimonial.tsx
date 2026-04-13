import { Box, Grid } from "@chakra-ui/react";
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
  {
    id: 2,
    quote:
      "Innovative Foxes led the discovery and development of our new Marketo email and landing page templates, delivering a modern design that matched our brand guidelines perfectly. The resulting assets are modular and versatile enough to power a wide range of our marketing initiatives, featuring advanced functionality like the ability to easily reorder sections within the landing page editor. Their team was a pleasure to work with, combining technical expertise with a reliable on-time delivery.",
    author: "Kelly",
    company: "Ericsson",
    companyLink: "https://www.ericsson.com/en",
  },
];

const Testimonial = () => {
  return (
    <Box mt={{ base: 16, md: 32 }}>
      <CustomContainer>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={6}
          alignItems="stretch"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              companyLink={testimonial.companyLink}
            />
          ))}
        </Grid>
      </CustomContainer>
    </Box>
  );
};

export default Testimonial;
