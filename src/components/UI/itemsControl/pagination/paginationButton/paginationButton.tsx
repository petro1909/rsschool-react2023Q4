import classNames from './paginationButton.module.css';
import { PaginationButtonProps } from './paginationButtonProps';
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
