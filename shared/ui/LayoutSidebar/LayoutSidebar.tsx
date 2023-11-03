import React, { ReactNode } from 'react';
import { Layout as AntdLayout, SiderProps } from 'antd';

interface ILayoutSidebar extends SiderProps {
  className?: string;
  children: ReactNode;
}

const LayoutSidebar = (props: ILayoutSidebar) => (
  <AntdLayout.Sider {...props} />
);

export default LayoutSidebar;
