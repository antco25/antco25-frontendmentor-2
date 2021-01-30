import './AppSlider.scss'
import { useSelector, useDispatch } from 'react-redux';
import { selectPricing, changePageView, PageViewType } from '../../redux/pricing/pricingSlice'
import Slider from '../../components/Slider/Slider';

function valueToPageView(pageView : PageViewType) {
    switch(pageView) {
        case ("10K"):
            return 0;
        case ("50K"):
            return 25;
        case ("100K"):
            return 50;
        case ("500K"):
            return 75;
        case ("1M"):
            return 100;
        }
}

function pageViewToValue(value : number) : PageViewType {
    switch(true) {
        case (value <= 0):
            return ("10K")
        case (value <= 25):
            return ("50K")
        case (value <= 50):
            return ("100K")
        case (value <= 75):
            return ("500K")
        default:
            return ("1M")
        }
}

const AppSlider = () => {
    const dispatch = useDispatch();
    const initialPageViews = useSelector(selectPricing).pageViews;
    const initialValue = valueToPageView(initialPageViews);

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value);
        const pageView = pageViewToValue(value);
        dispatch(changePageView(pageView));
    }
    
    return (
        <Slider min={0} max={100} step={25} initialValue={initialValue} onChange={handleOnChange}/>
    )
}

export default AppSlider