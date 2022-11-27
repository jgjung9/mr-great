import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getAllDelivery,
  getDeliveryByUserId,
  addOrUpdateDelivery,
} from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useDelivery() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const deliveryQuery = useQuery(['delivery'], getAllDelivery, {
    staleTime: 1000 * 60,
  });

  const getDelivery = useMutation(({ uid }) => getDeliveryByUserId(uid), {
    onSuccess: () => queryClient.invalidateQueries('delivery'),
  });

  const addDelivery = useMutation(
    ({ uid, delivery }) => addOrUpdateDelivery(uid, delivery),
    {
      onSuccess: () => queryClient.invalidateQueries('delivery'),
    }
  );

  return { deliveryQuery, getDelivery, addDelivery };
}
