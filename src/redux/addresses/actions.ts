import { ADDRESSES_ACTIONS } from '$redux/addresses/constants';
import v4 from 'uuid';

export const addAddress = address => ({
  type: ADDRESSES_ACTIONS.ADD_ADDRESS,
  id: v4(),
  address,
});

export const editAddress = (id, address) => ({
  type: ADDRESSES_ACTIONS.EDIT_ADDRESS,
  id,
  address,
});
