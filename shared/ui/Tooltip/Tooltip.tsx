import React from 'react';
import { Tooltip as AntTooltip, TooltipProps } from 'antd';
import { TooltipGlobalStyle } from './TooltipStyles';

export type ITooltipProps = TooltipProps;

const Tooltip = ({ children, ...props }: ITooltipProps): JSX.Element => (
  <>
    <AntTooltip {...props} color='#ffffff'>
      <span>{children}</span>
    </AntTooltip>
    <TooltipGlobalStyle />
  </>
);

export default Tooltip;
