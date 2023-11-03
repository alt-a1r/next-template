import React from 'react';
import NextImage, { ImageProps } from 'next/image';

export type IImage = ImageProps;

const Image = (props: IImage) => {
  const { src, fill = true } = props;

  return <NextImage {...props} src={src || '/images/thumb.jpg'} fill={fill} />;
};

export default Image;
