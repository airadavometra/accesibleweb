import { Dialog } from "@headlessui/react";
import s from "./EndChallengeModal.module.css";
import { useRouter } from "next/router";
import { useSimulationStore } from "@/state/useSimulation";
import { ButtonOld } from "@/components/mainLanding/ButtonOld/ButtonOld";

type EndChallengeModalProps = {
  resultPagePath: string;
  isOpen: boolean;
  onClose: () => void;
};

export const EndChallengeModal = ({
  resultPagePath,
  isOpen,
  onClose,
}: EndChallengeModalProps) => {
  const router = useRouter();
  const { setCart, setCheckoutCart, setIsDiscountApplied } = useSimulationStore(
    (state) => ({
      setCart: state.setCart,
      setCheckoutCart: state.setCheckoutCart,
      setIsDiscountApplied: state.setIsDiscountApplied,
    })
  );

  const endChallenge = () => {
    setCart([]);
    setCheckoutCart([]);
    setIsDiscountApplied(false);
    router.push(resultPagePath);
  };

  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title id="service-end-challenge-title" className={s.title}>
          You want to end the challenge?
        </Dialog.Title>
        <div className={s.buttonsGroup}>
          <ButtonOld
            id="service-end-challenge"
            onClick={endChallenge}
            text={"Yes"}
            type={"primary"}
          />
          <ButtonOld
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
