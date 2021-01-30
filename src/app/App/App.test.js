import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Context as ResponsiveContext } from 'react-responsive'
import store from '../../redux/store'
import App from './App';

describe('App renders correctly', () => {
  
  it('abbreviates discount text when in mobile screen', () => {  
    render(
      <ResponsiveContext.Provider value={{ width: 375 }}>
        <Provider store={store}>
          <App />
        </Provider>
      </ResponsiveContext.Provider>
    );

    expect(screen.getByText(/-25%/i)).toBeInTheDocument();
  });
})

describe('App redux functional tests', () => {
  beforeEach(()=> {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  })

  it('renders with initial redux store values', () => {        
    expect(screen.getByText(/100K pageviews/i)).toBeInTheDocument();
    expect(screen.getByText(/\$16.00/i)).toBeInTheDocument();
    expect(screen.getByText(/\/ month/i)).toBeInTheDocument();
  });

  it('updates when redux store values changes', () => {  
    const appSlider = screen.getByRole('slider')
    const appToggle = screen.getByRole('switch')
    fireEvent.change(appSlider, { target: { value: 0 }})
    fireEvent.click(appToggle)

    expect(screen.getByText(/10K pageviews/i)).toBeInTheDocument();
    expect(screen.getByText(/\$72.00/i)).toBeInTheDocument();
    expect(screen.getByText(/\/ year/i)).toBeInTheDocument();
  });
})





