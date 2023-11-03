// Globals
import React, { ReactNode, useCallback, MouseEvent } from 'react';
import { SelectProps } from 'antd';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

// Components
import { CloseIcon } from '@/icons';
import EmptyDataThumbnail from '../EmptyDataThumbnail/EmptyDataThumbnail';
import PureIconButton from '../PureIconButton/PureIconButton';
import {
  StyledDownIcon,
  StyledDownWrapper,
  StyledPrefix,
  StyledSelect,
  StyledTag,
  StyledWrapper,
} from './SelectStyles';

// Helpers
import { useThemeToken } from '@/hooks';

export type TSelectOption<V> = {
  value: V;
  label: string | JSX.Element;
};

export type TSelectOptions<V> = Array<TSelectOption<V>>;

export interface ISelectProps<Value, OptionValue>
  extends SelectProps<Value, TSelectOption<OptionValue>> {
  options: TSelectOptions<OptionValue>;
  isMultiselect?: boolean;
  noResultMessage?: string;
  prefix?: ReactNode;
}

const Select = <
  Value extends string | number | number[] | string[],
  OptionValue extends string | number,
>({
  isMultiselect,
  options,
  noResultMessage,
  showArrow = true,
  value,
  suffixIcon,
  prefix,
  id,
  ...props
}: ISelectProps<Value, OptionValue>): JSX.Element => {
  const token = useThemeToken();

  const renderTag = useCallback(
    ({ label, onClose }: CustomTagProps) => {
      const handleClose = (evt: MouseEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
        onClose();
      };

      const onPreventMouseDown = (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
      };

      return (
        <StyledTag
          onMouseDown={onPreventMouseDown}
          $primaryColor={token.colorPrimary}
        >
          <span>{label}</span>
          <PureIconButton onClick={handleClose}>
            <CloseIcon />
          </PureIconButton>
        </StyledTag>
      );
    },
    [token.colorPrimary],
  );

  const renderDropdown = useCallback(
    (menu: ReactNode) => <StyledDownWrapper>{menu}</StyledDownWrapper>,
    [],
  );

  const selectComponent = (
    <StyledSelect<Value, TSelectOption<OptionValue>>
      {...props}
      value={value}
      options={options}
      optionFilterProp='label'
      tagRender={renderTag}
      dropdownRender={renderDropdown}
      notFoundContent={<EmptyDataThumbnail message={noResultMessage} />}
      {...(isMultiselect ? { mode: 'multiple' } : {})}
      {...(showArrow
        ? {
            suffixIcon: <StyledDownIcon />,
            showArrow: true,
          }
        : { showArrow: false })}
      {...(suffixIcon ? { suffixIcon, showArrow: true } : {})}
      // Hack for disabling browser autocomplete
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      autoComplete='dontshow'
    />
  );

  return (
    <StyledWrapper id={id}>
      {!!prefix && <StyledPrefix>{prefix}</StyledPrefix>}

      {selectComponent}
    </StyledWrapper>
  );
};

export default Select;
