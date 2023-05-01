import { Dialog } from "@headlessui/react";
import s from "./EndChallengeModal.module.css";
import { Button } from "../Button/Button";
import { useRouter } from "next/router";
import { useChallengeStore } from "@/state/useChallenge";

type EndChallengeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const EndChallengeModal = ({
  isOpen,
  onClose,
}: EndChallengeModalProps) => {
  const router = useRouter();
  const setFinishTime = useChallengeStore((state) => state.setFinishTime);

  const endChallenge = () => {
    setFinishTime(new Date());
    router.push("/result");
  };

  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title className={s.title}>
          You want to end the challenge?
        </Dialog.Title>
        <div className={s.buttonsGroup}>
          <Button
            id="service-end-challenge"
            onClick={endChallenge}
            text={"Yes"}
            type={"primary"}
          />
          <Button
            id="service-continue-challenge"
            onClick={onClose}
            text={"No"}
            type={"secondary"}
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
