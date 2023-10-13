import { FetchApi } from '@/features/api/fetchApi';
import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  SetSearch: undefined;
  PartsListScreen: { setNumber: string };
};

type PartsListScreenRoute = RouteProp<RootStackParamList, 'PartsListScreen'>;

export const PartsListScreen = () => {
  const route = useRoute<PartsListScreenRoute>();
  const { setNumber } = route.params;

  return <FetchApi searchQuery={setNumber} variant="PARTS" />;
};
