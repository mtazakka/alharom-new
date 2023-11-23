import { QueryClient } from '@tanstack/react-query';

export function generateQueryClient() {
	return new QueryClient({
		defaultOptions: {
			queries: {
				// onError: queryErrorHandler,
				// staleTime: 0, // 10 minutes
				// cacheTime: 0, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
				refetchOnMount: true,
				refetchOnWindowFocus: false,
				// refetchOnReconnect: false,
			},
			mutations: {
				// onError: queryErrorHandler,
			},
		},
	});
}

export const queryClient = generateQueryClient();
