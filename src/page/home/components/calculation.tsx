"use client"
import { useRef, useState } from "react";
import { Sprite } from "@/common/ui/sprite";
import { useRanger } from "@tanstack/react-ranger";
import { Button } from "@/common/ui/shadcn/button";



export const Calculation = () => {
    return (
        <section>
            <div className="pt-24 container ">
                <h2 className=" font-bounded text-center text-4xl font-bold">Формат участия</h2>
                <p className=" text-2xl max-w-3xl mx-auto text-center mt-8">Выберите количество саженцев и узнайте стоимость вашего вклада в восстановление леса</p>
                <div className="flex gap-40 justify-between mt-24">
                    <CalculationForm />
                    <Get />
                </div>

            </div>
        </section>
    );
};

const CalculationForm = () => {
    const rangerRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState<number>();

    const rangerInstance = useRanger<HTMLDivElement>({
        getRangerElement: () => rangerRef.current,
        values: [value || 0],
        min: 1,
        max: 100,
        stepSize: 1,
        onChange: (instance) => setValue(instance.sortedValues[0]),
    });

    return (
        <div className="border bg-white/5 flex-1 backdrop-blur-xl px-13 py-8 border-white/20 rounded-4xl p-6">
            <div className="flex items-center gap-4">
                <Sprite
                    name="calculator"
                    className="size-9"
                    pathSprite="icons/filled"
                />
                <p className=" font-black text-2xl">Онлайн-калькулятор</p>
            </div>
            <p className=" mt-4">Рассчитайте стоимость посадки</p>
            <p className=" mt-4 font-bounded text-2xl">Количество саженцев (1-100)</p>
            
            <input
                type="number"
                min={1}
                max={100}
                value={value}
                onChange={(e) => setValue(Math.min(100, Number(e.target.value)))}
                placeholder="Введите количество саженцев"
                className="w-full mt-4 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black"
            />

            <div className="mt-6">
                <div
                    ref={rangerRef}
                    className="relative select-none h-2 bg-white rounded-full"
                >
                    {rangerInstance.handles().map(
                        ({ value: handleValue, onKeyDownHandler, onMouseDownHandler, onTouchStart, isActive }, i) => (
                            <button
                                key={i}
                                onKeyDown={onKeyDownHandler}
                                onMouseDown={onMouseDownHandler}
                                onTouchStart={onTouchStart}
                                role="slider"
                                aria-valuemin={1}
                                aria-valuemax={100}
                                aria-valuenow={handleValue}
                                type="button"
                                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green outline-none transition-transform hover:scale-110"
                                style={{
                                    left: `${rangerInstance.getPercentageForValue(handleValue)}%`,
                                    zIndex: isActive ? 1 : 0,
                                }}
                            />
                        )
                    )}
                </div>
                <div className="flex justify-between mt-2 text-sm text-white/60">
                    <span>1</span>
                    <span>100</span>
                </div>
            </div>
            <div className="p-4 center flex-col border border-white rounded-4xl mt-4">
                <p>Итого к оплате</p>
                <p className=" font-bounded font-black text-2xl">{1000 * (value || 0)} ₽</p>
            </div>

            <Button variant={"green"} className="w-full mt-4">Оплатить и участвовать</Button>
        </div>
    )
}

const GET_DATA = [
    "Приглашение на посадку с точными координатами участка",
    "Возможность лично посадить свои деревья",
    "Фото и видео отчёт о посадке",
    "Именной сертификат участника",
    "Координаты вашего леса для повторных визитов"
]

const Get = () => {
    return (
        <div className="border bg-white/5 flex-1 backdrop-blur-xl px-13 py-8 border-white/20 rounded-4xl p-6">
            <div className="flex items-center gap-4">
                <Sprite
                    name="face"
                    className="size-9"
                    pathSprite="icons/filled"
                />
                <p className=" font-black text-2xl">Частное лицо</p>
            </div>
            <p className=" mt-4">Что вы получите</p>
            <div className="flex mt-4 flex-col gap-4">
                {GET_DATA.map((item) => (
                    <div 
                        key={item}
                        className="flex text-2xl gap-4 items-center"
                    >
                        <div className=" bg-green rounded-full min-w-9 size-9 center">
                            <Sprite
                                name="heart"
                                className="size-5"
                                pathSprite="icons/filled"
                            />
                        </div>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
};
