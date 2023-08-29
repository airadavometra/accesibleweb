import { Dialog } from "@headlessui/react";
import s from "./RemindTaskModal.module.css";
import { Button } from "@/components/mainLanding/Button/Button";
import { Simulation } from "@/types/simulation/simulation";

type RemindTaskModalProps = {
  data: Simulation;
  isOpen: boolean;
  onClose: () => void;
};

export const RemindTaskModal = ({
  data,
  isOpen,
  onClose,
}: RemindTaskModalProps) => {
  return (
    <Dialog className={s.modal} open={isOpen} onClose={onClose}>
      {data ? (
        <Dialog.Panel>
          <Dialog.Title id="service-reming-task-title" className={s.title}>
            {data.title}
          </Dialog.Title>
          <Dialog.Description
            id="service-remind-task-description"
            className={s.description}
          >
            <ul>
              {data.challengeSteps.map((step, index) => (
                <li
                  key={index}
                  id={`service-remind-task-description-item-${index}`}
                >
                  {step}
                </li>
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
