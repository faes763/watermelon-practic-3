import { cache } from "react";
import { CORE_SERVER_BACKEND } from "../core-server";
import { queryOptions } from "@tanstack/react-query";
import { ICity } from "@/common/types/city.type";

class CitiesServer {
    get_cities = cache(async () => {
        const response = await CORE_SERVER_BACKEND.core_backend.get("/cities", {
            params: {
                countyId: 1,
            }
        });
        return response.data as ICity[];
    });

    get_cities_query = queryOptions({
        queryKey: ["cities"],
        refetchInterval: 100 * 6000,
        queryFn: this.get_cities,
    })
}

export const CITIES_SERVER = new CitiesServer();