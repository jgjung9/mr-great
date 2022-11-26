import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getOrder, addOrderToUser, removeOrderFromUser } from '../api/firebase';

export default function useOrder() {
  const queryClient = useQueryClient();

  const orderQuery = useQuery(['orders'], getOrder, { staleTime: 1000 * 60 });

  const addOrder = useMutation(({ uid, cart }) => addOrderToUser(uid, cart), {
    onSuccess: () => queryClient.invalidateQueries(['orders']),
  });

  const removeOrder = useMutation(({ uid, orderId }) => removeOrderFromUser);
}
