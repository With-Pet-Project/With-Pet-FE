/* eslint-disable import/no-extraneous-dependencies */
import './Editor.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import ReactQuill from 'react-quill';
import { useArticleDetail } from 'components/Article/hooks/useArticleDetail';
import { ARTICLE_TAG } from 'lib/constants/articleTag';
import { useEditArticle } from './hooks/useEditArticle';
import { imageHandler } from './util/imageHandler';
import TagList from './Tag/TagList';
import Location from './Location/Location';
import 'react-quill/dist/quill.snow.css';
import { useCreateArticle } from './hooks/useCreateArticle';

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];

const SubmitButton = styled.button`
  background-color: ${vars.backgroundYellow} !important;
  border-radius: 10px;
  border: 0;

  width: 120px;
  height: 36px;
  margin-top: -15px;

  // font-weight: 600;
  font-family: 'Pretendard Variable';
  font-variation-settings: 'wght' 500;
  font-size: 18px;
  line-height: 21px;

  &:disabled {
    cursor: not-allowed;
  }
`;

function Editor() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [img, setImg] = useState(null); // 사용자가 이미지를 올렸다가 지웠을 경우, detailText와 imgList의 url들을
  const [imgList, setImageList] = useState([]); // 대조하여 지워진 이미지인지 아닌지 구분해야 한다.

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const QuillRef = useRef();
  const articleDetail = useArticleDetail();

  // { title, text, imgUrl }
  const { mutate: createArticleMutate } = useCreateArticle();
  const { mutate: editArticleMutate } = useEditArticle();

  const onSubmit = e => {
    // 글 제출시, 글에 존재하는 img 태그들 최종 정리하여 제출.
    e.preventDefault();
    const imgUrl = imgList.map(i => ({
      ...i,
      existence: content.includes(i.content),
    }));
    // eslint-disable-next-line no-unused-expressions
    articleDetail
      ? editArticleMutate({ title, content, imgUrl })
      : createArticleMutate({ title, content, imgUrl });
  };

  const isValidLocation = () => {
    const tag = searchParams.get('tag');
    const place1 = searchParams.get('firstPlace');
    const place2 = searchParams.get('secondPlcae');

    if (
      (tag === 'LOST' || tag === 'WALK' || tag === 'HOSPITAL') &&
      (place1 === '지역 선택' || place2 === '지역 선택')
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (articleDetail) {
      setImageList([...articleDetail.images]);
      setContent(articleDetail.detailText);
      setTitle(articleDetail.titile);

      searchParams.set('tag', articleDetail.tag);
      searchParams.set('firstPlace', articleDetail?.firstPlace || null);
      searchParams.set('secondPlace', articleDetail?.secondPlace || null);
      setSearchParams(searchParams);
    }
  }, []);

  useEffect(() => {
    // 글 작성중에 이미지 업로드 시, url로 변경된 이미지들 배열에 넣기
    if (img) {
      setImageList([...imgList, { content: img }]);
    }
  }, [img]);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'unordered' },
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          [{ color: ['blue', 'black', 'red', 'purple'] }],
          ['link', 'image'],
          ['clean'],
          [{ align: ['', 'center', 'right'] }],
        ],
        handlers: {
          image: () => imageHandler(QuillRef, setImg),
        },
      },
    }),
    [],
  );

  return (
    <form className="article-form" onSubmit={onSubmit}>
      <div className="editor-filter-container">
        <div className="tag-location-filter">
          {articleDetail ? (
            <button disabled type="button" className="modified-article-tag">
              <span>{ARTICLE_TAG[searchParams.get('tag')]}</span>
            </button>
          ) : (
            <TagList />
          )}
          <Location />
        </div>
        <SubmitButton
          type="submit"
          disabled={
            !title.length ||
            content.length < 17 ||
            searchParams.get('tag') === 'ALL' ||
            isValidLocation()
          }
        >
          등록하기
        </SubmitButton>
      </div>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요"
        aria-label="article title"
      />
      <ReactQuill
        ref={el => {
          if (el !== null) {
            QuillRef.current = el;
          }
        }}
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        format={formats}
        placeholder="10자 이상 입력해주세요."
      />
    </form>
  );
}

export default Editor;
