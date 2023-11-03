import React, { ReactNode } from 'react';
import { Dropdown as AntdDropdown, DropDownProps } from 'antd';
import { DropdownGlobalStyle } from './DropdownStyles';

interface IDropdown extends DropDownProps {
  children: ReactNode;
}

const Dropdown = ({ children, ...props }: IDropdown) => (
  <>
    <AntdDropdown overlayClassName={'template-dropdown-overlay'} {...props}>
      {children}
    </AntdDropdown>
    <DropdownGlobalStyle />
  </>
);

export default Dropdown;
