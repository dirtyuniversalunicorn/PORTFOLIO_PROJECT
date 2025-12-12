import { Box, Grid } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Grid id="footer_section" gridTemplateRows="repeat(2, 1fr)">
      <Grid gridTemplateColumns="repeat(2, 1fr)">
        <Box>1</Box>
        <Box>2</Box>
      </Grid>
      <Grid gridTemplateColumns="repeat(4, 1fr)">
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </Grid>
    </Grid>
  );
};
