import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../Preview-collection/collection.preview';
import {selectCollectionForPreview} from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionsProps}) => (
         <CollectionPreview key= {id} {...otherCollectionsProps} />
         ))}   
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

