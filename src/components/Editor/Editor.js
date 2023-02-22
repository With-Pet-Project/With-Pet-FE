/* eslint-disable import/no-extraneous-dependencies */
import './Editor.scss';
import { ARTICLE_TAG } from 'lib/constants/articleTag';

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

function Editor() {
  const [value, setValue] = useState('');

  return (
    <form>
      <div className="editor-filter-container">
        <TagList />
        <Location />
      </div>
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
