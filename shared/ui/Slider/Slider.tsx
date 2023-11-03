import React from 'react';
import { Slider as AntdSlider } from 'antd';
import { SliderSingleProps, SliderRangeProps } from 'antd/es/slider';

export type ISliderProps = SliderSingleProps | SliderRangeProps;
export type ISliderRangeProps = SliderRangeProps;

const Slider = ({ ...props }: ISliderProps): JSX.Element => (
  <AntdSlider {...props} />
);

export default Slider;
