/* eslint-disable camelcase */
import CLIENT from 'lib/APIs/client';

export const imageHandler = QuillRef => {
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
      const jwt_token = localStorage.getItem('jwt_token');
      const res = await CLIENT.post('/image', formData, {
        headers: {
          Authorization: `Bearer ${jwt_token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      const url = res.data.data[0].content;
      console.log(url);
      const range = QuillRef.current?.getEditor().getSelection()?.index;

      if (range !== null && range !== undefined) {
        const quill = QuillRef.current?.getEditor();

        quill?.setSelection(range, 1);

        quill?.clipboard.dangerouslyPasteHTML(
          range,
          `<img src=${url} alt="업로드 이미지" />`,
        );
      }
      return { ...res.data.data, success: true };
    } catch (e) {
      return { ...e.response, success: false };
    }
  };
};
