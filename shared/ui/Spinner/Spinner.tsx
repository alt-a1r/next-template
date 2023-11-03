import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined spin />;

const Spinner = () => {
  return <Spin indicator={antIcon} />;
};

export default Spinner;
