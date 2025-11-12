import { Button } from "@/common/ui/shadcn/button";
import { City } from "@/components/city";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";



export const Welcome = () => {
    return (
        <section>
            <div className="container max-sm:text-center bg-[url(/page/home/welcome/welcome.jpg)] bg-cover rounded-b-4xl bg-center flex items-center sm:pt-64 pt-40 flex-col min-h-screen ">
                <h1 className="sm:text-6xl text-3xl font-bounded font-bold">покупай саженцы — сажай лес</h1>
                <p className="sm:text-4xl text-2xl mt-8 font-bounded text-green font-bold">лес, в который можно вернуться</p>
                <p className=" sm:text-2xl sm:mt-16 mt-8 max-w-3xl text-center">Восстанавливаем леса России вместе. Каждый саженец - это ваш вклад в будущее планеты.</p>
                <City className="mt-16 max-w-3xl w-full" />
                <div className="flex max-sm:flex-col mt-7 gap-4">
                    <Button asChild variant="green" className="rounded-full max-sm:w-fit max-sm:mx-auto">
                        <Link href="#form">
                            Выбрать город и посадку
                            <ArrowRightIcon className="size-6 -rotate-45" />
                        </Link>
                    </Button>
                    <Button asChild variant="green" className="rounded-full max-sm:w-fit max-sm:mx-auto">
                        <Link href="#company">
                            Для компаний
                            <ArrowRightIcon className="size-6 -rotate-45" />
                        </Link>
                    </Button>
                    <Button asChild variant="green" className="rounded-full max-sm:w-fit max-sm:mx-auto">
                        <Link href="#programs">
                            Роща славы
                            <ArrowRightIcon className="size-6 -rotate-45" />
                        </Link>
                    </Button>


                </div>
            </div>
        </section>
    );
};
