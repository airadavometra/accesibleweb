import { Dialog } from "@headlessui/react";
import s from "./ConfirmPayModal.module.css";
import { Button } from "@/components/main/Button/Button";

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
        <Dialog.Title id="service-confirm-pay-title" className={s.title}>
          Final step!
        </Dialog.Title>
        <Dialog.Description
          id="service-confirm-pay-description"
          className={s.description}
        >
          Let&apos;s check if you bought everything needed for this challenge
          and filled required delivery info.
          <br /> Your cart is going to be validated now.
        </Dialog.Description>
        <div className={s.buttonsGroup}>
          <Button
            id="service-confirm-pay"
            onClick={onOk}
            text={"OK"}
            type={"primary"}
          />
          <Button
            id="service-not-conform-pay"
            onClick={onClose}
            text={"Cancel"}
            type={"secondary"}
          />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
