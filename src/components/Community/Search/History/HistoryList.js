// 검색 기록
import './HistoryList.scss';

import History from './History';

function HistoryList({ history, clickHistory, removeHistory }) {
  return (
    <div className="community-search-history">
      <h2>최근 검색어</h2>
      <ul>
        {history &&
          history?.map(h => (
            <li key={h}>
              <History
                history={h}
                clickHistory={clickHistory}
                removeHistory={removeHistory}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HistoryList;
