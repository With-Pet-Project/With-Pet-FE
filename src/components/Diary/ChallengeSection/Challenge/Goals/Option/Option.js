import './Option.scss';
import { useRemoveChallenge } from 'components/Diary/hooks/useRemoveChallenge';

function Option({ goal }) {
  const removeChallenge = useRemoveChallenge();

  return (
    <div className="edit-delete-button">
      <ul>
        <li>
          <button type="button">
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
