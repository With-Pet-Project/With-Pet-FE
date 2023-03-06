import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

function History({ history, clickHistory, removeHistory }) {
  return (
    <div className="history-button">
      <button type="button" onClick={() => clickHistory(history)}>
        <span>{history}</span>
      </button>
      <button type="button" onClick={() => removeHistory(history)}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
}

export default History;
