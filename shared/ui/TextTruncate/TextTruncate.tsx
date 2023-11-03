import React, { useCallback, useState } from 'react';
import {
  StyledMoreButton,
  StyledParagraph,
  StyledUpIcon,
} from './TextTruncateStyles';
import { ChevronIcon } from '@/icons';

interface ITextTruncate {
  rows?: number;
  expandable?: boolean;
  showMore?: string;
  showLess?: string;
  text: string;
  className?: string;
}

const TextTruncate = ({
  expandable,
  rows = 1,
  showMore,
  showLess,
  text,
  className,
}: ITextTruncate) => {
  const [ellipsis, setEllipsis] = useState(true);

  const handleExpand = useCallback(() => {
    setEllipsis(false);
  }, []);

  const handleClose = useCallback(() => {
    setEllipsis(true);
  }, []);

  return (
    <>
      <StyledParagraph
        ellipsis={ellipsis ? { rows } : false}
        className={className}
      >
        {text}
      </StyledParagraph>

      {expandable && ellipsis && (
        <StyledMoreButton onClick={handleExpand}>
          {showMore}
          <ChevronIcon />
        </StyledMoreButton>
      )}

      {expandable && !ellipsis && (
        <StyledMoreButton onClick={handleClose}>
          {showLess}
          <StyledUpIcon />
        </StyledMoreButton>
      )}
    </>
  );
};

export default TextTruncate;
