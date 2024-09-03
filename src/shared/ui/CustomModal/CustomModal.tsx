import { Modal } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';

interface CustomModalProps extends PropsWithChildren {
  isModalOpen: boolean;
  onCloseModal: () => void;
  title: string;
}

export const CustomModal = ({ isModalOpen, onCloseModal, title, children }: CustomModalProps) => {
  const { t } = useTranslation();

  return (
    <Modal opened={isModalOpen} onClose={onCloseModal} title={t(title)}>
      {children}
    </Modal>
  );
};
