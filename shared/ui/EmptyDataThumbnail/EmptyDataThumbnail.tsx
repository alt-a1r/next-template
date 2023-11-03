import React from 'react';
import { Empty } from 'antd';

interface IEmptyDataThumbnail {
  message?: string | JSX.Element;
  className?: string;
}

const EmptyDataThumbnail = ({
  message = 'No data',
  className,
}: IEmptyDataThumbnail) => (
  <Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}
    description={message}
    className={className}
  />
);

export default EmptyDataThumbnail;
