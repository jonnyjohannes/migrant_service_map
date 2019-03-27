import React from "react";
import { connect } from "react-redux";
import {
  toggleProviderVisibility,
  saveProvider,
  unsaveProvider,
  clearDistanceFilter,
  changeDistanceFilter,
  changeVisaFilter,
  clearVisaFilter
} from "../../redux/actions";
import { getProvidersSorted } from "../../redux/selectors.js";
import Menu from "./menu";

const VISAS = ['visa1', 'visa2', 'visa3'];

const MenuContainer = props => {
  return <Menu {...props} />;
};

const mapStateToProps = state => {
  return {
    providersList: getProvidersSorted(state),
    highlightedProviders: state.highlightedProviders,
    savedProviders: state.providers.savedProviders,
    visas: VISAS,
    visibleTypes: state.providerTypes.visible,
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleProviderVisibility: providerType => {
      dispatch(toggleProviderVisibility(providerType));
    },
    saveProvider: id => {
      dispatch(saveProvider(id));
    },
    unsaveProvider: id => {
      dispatch(unsaveProvider(id));
    },
    clearDistanceFilter: () => {
      dispatch(clearDistanceFilter());
    },
    changeDistanceFilter: distance => {
      dispatch(changeDistanceFilter(distance));
    },
    clearVisaFilter: () => {
      dispatch(clearVisaFilter());
    },
    changeVisaFilter: visa => {
      dispatch(changeVisaFilter(visa));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
