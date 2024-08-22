import { Modal } from '@mantine/core';
import { PropsWithChildren } from 'react';

interface CustomModalProps extends PropsWithChildren {
  isModalOpen: boolean;
  onCloseModal: () => void;
  title: string;
}

export const CustomModal = (props: CustomModalProps) => {
  const { isModalOpen, onCloseModal, title, children } = props;

  return (
    <Modal opened={isModalOpen} onClose={onCloseModal} title={title}>
      {children}
    </Modal>
  );
};
