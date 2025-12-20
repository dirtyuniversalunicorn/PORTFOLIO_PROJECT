import prisma from "@/lib/prisma";
import { CertificatesClient } from "./CertificatesClient";
import { sleep } from "@/utils/sleep";

// TODO fix types
// is there way to not double the information, since the same enum is used in prisma.schema

export const Certificates = async () => {
  await sleep(2000);
  const certificates = await prisma.certificate.findMany();
  return <CertificatesClient certificates={certificates} />;
};
