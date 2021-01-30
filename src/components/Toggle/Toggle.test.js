import { fireEvent, render, screen } from '@testing-library/react';
import Toggle from './Toggle';

describe('toggle functional test', () => {

  it('toggles on and off with aria', () => {
    render(<Toggle />)
    const toggleNode = screen.getByRole('switch')

    //expect(toggleNode.checked).toEqual(false)
    expect(toggleNode.getAttribute("aria-checked")).toBe("false");
    fireEvent.click(toggleNode)
    //expect(toggleNode.checked).toEqual(true)
    expect(toggleNode.getAttribute("aria-checked")).toBe("true");
  });
  
  it('triggers onChange callback when toggled', () => {
    const callback = jest.fn();
    render(<Toggle onChange={callback} />)
    const toggleNode = screen.getByRole('switch')
  
    fireEvent.click(toggleNode)
    expect(callback).toHaveBeenCalledTimes(1);
    fireEvent.click(toggleNode)
    expect(callback).toHaveBeenCalledTimes(2);
  });
  
})
