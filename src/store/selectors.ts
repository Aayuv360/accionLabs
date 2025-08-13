
import { createSelector } from '@reduxjs/toolkit';
import { AppState } from './index';

export const selectCartItems = (state: AppState) => state.cart.items;
export const selectSearchKeyword = (state: AppState) => state.search.keyword;

export const selectCartTotalItems = createSelector(
  [selectCartItems],
  (items) => Object.values(items).reduce((sum, qty) => sum + qty, 0)
);

export const selectCartItemQuantity = (productId: string) =>
  createSelector(
    [selectCartItems],
    (items) => items[productId] || 0
  );
