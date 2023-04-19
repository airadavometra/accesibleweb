import { Dialog } from "@headlessui/react";
import s from "./RemindTaskModal.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { taskMap } from "@/data/task";
import { Button } from "../Button/Button";

type RemindTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RemindTaskModal = ({ isOpen, onClose }: RemindTaskModalProps) => {
  const filter = useChallengeStore((state) => state.filter);

  const data = filter ? taskMap[filter] : undefined;

  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      {data ? (
        <Dialog.Panel>
          <Dialog.Title className={s.title}>{data.title}</Dialog.Title>
          <Dialog.Description>{data.challenge}</Dialog.Description>
          <Button onClick={onClose} text={"Get back"} type={"secondary"} />
        </Dialog.Panel>
      ) : (
        <Dialog.Panel>
          <Dialog.Title className={s.title}>Oops!</Dialog.Title>
          <Dialog.Description>
            Something went wrong... Please contact the support
          </Dialog.Description>
          <Button onClick={onClose} text={"Close"} type={"secondary"} />
        </Dialog.Panel>
      )}
    </Dialog>
  );
};
