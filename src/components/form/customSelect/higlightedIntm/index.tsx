import classNames from './index.module.css';

type HighlightedItemProps = {
  item: string;
  highlightedValue: string;
  onMouseDown: () => void;
};

export const HighlightedItem = ({ item, highlightedValue, onMouseDown }: HighlightedItemProps) => {
  const higlight = () => {
    const divided = item.split(highlightedValue);
    return (
      <p onMouseDown={onMouseDown} key={item} className={classNames.item}>
        {divided.map((wordPart, index) => (
          <span key={index}>
            <span>{wordPart}</span>
            {index !== divided.length - 1 && <span className={classNames.highlight}>{highlightedValue}</span>}
          </span>
        ))}
      </p>
    );
  };
  return higlight();
};
