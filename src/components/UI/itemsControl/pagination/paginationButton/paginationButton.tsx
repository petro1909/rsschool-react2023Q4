import { BaseProps } from '../../../../../types/baseProps';
import classNames from './paginationButton.module.css';

export type PaginationButtonProps = {
  pageNumber?: number;
  current?: boolean;
  disabled: boolean;
  onClick: (pageNumber: number) => void;
} & BaseProps;

export function PaginationButton(props: PaginationButtonProps) {
  return (
    <button
      disabled={props.disabled}
      className={`${classNames.page} ${props.current ? classNames.pageCurrent : ''} ${
        props.disabled ? classNames.pageDisabled : ''
      }`}
      onClick={() => props.onClick(props.pageNumber!)}
    >
      {props.children}
    </button>
  );
}
