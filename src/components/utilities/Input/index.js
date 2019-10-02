import React from "react"
import styled, { css } from "styled-components"
import { lighten } from "polished"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Color, Type, Button } from "../"

const InputStyles = css`
  display: block;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1rem;
  font-family: ${Type.text};
  width: 100%;
  box-sizing: border-box;
  border: ${lighten(0.3, Color.grey)} 1px solid;
  color: ${lighten(0.01, Color.grey)};

  &:focus {
    outline: none;
    color: ${Color.black};
    border-color: ${Color.green};
  }

  &::placeholder {
    color: ${lighten(0.4, Color.grey)};
  }
`

const StyledInput = styled.div`
  label {
    display: block;
    font-family: ${Type.header};
    padding: 0.4rem 0;
    color: ${Color.black};
  }

  input,
  textarea,
  select {
    ${InputStyles}
  }

  .sublabel {
    font-size: 0.8rem;
    color: ${lighten(0.2, Color.grey)};
  }
`

const FakeInput = styled.div`
  ${InputStyles}
  padding: 0.7rem 1rem;
  cursor: pointer;
  margin-bottom: 0;
`

const InputGrid = styled.div`
  display: flex;
  margin-bottom: 1rem;

  ${Button} {
    flex-shrink: 1;
    flex-grow: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const SelectInput = ({
  children,
  name,
  displayData = ({ value }) => (value ? value : "Select..."),
  onOpenSelect,
  onRemoveSelect,
  remove = true,
  value = null,
}) => (
  <StyledInput>
    <label htmlFor={name}>{children}</label>
    <InputGrid>
      <FakeInput onClick={onOpenSelect}>{displayData({ value })}</FakeInput>
      {remove && value && (
        <Button
          modifiers="danger"
          title="Remove"
          onClick={onRemoveSelect}
          type="button"
        >
          <FontAwesomeIcon icon="times" />
        </Button>
      )}
    </InputGrid>
  </StyledInput>
)

export const restrictCurrencyInput = e => {
  const re = /^[0-9.]+$/
  const keyCode = e.keyCode || e.which
  const keyValue = String.fromCharCode(keyCode)

  if (!re.test(keyValue)) {
    e.preventDefault()
  }
}

const CurrencyAppend = styled.div`
  padding: 1rem;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 1.5rem;
`

export const NumberInput = props => (
  <Input onKeyPress={restrictCurrencyInput} {...props} />
)

export const CurrencyInput = ({ ...props }) => (
  <FlexInput
    onKeyPress={restrictCurrencyInput}
    appendChildren={<CurrencyAppend>$</CurrencyAppend>}
    {...props}
  />
)

export const PercentageInput = ({ ...props }) => (
  <FlexInput
    onKeyPress={restrictCurrencyInput}
    appendChildren={<CurrencyAppend>%</CurrencyAppend>}
    {...props}
  />
)

export const FlexInput = ({
  children,
  appendChildren,
  prependChildren,
  name = "",
  ...props
}) => (
  <StyledInput>
    <label htmlFor={name}>{children}</label>
    <InputGrid>
      {appendChildren && <div>{appendChildren}</div>}
      <input
        id={name}
        name={name}
        placeholder={props.placeholder || children}
        {...props}
      />
      {prependChildren && <div>{prependChildren}</div>}
    </InputGrid>
  </StyledInput>
)

const prepDateValue = ({ date, onChange, name }) => {
  const e = {
    target: {
      type: "date",
      value: date,
      name: name,
    },
  }
  onChange(e)
}

export const Input = ({ children, name = "", ...props }) => (
  <StyledInput>
    <label htmlFor={name}>{children}</label>
    <input
      id={name}
      name={name}
      placeholder={props.placeholder || children}
      {...props}
    />
  </StyledInput>
)

export const Select = ({ label, name = "", options = [], ...props }) => (
  <StyledInput>
    <label htmlFor={name}>{label}</label>
    <select id={name} name={name} {...props}>
      {options.map((op, ix) => (
        <option value={op.value} key={ix}>
          {op.label ? op.label : op.value}
        </option>
      ))}
    </select>
  </StyledInput>
)

export const Textarea = ({ label, sublabel, ...props }) => (
  <StyledInput>
    <label>{label}</label>
    {sublabel && <span className="sublabel">{sublabel}</span>}
    <textarea {...props} />
  </StyledInput>
)
