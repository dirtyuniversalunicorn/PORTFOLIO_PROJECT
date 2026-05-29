import { Dialog, Image, Portal } from "@chakra-ui/react";

type CertificateDialogProps = {
  activeImage: { src: string; alt: string } | null;
  setActiveImage: React.Dispatch<
    React.SetStateAction<{ src: string; alt: string } | null>
  >;
};

export const CertificateDialog = ({
  activeImage,
  setActiveImage,
}: CertificateDialogProps) => {
  return (
    <Dialog.Root open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            bg="transparent"
            boxShadow="none"
            w="auto"
            marginY={{ base: "auto" }}
          >
            <Dialog.Body p={0} display="flex" justifyContent="center">
              {activeImage && (
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  maxH="80vh"
                  maxW="90vw"
                  objectFit="contain"
                />
              )}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
