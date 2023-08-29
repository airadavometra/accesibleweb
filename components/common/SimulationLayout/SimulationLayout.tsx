import { PageHead } from "@/components/common/PageHead/PageHead";
import { ReactNode, useState } from "react";
import s from "./SimulationLayout.module.css";
import classNames from "classnames";
import { StickyBanner } from "@/components/mainLanding/StickyBanner/StickyBanner";
import { EndChallengeModal } from "@/components/mainLanding/EndChallengeModal/EndChallengeModal";
import { RemindTaskModal } from "@/components/mainLanding/RemindTaskModal/RemindTaskModal";
import { Simulation } from "@/types/simulation/simulation";

type LayoutProps = {
  data: Simulation;
  className?: string;
  children: ReactNode;
};

export const Layout = ({ data, className, children }: LayoutProps) => {
  const [remindTaskOpen, setRemindTaskOpen] = useState<boolean>(false);
  const [endChallengeOpen, setEndChallengeOpen] = useState<boolean>(false);

  return (
    <>
      <PageHead />
      <StickyBanner
        onRemindTask={() => setRemindTaskOpen(true)}
        onEndChallenge={() => setEndChallengeOpen(true)}
      />
      <div id="layout" className={classNames(s.layout, className)}>
        {children}
      </div>
      {remindTaskOpen && (
        <RemindTaskModal
          data={data}
          isOpen={remindTaskOpen}
          onClose={() => setRemindTaskOpen(false)}
        />
      )}
      {endChallengeOpen && (
        <EndChallengeModal
          resultPagePath={`/${data.path}/result`}
          isOpen={endChallengeOpen}
          onClose={() => setEndChallengeOpen(false)}
        />
      )}
    </>
  );
};
