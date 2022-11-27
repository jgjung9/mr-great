import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserInfoById, addAddressInfo, addCardInfo } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useOrder() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const userQuery = useQuery(['user'], () => getUserInfoById(uid), {
    staleTime: 1000 * 60,
  });

  const addAddress = useMutation(
    ({ uid, address }) => addAddressInfo(uid, address),
    {
      onSuccess: () => queryClient.invalidateQueries(['user']),
    }
  );

  const addCard = useMutation(({ uid, card }) => addCardInfo(uid, card), {
    onSuccess: () => queryClient.invalidateQueries(['user']),
  });

  return { userQuery, addAddress, addCard };
}
