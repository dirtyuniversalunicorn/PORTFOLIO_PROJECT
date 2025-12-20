"use client";

import { Box, Grid, Image } from "@chakra-ui/react";
import { useState } from "react";
import { CertificateDialog } from "./CertificateDialog";
import type { Certificate } from "@/generated/prisma/client";

export type CertificatesProps = {
  certificates: Certificate[];
};

export const CertificatesClient = ({ certificates }: CertificatesProps) => {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  return (
    <>
      <Box>
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {certificates.map((certificate) => (
            <Image
              key={certificate.id}
              src={certificate.imageUrl}
              alt={certificate.title}
              cursor="pointer"
              zIndex={99}
              _hover={{
                opacity: 0.8,
                boxShadow: "0 0 10px var(--chakra-colors-blue-200)",
              }}
              onClick={() =>
                setActiveImage({
                  src: certificate.imageUrl,
                  alt: certificate.title,
                })
              }
            />
          ))}
        </Grid>
      </Box>

      <CertificateDialog
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </>
  );
};
