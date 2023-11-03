import React from 'react';
import CustomIcon, { ICustomIconProps } from '../_CustomIcon';
import IconComponent from './Icon.svg';

const HeartFilledIcon = (props: ICustomIconProps) => (
  <CustomIcon icon={IconComponent} {...props} />
);

export default HeartFilledIcon;
