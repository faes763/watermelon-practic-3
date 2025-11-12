import { CITIES_SERVER } from "@/common/network/cities/server";
import { getQueryClient } from "@/common/utils/tanstack";
import { Home } from "@/page/home";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default function HomePage() {
	const queryClient = getQueryClient()

	void queryClient.prefetchQuery(CITIES_SERVER.get_cities_query);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Home />
		</HydrationBoundary>
	);
}
