import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestRelatedItems } from '../../redux/related-items/RelatedItemsActions';

import Spinner from '../spinner/Spinner';

import { AreaContainer, AreaHeader } from './RelatedArea.styles';

const RelatedArea = ({ relatedItems, children, onrequestRelatedItems, items }) => {
    useEffect(() => {
        if (relatedItems) {
            onrequestRelatedItems(relatedItems)
        }
    }, [relatedItems, onrequestRelatedItems]);
    const renderRelatedFeatures = () => {
        if (items) {
            return items.map(item => <p>{ item.title }</p>)
        } else {
            return <Spinner />;
        }
    }
    return (
        <AreaContainer>
            <AreaHeader>{ children }</AreaHeader>
            {renderRelatedFeatures()}
        </AreaContainer>
        );
};

const mapStateToProps = state => ({
    items: state.items.items
});
const mapDispatchToProps = dispatch => ({
    onrequestRelatedItems: (relatedItems) => dispatch(requestRelatedItems(relatedItems))
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedArea);