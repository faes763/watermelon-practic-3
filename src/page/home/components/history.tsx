import { Sprite } from "@/common/ui/sprite";
import Image from "next/image";



export const History = () => {
    return (
        <section>
            <div className="pt-24 container ">
                <h2 className=" font-bounded text-center sm:text-4xl text-2xl font-bold">История посадок</h2>
                <p className=" sm:text-2xl text-base max-w-3xl mx-auto text-center mt-8">Реальные люди, реальные деревья, реальный вклад в будущее</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:mt-24 mt-9">
                    {HISTORY_DATA.map((item) => (
                        <HistoryItem key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const HISTORY_DATA = [
    {
        title: "Семья Крутых",
        image: "/page/home/history/1.png",
        description: "Мы посадили 50 деревьев в честь рождения нашего сына. Теперь каждый год приезжаем всей семьёй, смотрим как растёт наш лес вместе с ребёнком. Это невероятное чувство — видеть результат своих рук.",
        region: "Воронежская область"
    },
    {   
        title: "IT-компания «РастиЛес»",
        image: "/page/home/history/2.png",
        description: "В рамках нашей ESG-стратегии взяли шефство над 10 гектарами. Организовали корпоративную посадку — участвовало более 100 сотрудников. Это стало нашей главной командообразующей активностью года!",
        region: "Московская область, 10 га"
    },
    {
        title: "Свадьба Арубзов",
        image: "/page/home/history/3.png",
        description: "Вместо традиционных подарков попросили гостей профинансировать саженцы. Посадили 80 деревьев — по одному от каждого гостя. У нас есть своя свадебная роща, куда мы можем приезжать каждую годовщину.",
        region: "Нижегородская область",
    },
]



export const HistoryItem = ({title, image, description, region}: typeof HISTORY_DATA[0]) => {
    return (
        <div className="border bg-white/5 text-2xl relative  backdrop-blur-xl px-4 py-8 border-white/20 rounded-4xl ">
            <div className="flex flex-col gap-4">
                <Image 
                    src={image} 
                    alt={title} 
                    width={700} 
                    height={600} 
                    className="w-full h-80 object-cover rounded-2xl"
                />
                <p className=" font-bounded text-2xl font-bold ">{title}</p>
                <p className=" text-green text-xl">{region}</p>
                <div className=" flex gap-4">
                    <Sprite
                        name="link"
                        className="size-9"
                        pathSprite="icons/filled"
                    />
                    <p className=" sm:text-xl text-base">{description}</p>
                </div>
            </div>
            
        </div>
    );
};
