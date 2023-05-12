import { Dialog } from "@headlessui/react";
import s from "./RemindTaskModal.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { challengeMap } from "@/data/challenge/challenge";
import { Button } from "../Button/Button";

type RemindTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RemindTaskModal = ({ isOpen, onClose }: RemindTaskModalProps) => {
  const filter = useChallengeStore((state) => state.filter);

  const data = filter ? challengeMap[filter] : undefined;

  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      {data ? (
        <Dialog.Panel>
          <Dialog.Title id="service-reming-task-title" className={s.title}>
            {data.title}
          </Dialog.Title>
          <Dialog.Description id="service-reming-task-description">
            <ul>
              {data.challengeSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </Dialog.Description>
          <Button
            id="service-remind-task-close"
            onClick={onClose}
            text={"Get back"}
            type={"secondary"}
          />
        </Dialog.Panel>
      ) : (
        <Dialog.Panel>
          <Dialog.Title id="service-error-title" className={s.title}>
            Oops!
          </Dialog.Title>
          <Dialog.Description id="service-error-description">
            Something went wrong... Please contact the support
          </Dialog.Description>
          <Button
            id="service-remind-task-close"
            onClick={onClose}
            text={"Close"}
            type={"secondary"}
          />
        </Dialog.Panel>
      )}
    </Dialog>
  );
};
