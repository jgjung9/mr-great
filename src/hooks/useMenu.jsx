import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addNewMenu, getAllMenu, updateMenuById } from '../api/firebase';

export default function useMenu() {
  const queryClient = useQueryClient();

  const menuQuery = useQuery(['menu'], getAllMenu, { staleTime: 1000 * 60 });

  const addMenu = useMutation(({ menu, url }) => addNewMenu(menu, url), {
    onSuccess: () => queryClient.invalidateQueries(['menu']),
  });

  const updateMenu = useMutation(
    ({ id, category, menu }) => updateMenuById(id, category, menu),
    {
      onSuccess: () => queryClient.invalidateQueries(['menu']),
    }
  );

  return { menuQuery, addMenu, updateMenu };
}
