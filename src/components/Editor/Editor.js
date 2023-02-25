/* eslint-disable import/no-extraneous-dependencies */
import './Editor.scss';
import styled from 'styled-components';
import { vars } from 'lib/styles/vars';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import TagList from './Tag/TagList';
import Location from './Location/Location';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
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
};

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
  const [value, setValue] = useState('');
  const onSubmit = e => {
    e.preventDefault();
  };

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
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        format={formats}
        placeholder=""
      />
    </form>
  );
}

export default Editor;
