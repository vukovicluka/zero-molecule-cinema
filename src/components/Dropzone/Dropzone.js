import React, { useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';

const baseStyle = {
  width: 329,
  height: 128,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderStyle: 'dashed',
  borderColor: '#bcbcbc',
  borderRadius: 5,
  marginTop: 12,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 18,
  lineHeight: 23,
  color: '#8f8f8f',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function Dropzone({ files, setFiles, poster }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            poster: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.poster} className='img' alt='preview' />
    </div>
  ));

  return (
    <>
      <div className='imageContainer'>
        {files.length > 0 ? (
          thumbs
        ) : poster ? (
          <img src={poster.url} alt='preview' className='img' />
        ) : null}
      </div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <span>Drop image here</span>
      </div>
    </>
  );
}

export default Dropzone;
