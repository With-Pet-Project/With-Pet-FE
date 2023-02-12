/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
import './TagList.scss';
import { ARTICLE_TAG } from 'lib/constants/articleTag';
import { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tag from './Tag';

function TagList() {
  const ARTICLE_QUERY_STRING = Object.keys(ARTICLE_TAG);
  const ARTICLE_TAG_NAME = Object.values(ARTICLE_TAG);

  const scrollRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onClickTag = tagId => {
    setSearchParams({ tag: tagId });
  };

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
    setSearchParams({ tag: ARTICLE_QUERY_STRING[0] });
  }, []);

  return (
    <div
      className="tag-container"
      ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={e => setTimeout(onDragMove(e), 200)}
      role="option"
    >
      <div className="tag-slide">
        {ARTICLE_TAG_NAME.map((tag, idx) => (
          <Tag
            key={ARTICLE_QUERY_STRING[idx]}
            tagName={tag}
            tagId={ARTICLE_QUERY_STRING[idx]}
            onClickTag={onClickTag}
            params={searchParams.get('tag')}
          />
        ))}
      </div>
    </div>
  );
}

export default TagList;
