import { BaseProps } from '../../../../../types/baseProps';

export type PaginationButtonProps = {
  pageNumber?: number;
  current?: boolean;
  disabled: boolean;
  onClick: (pageNumber: number) => void;
} & BaseProps;
