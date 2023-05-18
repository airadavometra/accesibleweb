import { Dialog } from "@headlessui/react";
import s from "./EndChallengeModal.module.css";
import { useRouter } from "next/router";
import { useChallengeStore } from "@/state/useChallenge";
import { Button } from "@/components/main/Button/Button";

type EndChallengeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const EndChallengeModal = ({
  isOpen,
  onClose,
}: EndChallengeModalProps) => {
  const router = useRouter();
  const setIsSuccessful = useChallengeStore((state) => state.setIsSuccessful);

  const endChallenge = () => {
    setIsSuccessful(false);
    router.push("/result");
  };

  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title id="service-end-challenge-title" className={s.title}>
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
