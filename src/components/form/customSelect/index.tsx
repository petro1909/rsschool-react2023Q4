import classNames from './index.module.css';
import React, { useState, useImperativeHandle, useRef } from 'react';
import { FieldError } from 'react-hook-form';

import arrowUp from '@assets/arrow-up.svg';
import arrowDown from '@assets/arrow-down.svg';
import { InputWrapper } from '../customInputWrapper';
import { HighlightedItem } from './higlightedIntm';
import { ValidationError } from 'yup';

type CustomAutocompleteSelectProps = {
  elements: string[];
  id: string;
  placeholder?: string;
  label: string;
  error?: FieldError | ValidationError | undefined;
};

export const CustomAutocompleteSelect = React.forwardRef<HTMLInputElement, CustomAutocompleteSelectProps>(
  ({ elements, id, placeholder, label, error, ...rest }: CustomAutocompleteSelectProps, ref) => {
    const [countries, setCountries] = useState(elements);
    const [inputValue, setInputValue] = useState('');
    const [elementsVisibility, setElementsVisibility] = useState(false);

    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current!);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      e.preventDefault();
      setInputValue(e.target.value);
      setElementsVisibility(true);
      setCountries(elements.filter((country) => country.includes(e.target.value)));
    };

    const handlerSelectList = (value: string) => {
      innerRef.current?.focus();
      setInputValue(value);
      setCountries(elements.filter((country) => country.includes(value)));
      setElementsVisibility(false);
    };

    return (
      <InputWrapper id={id} label={label} error={error}>
        <section className={classNames.inputWrapper}>
          <input
            type="text"
            id={id}
            placeholder={placeholder}
            {...rest}
            ref={innerRef}
            value={inputValue}
            onChange={handleChange}
            onFocus={() => setElementsVisibility(true)}
          />
          <button
            className={classNames.toggleButton}
            onClick={(e) => {
              e.preventDefault();
              setElementsVisibility(!elementsVisibility);
            }}
          >
            <img alt="toggle visibility" src={elementsVisibility ? arrowUp : arrowDown} />
          </button>
          <section className={[classNames.countriesWrapper, elementsVisibility ? classNames.visible : ''].join(' ')}>
            {countries.map((country) => (
              <HighlightedItem onMouseDown={() => handlerSelectList(country)} key={country} item={country} highlightedValue={inputValue} />
            ))}
          </section>
        </section>
      </InputWrapper>
    );
  }
);
