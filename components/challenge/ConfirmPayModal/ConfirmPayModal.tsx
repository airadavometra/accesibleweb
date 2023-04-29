import { Dialog } from "@headlessui/react";
import s from "./ConfirmPayModal.module.css";
import { Button } from "../Button/Button";

type ConfirmPayModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onOk: () => void;
};

export const ConfirmPayModal = ({
  isOpen,
  onClose,
  onOk,
}: ConfirmPayModalProps) => {
  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title className={s.title}>
          This is the end of challenge
        </Dialog.Title>
        <Dialog.Description>
          Let&apos;s check if you bought everything needed for this challenge.
          <br /> Your cart is going to be validated now.
        </Dialog.Description>
        <div className={s.buttonsGroup}>
          <Button onClick={onOk} text={"OK"} type={"primary"} />
          <Button onClick={onClose} text={"Cancel"} type={"secondary"} />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
