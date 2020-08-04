import { useState } from 'react';

export const useInputValue = (initialState) => {
  const [state, setState] = useState(initialState);
  const onChange = e => setState(e.target.value);

  return {
    value: state,
    onChange,
  }
}