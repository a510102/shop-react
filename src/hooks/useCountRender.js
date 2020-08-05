import { useRef } from 'react';

export const useCountRender = () => {
  const render = useRef(0);
  console.log("render", render.current++)
}