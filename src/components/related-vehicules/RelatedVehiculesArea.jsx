import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { requestVehicles } from '../../redux/related-vehicules/RelatedVehiculesActions';

import Spinner from '../spinner/Spinner';

import { AreaContainer, AreaHeader } from './RelatedVehiculesArea.styles';

const RelatedVehiculesArea = ({ relatedItems, children, onRequestVehicles, items }) => {
    useEffect(() => {
        if (relatedItems.length) {
            onRequestVehicles(relatedItems)
        }
    }, [relatedItems, onRequestVehicles]);
    const renderRelatedFeatures = () => {
        if (relatedItems.length) {
            if (items) {
                return items.map(item => <p key={item.name} >{ item.name }</p>)
            } else {
                return <Spinner />;
            }
        } else {
            return <div>Non renseigné</div>
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
    items: state.vehicles.items
});
const mapDispatchToProps = dispatch => ({
    onRequestVehicles: (relatedItems) => dispatch(requestVehicles(relatedItems))
});
export default connect(mapStateToProps, mapDispatchToProps)(RelatedVehiculesArea);