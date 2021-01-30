import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import AppSlider from './AppSlider'
import store from '../../redux/store'

it('appSlider updates redux store values', () => {
    render(
        <Provider store={store}>
            <AppSlider />
        </Provider>
    )

    const correctValues = [
        {value: 0, pageViews: "10K", price: 8},
        {value: 25, pageViews: "50K", price: 12},
        {value: 50, pageViews: "100K", price: 16},
        {value: 75, pageViews: "500K", price: 24},
        {value: 100, pageViews: "1M", price: 36},
    ]

    const appSlider = screen.getByRole('slider')

    correctValues.forEach(el => {
        fireEvent.change(appSlider, { target: { value: el.value }})

        const pageViews = store.getState().pricing.pageViews
        const price = store.getState().pricing.price
        expect(pageViews).toBe(el.pageViews)
        expect(price).toBe(el.price)
    })

});