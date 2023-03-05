import './TagList.scss';

import { ARTICLE_TAG } from 'lib/constants/articleTag';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DownArrow from 'components/common/SelectArrow/DownArrow';

const KEY = Object.keys(ARTICLE_TAG);

function TagList() {
  const [tag, setTag] = useState('ALL');
  const [tagParams, setTagParams] = useSearchParams();

  const handleTag = e => {
    setTag(e.target.value);
  };

  useEffect(() => {
    tagParams.set('tag', tag);
    setTagParams(tagParams);
  }, [tagParams, setTagParams, tag]);

  return (
    <div className="tagList-button">
      <select onClick={handleTag} id="tag-selector">
        {Object.values(ARTICLE_TAG).map((t, idx) =>
          idx >= 1 ? (
            <option key={t} value={KEY[idx]}>
              {t}
            </option>
          ) : (
            <option key="태그 선택" value={KEY[idx]}>
              태그 선택
            </option>
          ),
        )}
      </select>
      <div className="editor-down-arrow">
        <DownArrow htmlFor="tag-selector" />
      </div>
    </div>
  );
}

export default TagList;
