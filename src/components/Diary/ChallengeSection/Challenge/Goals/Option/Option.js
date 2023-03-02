import './Option.scss';
import { useRemoveChallenge } from 'components/Diary/hooks/useRemoveChallenge';
import { useModal } from 'components/common/Modal/context/useModal';
import EditChallenge from 'components/Diary/Modal/EditChallenge/EditChallenge';

function Option({ goal }) {
  const removeChallenge = useRemoveChallenge();
  const { openModal } = useModal();

  const openEditModal = () =>
    openModal(EditChallenge, { challengeId: goal.challengeId });

  return (
    <div className="edit-delete-button">
      <ul>
        <li>
          <button type="button" onClick={openEditModal}>
            <span>편집</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => removeChallenge.mutate(goal.challengeId)}
          >
            <span>삭제</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Option;
