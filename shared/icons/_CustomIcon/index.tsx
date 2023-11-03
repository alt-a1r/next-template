import React, { FC, SVGAttributes } from 'react';
import Icon from '@ant-design/icons';

export interface ICustomIconProps {
  rotate?: number;
  spin?: boolean;
  style?: React.CSSProperties;
}

interface ICommonCustomIcon extends ICustomIconProps {
  icon: FC<SVGAttributes<SVGElement>>;
}

const CustomIcon = ({ icon, ...props }: ICommonCustomIcon) => (
  <Icon component={icon} {...props} />
);

export default CustomIcon;
