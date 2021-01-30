import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Slider from './Slider';

it('renders with props', () => {
  render(<Slider initialValue={50} step={25} min={0} max={100} />)
  const sliderNode = screen.getByRole('slider')

  expect(sliderNode.getAttribute("value")).toBe("50");
  expect(sliderNode.getAttribute("step")).toBe("25");
  expect(sliderNode.getAttribute("min")).toBe("0");
  expect(sliderNode.getAttribute("max")).toBe("100");
});

describe('slider functional test', () => {

  it('triggers onChange callback when slider value is changed', () => {
    const callback = jest.fn();
    render(<Slider initialValue={0} onChange={callback} />)
    const sliderNode = screen.getByRole('slider')
  
    fireEvent.change(sliderNode, { target: { value: '1' }})
    expect(callback).toHaveBeenCalledTimes(1);
    fireEvent.change(sliderNode, { target: { value: '2' }})
    expect(callback).toHaveBeenCalledTimes(2);
  });

})
