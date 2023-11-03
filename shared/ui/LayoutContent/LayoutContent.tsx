import React, { ReactNode } from 'react';
import { Layout as AntdLayout } from 'antd';

interface ILayoutComponent {
  className?: string;
  children?: ReactNode;
}

const LayoutContent = (props: ILayoutComponent) => (
  <AntdLayout.Content {...props} />
);

export default LayoutContent;
