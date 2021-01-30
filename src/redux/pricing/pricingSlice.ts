import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store'

export type PageViewType = '10K' | '50K' | '100K' | '500K' | '1M';
export type BillingTime = 'month' | 'year';

function getMonthlyPricing(pageView: PageViewType) {
  switch(pageView) {
    case '10K' : return 8;
    case '50K' : return 12;
    case '100K' : return 16;
    case '500K' : return 24;
    case '1M' : return 36;
  }
}

function getYearlyPricing(pageView: PageViewType) {
  const discountPercent = 25
  const monthlyPrice = getMonthlyPricing(pageView)
  
  return (monthlyPrice * 12)*(1-discountPercent/100)
}

function getPriceUtil(pageView: PageViewType, billingTime : BillingTime) {
  if (billingTime === 'month')
    return getMonthlyPricing(pageView)
  else
    return getYearlyPricing(pageView)
}

interface PageViewAction {
  type: string
  payload: PageViewType
}

interface BillingTimeAction {
  type: string
  payload: BillingTime
}

interface PricingState {
  pageViews : PageViewType,
  price : number,
  billingTime : BillingTime
}

export const pricingSlice = createSlice({
    name: 'price',

    initialState: {
      pageViews: '100K',
      price: 16,
      billingTime: 'month' 
    } as PricingState,

    reducers: {
      changePageView: (state, action: PageViewAction) => {
        return {
          ...state,
          pageViews: action.payload,
          price: getPriceUtil(action.payload, state.billingTime)
        }
      },
      changeBillingTime: (state, action : BillingTimeAction) => {
        const billingTime = action.payload
        const price = getPriceUtil(state.pageViews, billingTime)

        return {
          ...state,
          price: price,
          billingTime: billingTime
        }
      }
    },
  });

  export const { changePageView, changeBillingTime } = pricingSlice.actions;
  export const selectPricing = (state : RootState) => state.pricing;
  export default pricingSlice.reducer;