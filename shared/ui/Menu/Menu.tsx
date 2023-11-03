import React from 'react';
import { Menu as AntdMenu, MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';

export type IMenu = MenuProps;
export type IMenuItemType = ItemType;

const Menu = ({ ...props }: IMenu) => <AntdMenu {...props} />;

export default Menu;
