import {createSelector} from 'reselect';


const selectShop = state=> state.shop;

export const selectColletions = createSelector (
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview= createSelector (
    [selectColletions],
    collections => Object.keys(collections).map(key=> collections[key])
)

export const selectCollection = collectionUrlParam =>
createSelector(
    [selectColletions],
    collections => collections[collectionUrlParam]
);


