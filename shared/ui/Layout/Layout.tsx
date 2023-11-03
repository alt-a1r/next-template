import React from 'react';
import { Layout as AntdLayout, LayoutProps } from 'antd';

type ILayout = LayoutProps;

const Layout = (props: ILayout) => <AntdLayout {...props} />;

export default Layout;
