import { useChallengeStore } from "@/state/useChallenge";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ChallengeHome = () => {
  const router = useRouter();
  const filter = useChallengeStore((state) => state.filter);

  useEffect(() => {
    if (filter === undefined) {
      router.push("/#try");
    }
  }, [filter, router]);

  return <main>shop {filter}</main>;
};

export default ChallengeHome;
