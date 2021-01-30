import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import AppToggle from './AppToggle'
import store from '../../redux/store'

it('appToggle updates redux store values', () => {
    render(
        <Provider store={store}>
            <AppToggle />
        </Provider>
    )

    const expectedInitialValue = { 
        billingTime: "month", 
        pageViews: "100K",
        price: 16
    }

    const expectedToggledValue = { 
        billingTime: "year", 
        pageViews: "100K",
        price: 144
    }

    const appToggle = screen.getByRole('switch')

    const initialValue = store.getState().pricing
    expect(initialValue).toMatchObject(expectedInitialValue)

    fireEvent.click(appToggle)
    const toggledValue = store.getState().pricing
    expect(toggledValue).toMatchObject(expectedToggledValue)
});