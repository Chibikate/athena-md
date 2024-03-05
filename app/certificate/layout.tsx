import { ReactNode, Suspense } from "react";

interface Props {
  children: ReactNode;
}

export default function CertificateLayout({ children }: Props) {
  return <Suspense>{children}</Suspense>;
}
