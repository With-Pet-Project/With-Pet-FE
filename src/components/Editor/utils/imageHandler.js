export const imageHandler = QuillRef => {
  const input = document.createElement('input');
  const url = '';

  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = () => {
    const file = input.files;
    const formData = new FormData();
    console.log(file);
    if (file !== null) {
      formData.append('image', file[0]);
    }
    const range = QuillRef.current?.getEditor().getSelection()?.index;
    console.log(range);
    /** try {
      // 백엔드에 formData 전송
      // const res = axios.get(...)
      // url = res.data.url;
      const range = QuillRef.current?.getEditor().getSelection()?.index;
      if (range) {
        const quill = QuillRef.current?.getEditor();

        quill?.setSelection(range, 1);

        quill?.clipboard.dangerouslyPasteHTML(
          range,
          `<img src=${url} alt="이미지 태그가 삽입됩니다." />`,
        );
      }
      // return { ...res, success: true };
    } catch (e) {
      // const err = e as AxiosError;
      //    return { ...err.response, success: false };
    } */
  };
};
