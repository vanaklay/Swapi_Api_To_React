import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestStarships } from '../../redux/related-starships/RelatedStarshipsActions';

import Spinner from '../spinner/Spinner';

import { AreaContainer, AreaHeader, NothingRelated } from './RelatedStartshipsArea.styles';

const RelatedStarshipsArea = ({ relatedItems, children, onRequestStarships, items }) => {
    useEffect(() => {
        if (relatedItems.length) {
            onRequestStarships(relatedItems)
        }
    }, [relatedItems, onRequestStarships]);
    const renderRelatedFeatures = () => {
        if (relatedItems.length) {
            if (items) {
                return items.map(item => <p key={item.name} >{ item.name }</p>)
            } else {
                return <Spinner />;
            }
        } else {
            return <NothingRelated>n/a</NothingRelated>
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
    items: state.starships.items
});
const mapDispatchToProps = dispatch => ({
    onRequestStarships: (relatedItems) => dispatch(requestStarships(relatedItems))
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedStarshipsArea);