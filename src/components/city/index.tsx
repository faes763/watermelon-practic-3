"use client";
import { cn } from "@/common/utils";
import { CitiesCombobox } from "./combobox";
import { useCityStore } from "@/common/store/city";
import { useShallow } from "zustand/shallow";
import { ICity } from "@/common/types/city.type";
import { useCallback, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { CITIES_SERVER } from "@/common/network/cities/server";


interface CityProps {
    className?: string;
}

export const City: React.FC<CityProps> = ({ className }) => {
    const defaultCity = useCityStore(useShallow(state => state.city));

    const [selectedCity, setSelectedCity] = useState<ICity>(defaultCity);

    const handleSelectCity = useCallback(() => {
        useCityStore.getState().setCity(selectedCity);
        close();
    }, [selectedCity]);


    const { data } = useSuspenseQuery(CITIES_SERVER.get_cities_query);

    return (
        <div className={cn(" ",className)}>
            <CitiesCombobox cities={data || []} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </div>
    );
};
