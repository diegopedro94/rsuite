import * as React from 'react';

import { FormControlPickerProps } from '../@types/common';
import { BaseSelectProps } from '../SelectPicker/SelectPicker.d';
import { TagProps } from '../Tag/Tag.d';

export interface InputPickerProps extends FormControlPickerProps<any>, BaseSelectProps {
  /** Settings can create new options */
  creatable?: boolean;

  /**
   * Tag related props.
   * https://github.com/rsuite/rsuite/blob/master/src/Tag/Tag.d.ts
   */
  tagProps?: TagProps;
}

declare const InputPicker: React.ComponentType<InputPickerProps>;

export default InputPicker;
