import prisma from "@/lib/prisma";
import { CertificatesClient } from "./CertificatesClient";
import { sleep } from "@/utils/sleep";
import type { Certificate } from "@/generated/prisma/client";
import { SectionSkeleton } from "../Skeletons/SkeletonSection";
import { SkeletonCertificates } from "../Skeletons/SkeletonCertificates";

// TODO fix types
// is there way to not double the information, since the same enum is used in prisma.schema

export const Certificates = async () => {
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
