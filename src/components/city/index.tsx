"use client";
import { cn } from "@/common/utils";
import { CitiesCombobox } from "./combobox";
import { useCityStore } from "@/common/store/city";
import { useShallow } from "zustand/shallow";
import { ICity } from "@/common/types/city.type";
import { useCallback, useState } from "react";


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
    return (
        <div className={cn(" ",className)}>
            <CitiesCombobox cities={[{id: 1, name: "Москва", countryId: 1, }, {id: 2, name: "Санкт-Петербург", countryId: 2, }, {id: 3, name: "Новосибирск", countryId: 3, }]} selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
        </div>
    );
};
