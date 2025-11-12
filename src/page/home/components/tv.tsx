import { Sprite } from "@/common/ui/sprite";



export const TV = () => {
    return (
        <section>
            <div className=" pt-24 container ">
                <h2 className=" font-bounded text-center sm:text-4xl text-2xl font-bold">Как это выглядит</h2>
                <p className=" sm:text-2xl text-base max-w-xl mx-auto text-center mt-8">Видео с квадрокоптера и репортажи о наших посадках</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:mt-24 mt-8">
                    {TV_DATA.map((item) => (
                        <TVItem key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TV_DATA = [
    {
        title: "Съёмка с квадрокоптера",
        description_1: "Наши лесопосадки с высоты птичьего полёта",
        video: "/page/home/tv/1.mp4",
        description_2: "Полёт над восстановленным лесом в Воронежской области. Более 10,000 деревьев, посаженных за сезон 2024 года.",
        sprite: "play",
    },
    {
        title: "ТВ-репортаж",
        description_1: "Сюжет о нашем проекте на федеральном канале",
        video: "/page/home/tv/2.mp4",
        description_2: "Специальный репортаж о том, как волонтёры и компании объединяются для восстановления лесов России.",
        sprite: "tv",
    },
]



const TVItem = ({title, description_1, video, description_2, sprite}: typeof TV_DATA[0]) => {
    return (
        <div className="border bg-white/5 text-2xl relative  backdrop-blur-xl px-8 py-6 border-white/20 rounded-4xl ">
            <div className="flex flex-col gap-4">
                <div className=" flex items-center gap-2">
                    <Sprite
                        name={sprite}
                        className="size-4"
                        pathSprite="icons/filled"
                    />
                    <p className=" font-bounded text-2xl font-bold ">{title}</p>
                </div>
                <p className="  sm:text-xl text-base">{description_1}</p>
                <video controls src={video} className="w-full sm:h-80 h-48 object-cover rounded-2xl mt-4" />
                <p className=" sm:text-xl text-base mt-4">{description_2}</p>
            </div>
        </div>
    );
};
