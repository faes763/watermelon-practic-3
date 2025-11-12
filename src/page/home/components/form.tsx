import { Button } from "@/common/ui/shadcn/button";
import { Sprite } from "@/common/ui/sprite";
import { City } from "@/components/city";
import { ArrowRightIcon } from "lucide-react";




export const Form = () => {
    return (
        <section>
            <div className="container mt-24">
                <form className="max-w-3xl bg-white/5 backdrop-blur-xl border border-white/20 rounded-4xl p-14 mx-auto">
                    <div className="flex font-bounded text-2xl font-bold gap-4 items-center">
                        <Sprite name="telegram" className="size-9" pathSprite="icons/filled" />
                        <p>Остались вопросы?</p>
                    </div>
                    <p className=" text-xl mt-6">Напишите нам, и мы ответим в течение 24 часов</p>
                    <div className="grid grid-cols-2 mt-4 gap-4">
                        <div>
                            <p>Имя</p>
                            <input 
                                type="text" 
                                placeholder="Имя" 
                                className="w-full mt-2 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black"
                            />
                        </div>
                        <div>
                            <p>Email</p>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full mt-2 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black"
                            />
                        </div>
                        <div className="col-span-2">
                            <p>Выберите ваш город</p>
                            <City className="mt-2"/>
                        </div>

                        <div className="col-span-2">
                            <p>Сообщение</p>
                            <textarea
                                placeholder="Расскажите, что вас интересует..."
                                className="w-full mt-2 bg-white border border-white rounded-lg px-4 py-2 text-base placeholder:text-[#8E8E93] text-black"
                            />
                        </div>
                    </div>
                    <Button variant={"green"} className="w-full mt-4">Отправить заявку <ArrowRightIcon className="size-7 -translate-x-1 -rotate-45" /></Button>
                </form>
            </div>
        </section>
    );
};
