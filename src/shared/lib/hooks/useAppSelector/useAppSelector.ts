import { RootState } from '@/app/providers/StoreProvider';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootState>();
