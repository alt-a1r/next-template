import { useCallback, useState } from 'react';

interface IUseModalReturn {
  isOpened: boolean;
  toggleModal: () => void;
  openModal: () => void;
  closeModal: () => void;
}

const useModal = (): IUseModalReturn => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const toggleModal = useCallback(() => {
    setIsOpened((isOpen) => !isOpen);
  }, []);

  const openModal = useCallback(() => {
    setIsOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpened(false);
  }, []);

  return {
    isOpened,
    toggleModal,
    openModal,
    closeModal,
  };
};

export default useModal;
