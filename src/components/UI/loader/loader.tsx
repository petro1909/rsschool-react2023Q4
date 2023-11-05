import classNames from './loader.module.css';
import { LoaderProps } from './loaderProps';
export function Loader({ width = 48, height = 48 }: LoaderProps) {
  return <div style={{ width: width, height: height }} className={classNames.itemsLoader} />;
}
