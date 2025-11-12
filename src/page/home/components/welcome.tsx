import { Button } from "@/common/ui/shadcn/button";
import { City } from "@/components/city";
import { ArrowRightIcon } from "lucide-react";



export const Welcome = () => {
    return (
        <section>
            <div className="container bg-[url(/page/home/welcome/welcome.jpg)] bg-cover rounded-b-4xl bg-center flex items-center pt-64 flex-col min-h-screen ">
                <h1 className="text-6xl font-bounded font-bold">покупай саженцы — сажай лес</h1>
                <p className="text-4xl mt-8 font-bounded text-green font-bold">лес, в который можно вернуться</p>
                <p className=" text-2xl mt-16 max-w-3xl text-center">Восстанавливаем леса России вместе. Каждый саженец - это ваш вклад в будущее планеты.</p>
                <City className="mt-16 max-w-3xl w-full" />
                <div className="flex mt-7 gap-4">
                    <Button variant="green" className="rounded-full">
                        Выбрать город и посадку
                        <ArrowRightIcon className="size-6 -rotate-45" />
                    </Button>
                    <Button variant="green" className="rounded-full">
                        Для компаний
                        <ArrowRightIcon className="size-6 -rotate-45" />
                    </Button>
                    <Button variant="green" className="rounded-full">
                        Роща славы
                        <ArrowRightIcon className="size-6 -rotate-45" />
                    </Button>


                </div>
            </div>
        </section>
    );
};
