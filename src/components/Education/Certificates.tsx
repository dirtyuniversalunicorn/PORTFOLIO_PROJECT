import type { Certificate } from "@/generated/prisma/client";
import prisma from "@/lib/prisma";
import { sleep } from "@/utils/sleep";
import { SkeletonCertificates } from "../Skeletons/SkeletonCertificates";
import { SectionSkeleton } from "../Skeletons/SkeletonSection";
import { CertificatesClient } from "./CertificatesClient";

// TODO fix types
// is there way to not double the information, since the same enum is used in prisma.schema

export const Certificates = async () => {
  "use cache";
  let certificates: Certificate[] = [];
  try {
    certificates = await prisma.certificate.findMany();
  } catch {
    certificates = [];
  }
  return (
    <>
      <CertificatesClient certificates={certificates} />
      {certificates.length === 0 && <SkeletonCertificates />}
    </>
  );
};
