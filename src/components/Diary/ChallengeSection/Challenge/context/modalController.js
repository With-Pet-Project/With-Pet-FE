import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

const ModalController = createContext();

export function useModalController() {
  const contextValue = useContext(ModalController);

  if (!contextValue) {
    throw new Error(
      'useModalController must be called from within an ModalControlProvider',
    );
  }

  return contextValue;
}

export function ModalControllerProvider(props) {
  const [openAddChallenge, setOpenAddChallenge] = useState(false);
  const [openChallengeList, setOpenChallengeList] = useState(false);

  const isOpenAddChallenge = useCallback(
    () => setOpenAddChallenge(!openAddChallenge),
    [openAddChallenge],
  );
  const isOpenChallengeList = useCallback(
    () => setOpenChallengeList(!openChallengeList),
    [openChallengeList],
  );

  const value = useMemo(
    () => ({
      openAddChallenge,
      isOpenAddChallenge,
      openChallengeList,
      isOpenChallengeList,
    }),
    [
      openAddChallenge,
      isOpenAddChallenge,
      openChallengeList,
      isOpenChallengeList,
    ],
  );

  return <ModalController.Provider value={value} {...props} />;
}
