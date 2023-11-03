import React, { ReactNode } from 'react';
import { Image } from '@/ui';
import {
  StyledImageWrapper,
  StyledMessage,
  StyledTitle,
  StyledWrapper,
} from './ResultStyles';

interface IResult {
  image: string;
  title: string;
  message: string;
  children: ReactNode;
}

const Result = ({ image, title, message, children }: IResult) => {
  return (
    <StyledWrapper>
      <StyledImageWrapper>
        <Image src={image} alt='error image' />
      </StyledImageWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledMessage>{message}</StyledMessage>
      {children}
    </StyledWrapper>
  );
};

export default Result;
