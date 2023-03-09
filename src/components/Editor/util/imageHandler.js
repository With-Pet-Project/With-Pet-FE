/* eslint-disable camelcase */
import { ACCESS_CLIENT } from 'lib/APIs/client';

export const imageHandler = (QuillRef, setImg) => {
  const input = document.createElement('input');
  const formData = new FormData();

  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files;
    if (file !== null) {
      formData.append('images', file[0]);
    }

    try {
      const res = await ACCESS_CLIENT.post('/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const url = res.data.data[0].content;

      const range = QuillRef.current?.getEditor().getSelection()?.index;

      if (range !== null && range !== undefined) {
        const quill = QuillRef.current?.getEditor();

        quill?.setSelection(range, 1);

        quill?.clipboard.dangerouslyPasteHTML(
          range,
          `<img src=${url} alt="업로드 이미지" />`,
        );
      }
      setImg(url);
      return { ...res.data.data, success: true };
    } catch (e) {
      return { ...e.response, success: false };
    }
  };
};
