/* eslint-disable import/no-extraneous-dependencies */
import './Editor.scss';
import { ARTICLE_TAG } from 'lib/constants/articleTag';

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
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

function Editor() {
  const [value, setValue] = useState('');

  return (
    <>
      <div className="editor-title">
        <select>
          <option value="" selected disabled hidden>
            태그 선택
          </option>
        </select>
        <input type="text" className="editor-title-input" placeholder="제목" />
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        format={formats}
      />
    </>
  );
}

export default Editor;
