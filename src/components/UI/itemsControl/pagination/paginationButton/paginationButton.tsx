import { BaseProps } from '@app_types/baseProps';
import classNames from './paginationButton.module.css';

export type PaginationButtonProps = {
  pageNumber: number;
  current?: boolean;
  disabled: boolean;
  onClick: (pageNumber: number) => void;
} & BaseProps;

export function PaginationButton({
  pageNumber,
  current,
  disabled,
  onClick,
  children,
}: PaginationButtonProps) {
  return (
    <button
      data-testid={children}
      disabled={disabled}
      className={`${classNames.page} ${current ? classNames.pageCurrent : ''} ${
        disabled ? classNames.pageDisabled : ''
      }`}
      onClick={() => onClick(pageNumber)}
    >
      {children}
    </button>
  );
}
