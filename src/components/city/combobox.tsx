"use client"

import * as React from "react"

import { Button } from "@/common/ui/shadcn/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/common/ui/shadcn/command"
import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
} from "@/common/ui/shadcn/drawer"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/common/ui/shadcn/popover"
import { useMediaQuery } from "@/common/hooks/use-media-query";
import { ChevronDownIcon } from "lucide-react";
import { ICity } from "@/common/types/city.type";
import { cn } from "@/common/utils";

export interface CitiesComboboxProps {
    selectedCity: ICity
    setSelectedCity: (city: ICity) => void
}

export function CitiesCombobox({ cities=[], className, selectedCity, setSelectedCity }: { cities: ICity[], className?: string } & CitiesComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    



    if (isDesktop) {
        return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className={cn("w-full bg-white border-none justify-between rounded-lg ", className)}    >
                    {selectedCity ? <span className="text-black">{selectedCity.name}</span> : <>Выберите город</>}
                    <ChevronDownIcon className="size-6" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full max-w-full p-0" >
                <CitiesList cities={cities} setOpen={setOpen} setSelectedCity={setSelectedCity} />
            </PopoverContent>
        </Popover>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="outline" className={cn("w-full bg-white border-none justify-between rounded-lg max-sm:text-xs", className)}>
                {selectedCity ? <>{selectedCity.name}</> : <>Выберите город</>}
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t">
                <CitiesList cities={cities} setOpen={setOpen} setSelectedCity={setSelectedCity} />
                </div>
            </DrawerContent>
        </Drawer>
    );
}

function CitiesList({
    cities,
    setOpen,
    setSelectedCity,
}: {
    cities: ICity[]
    setOpen: (open: boolean) => void
    setSelectedCity: (city: ICity) => void
}) {
    return (
        <Command>
            <CommandInput placeholder="Введите город" />
            <CommandList>
                <CommandEmpty>Нет результатов</CommandEmpty>
                <CommandGroup>
                {cities.map((city) => (
                    <CommandItem
                    key={city.id}
                    value={city.name.toString()}
                    onSelect={(value) => {
                        setSelectedCity(
                        cities.find((city) => city.name === value) || cities[0]
                        )
                        setOpen(false)
                    }}
                    >
                    {city.name}
                    </CommandItem>
                ))}
                </CommandGroup>
            </CommandList>
        </Command>
    );
}
