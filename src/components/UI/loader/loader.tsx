import classNames from './loader.module.css';

type LoaderProps = {
  width?: number;
  height?: number;
};

export function Loader({ width = 48, height = 48 }: LoaderProps) {
  return (
    <div
      data-testid={'loader'}
      style={{ width: width, height: height }}
      className={classNames.itemsLoader}
    />
  );
}
