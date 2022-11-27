import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCart, addOrUpdateToCart, removeFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function useCart() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['carts'], () => getCart(uid), {
    staleTime: 1000 * 60,
  });

  const addCart = useMutation(({ uid, menu }) => addOrUpdateToCart(uid, menu), {
    onSuccess: () => queryClient.invalidateQueries(['carts']),
  });

  const removeCart = useMutation(
    ({ uid, menuId }) => removeFromCart(uid, menuId),
    {
      onSuccess: () => queryClient.invalidateQueries(['carts']),
    }
  );

  return { cartQuery, addCart, removeCart };
}
