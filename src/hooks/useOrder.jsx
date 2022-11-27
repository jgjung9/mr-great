import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getOrderFromUser,
  addOrderToUser,
  removeOrderFromUser,
} from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useOrder() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const orderQuery = useQuery(['orders'], () => getOrderFromUser(uid), {
    staleTime: 1000 * 60,
  });

  const addOrder = useMutation(({ uid, order }) => addOrderToUser(uid, order), {
    onSuccess: () => queryClient.invalidateQueries(['orders']),
  });

  const removeOrder = useMutation(({ uid, orderId }) => removeOrderFromUser);

  return { orderQuery, addOrder, removeOrder };
}
