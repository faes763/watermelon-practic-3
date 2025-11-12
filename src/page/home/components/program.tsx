import { Button } from "@/common/ui/shadcn/button";
import { Sprite } from "@/common/ui/sprite";
import { cn } from "@/common/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";




export const Program = () => {
    return (
        <section>
            <div className=" pt-24 container ">
                <h2 className=" font-bounded text-center text-4xl font-bold">Особые программы</h2>
                <p className=" text-2xl text-center mt-8">Посадка леса — это не только экология, но и важные жизненные события.</p>
                <div className="space-y-16 mt-24">
                    {PROGRAM_DATA.map((item, index) => (
                        <ProgramItem key={item.title} {...item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PROGRAM_DATA = [
    {
        sprite: "people",
        title: "Посади дерево. Стань мужчиной.",
        description: `Мужчина — это не про «бороду отрастил». Это про ответственность. Один мальчик сажает одно дерево — и в этот момент у него появляется что-то своё: живое, растущее, зависимое от него. Раз в год мы проводим ритуал посвящения в мужчины. Отец и сын выходят на землю, берут в руки лопаты и сажают дерево. Не в теории, не в «когда-нибудь», а здесь и сейчас.`,
        button_text: "Записаться на посвящение",
        photo: "/page/home/program/1.png"
    },
    {
        sprite: "heart",
        title: "Добрая традиция, хорошая семья, крепкое дерево.",
        description: "Свадьба заканчивается, фото блекнут, торт съели и забыли. Но если в день росписи вы сажаете своё дерево — память становится живой. Каждая семья после ЗАГСа может поехать не в ТЦ, а на свою первую совместную посадку. Дерево растёт вместе с вами: переживает ветра, морозы, засуху.",
        button_text: "Посадить семейное дерево",
        photo: "/page/home/program/2.png"
    },
    {
        sprite: "leader",
        title: "Роща славы. Дерево, которое держит память.",
        description: "Есть вещи, которые словами не лечатся. Когда отец на фронте. Когда его уже нет. Когда ребёнку нужно во что-то упереться, кроме пустоты. Мы создаём Рощу славы — живой мемориал, где дети с мамами сажают деревья в честь своих защитников. ",
        button_text: "Посадить дерево в Роще славы",
        photo: "/page/home/program/3.png"
    },
];


const ProgramItem = ({sprite, title, description, button_text, photo, index }: typeof PROGRAM_DATA[0] & {index: number}) => {
    return (
        <div className="grid grid-cols-2">
            <Image
                src={photo}
                alt={title}
                width={500}
                height={500}
                className={cn("w-full h-full object-cover", index === 1 ? "rounded-r-4xl order-2" : "rounded-l-4xl ")}
            />
            <div className={cn(
                "bg-white/5 backdrop-blur-xl border border-white/20 rounded-4xl p-20",
                index === 1 ? "order-1 rounded-r-none" : "rounded-l-none "
            )}>
                <Sprite name={sprite} className="size-20" pathSprite="icons/filled" />
                <h3 className="font-bounded mt-13 text-2xl text-green font-bold">{title}</h3>
                <p className="font-gotham mt-8 text-base font-normal">{description}</p>
                <Button variant="green" className=" mt-13 rounded-full">
                    {button_text}
                    <ArrowRightIcon className="size-6 -rotate-45" />
                </Button>
            </div>
        </div>
    );
};