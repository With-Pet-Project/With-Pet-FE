/* eslint-disable import/no-extraneous-dependencies */
import './Editor.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

import React, { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { imageHandler } from './util/imageHandler';
import TagList from './Tag/TagList';
import Location from './Location/Location';
import 'react-quill/dist/quill.snow.css';

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
`;

function Editor() {
  const [imgList, setImageList] = useState([]); // 프론트엔드에서 사용할 일은 없지만 서버쪽에서 요청한 데이터(img url 리스트)
  const [value, setValue] = useState('');
  const QuillRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
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
          image: () => imageHandler(QuillRef, imgList, setImageList),
        },
      },
    }),
    [],
  );

  return (
    <form className="article-form" onSubmit={onSubmit}>
      <div className="editor-filter-container">
        <div className="tag-location-filter">
          <TagList />
          <Location />
        </div>
        <SubmitButton type="submit">등록하기</SubmitButton>
      </div>
      <input
        type="text"
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
        value={value}
        onChange={setValue}
        modules={modules}
        format={formats}
        placeholder="내용을 입력해주세요."
      />
    </form>
  );
}

export default Editor;
