import { createReducer } from 'reduxsauce';
import * as actionTypes from '$redux/addresses/constants';
import * as ACTIONS from '$redux/addresses/actions';

export const INITIAL_STATE: RootState = {
  addresses: [],
};

const addAddress: ActionHandler<typeof ACTIONS.addAddress> =
(state, { id, address }) => ({
  addresses: [...state.addresses, {
    id,
    address,
  }],
});

const editAddress: ActionHandler<typeof ACTIONS.editAddress> = (state, { id, address }) => ({
  addresses: state.addresses.map((stateAddress) => {
    if (stateAddress.id === id) {
      return {
        id,
        address,
      };
    }
    return stateAddress;
  }),
});

const HANDLERS = {
  [actionTypes.ADDRESSES_ACTIONS.ADD_ADDRESS]: addAddress,
  [actionTypes.ADDRESSES_ACTIONS.EDIT_ADDRESS]: editAddress,
};

export default createReducer(INITIAL_STATE, HANDLERS);
