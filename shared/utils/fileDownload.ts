const fileDownload = (data: File | string, fileName: string, type: string) => {
  const a = document.createElement('a');
  document.body.appendChild(a);

  const blob = new Blob([data], {
    type,
  });

  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

export default fileDownload;
