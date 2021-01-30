import { useDispatch } from 'react-redux';
import { changeBillingTime } from '../../redux/pricing/pricingSlice';
import Toggle from '../../components/Toggle/Toggle'

const AppToggle = () => {
    const dispatch = useDispatch();

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const isChecked = e.currentTarget.checked;
        if (isChecked) {
            dispatch(changeBillingTime("year"))
        } else {
            dispatch(changeBillingTime("month"))
        }
    }

    return(
        <Toggle onChange={handleOnChange} />
    )

}

export default AppToggle