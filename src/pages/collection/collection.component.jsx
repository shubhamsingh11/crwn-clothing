import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.style.scss';

const CollectionPage = ({ match }) => (
    <div className='category'>
        <h2>CATEGORY PAGE</h2>
    </div>

)

const mapsStatesToProps = (state , ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapsStatesToProps)(CollectionPage);