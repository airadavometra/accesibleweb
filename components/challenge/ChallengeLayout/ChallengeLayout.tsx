import { ReactNode } from "react";

type ChallengeLayoutProps = {
  children: ReactNode;
};

export const ChallengeLayout = ({ children }: ChallengeLayoutProps) => {
  return <>{children}</>;
};
