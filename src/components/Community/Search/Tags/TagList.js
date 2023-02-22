/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
import './TagList.scss';
import { ARTICLE_TAG } from 'lib/constants/articleTag';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useGlobalSearchParams } from 'components/common/hooks/useGlobalSearchParams';
import Tag from './Tag';

function TagList() {
  const ARTICLE_QUERY_STRING = Object.keys(ARTICLE_TAG);
  const ARTICLE_TAG_NAME = Object.values(ARTICLE_TAG);

  // searchParams = useGlobalSearchParams();
  const [tag, setTag] = useState(ARTICLE_QUERY_STRING[0]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleTag = tagId => setTag(tagId);

  const scrollRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = e => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  useEffect(() => {
    searchParams.set('tag', tag);
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams, tag]);

  return (
    <div className="tag-container" ref={scrollRef}>
      <div
        className="tag-slide"
        onMouseDown={onDragStart}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onMouseMove={e => setTimeout(onDragMove(e), 200)}
        role="option"
      >
        {ARTICLE_TAG_NAME.map((t, idx) => (
          <Tag
            key={ARTICLE_QUERY_STRING[idx]}
            tagName={t}
            tagId={ARTICLE_QUERY_STRING[idx]}
            onClickTag={handleTag}
            params={searchParams.get('tag')}
          />
        ))}
      </div>
    </div>
  );
}

export default TagList;
