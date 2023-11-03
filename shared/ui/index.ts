import dynamic from 'next/dynamic';

import type { default as SelectType } from './Select/Select';

export const Layout = dynamic(() => import('./Layout/Layout'));
export const LayoutSidebar = dynamic(
  () => import('./LayoutSidebar/LayoutSidebar'),
);
export const LayoutContent = dynamic(
  () => import('./LayoutContent/LayoutContent'),
);
export const EmptyDataThumbnail = dynamic(
  () => import('./EmptyDataThumbnail/EmptyDataThumbnail'),
);
export const Button = dynamic(() => import('./Button/Button'));
export const Input = dynamic(() => import('./Input/Input'));
export const InputNumber = dynamic(() => import('./Input/InputNumber'));
export const PasswordInput = dynamic(() => import('./Input/PasswordInput'));
export const TextArea = dynamic(() => import('./Input/TextArea'));
export const Select = dynamic(
  () => import('./Select/Select'),
) as typeof SelectType;
export const PureIconButton = dynamic(
  () => import('./PureIconButton/PureIconButton'),
);
export const Dropdown = dynamic(() => import('./Dropdown/Dropdown'));
export const Image = dynamic(() => import('./Image/Image'));
export const Avatar = dynamic(() => import('./Avatar/Avatar'));
export const Menu = dynamic(() => import('./Menu/Menu'));
export const Slider = dynamic(() => import('./Slider/Slider'));
export const Spinner = dynamic(() => import('./Spinner/Spinner'));
export const Skeleton = dynamic(() => import('./Skeleton/Skeleton'));
export const Radio = dynamic(() => import('./Radio/Radio'));
export const RadioGroup = dynamic(() => import('./RadioGroup/RadioGroup'));
export const Checkbox = dynamic(() => import('./Checkbox/Checkbox'));
export const Tooltip = dynamic(() => import('./Tooltip/Tooltip'));
export const Tag = dynamic(() => import('./Tag/Tag'));
export const TextTruncate = dynamic(
  () => import('./TextTruncate/TextTruncate'),
);

export type {
  ISelectProps,
  TSelectOption,
  TSelectOptions,
} from './Select/Select';
export type {
  IRadioGroupProps,
  IRadioChangeEvent,
} from './RadioGroup/RadioGroup';
export type { ICheckboxChangeEvent } from './Checkbox/Checkbox';
export type { IMenu, IMenuItemType } from './Menu/Menu';
export type { IImage } from './Image/Image';
