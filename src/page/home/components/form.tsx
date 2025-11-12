"use client"
import { Button } from "@/common/ui/shadcn/button";
import { Sprite } from "@/common/ui/sprite";
import { ArrowRightIcon } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CitiesCombobox } from "@/components/city/combobox";
import type { ICity } from "@/common/types/city.type";
import { City } from "@/components/city";

const formSchema = z.object({
    name: z.string()
        .min(2, "Имя должно содержать минимум 2 символа")
        .max(50, "Имя слишком длинное"),
    email: z.string()
        .email("Введите корректный email")
        .min(1, "Email обязателен"),
    city: z.object({
        id: z.number(),
        name: z.string(),
        countryId: z.number(),
    }).nullable().refine((val) => val !== null, {
        message: "Выберите город",
    }),
    message: z.string()
        .min(10, "Сообщение должно содержать минимум 10 символов")
        .max(500, "Сообщение слишком длинное"),
});

type FormData = z.infer<typeof formSchema>;

export const Form = () => {
    const { 
        register, 
        handleSubmit, 
        control,
        formState: { errors, isSubmitting } 
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Форма отправлена:", data);
    };

    return (
        <section id="form">
            <div className="container sm:pt-24 pt-9">
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-4xl p-14 mx-auto">
                    <div className="flex font-bounded text-2xl font-bold gap-4 items-center">
                        <Sprite name="telegram" className="size-9" pathSprite="icons/filled" />
                        <p>Остались вопросы?</p>
                    </div>
                    <p className=" text-xl mt-6">Напишите нам, и мы ответим в течение 24 часов</p>
                    <div className="grid sm:grid-cols-2 grid-cols-1 mt-4 gap-4">
                        <div>
                            <p>Имя</p>
                            <input 
                                type="text" 
                                placeholder="Имя" 
                                {...register("name")}
                                className="w-full mt-2 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                            )}
                        </div>
                        <div>
                            <p>Email</p>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                {...register("email")}
                                className="w-full mt-2 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="sm:col-span-2">
                            <p>Выберите ваш город</p>
                            <City className="mt-2"/>
                        </div>

                        <div className="sm:col-span-2">
                            <p>Сообщение</p>
                            <textarea
                                placeholder="Расскажите, что вас интересует..."
                                {...register("message")}
                                className="w-full mt-2 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black min-h-[120px]"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                            )}
                        </div>
                    </div>
                    <Button 
                        variant="green" 
                        className="w-full mt-4"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Отправка..." : "Отправить заявку"} 
                        <ArrowRightIcon className="size-7 -translate-x-1 -rotate-45" />
                    </Button>
                </form>
            </div>
        </section>
    );
};
