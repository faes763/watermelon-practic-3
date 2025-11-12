import { Sprite } from "@/common/ui/sprite";



export const Stats = () => {
    return (
        <section>   
            <div className=" pt-24 container ">
                <h2 className=" font-bounded text-center sm:text-4xl text-2xl font-bold">Леса России: цифры и факты</h2>
                <p className=" sm:text-2xl text-base text-center mt-8">Ежегодно мы теряем больше леса, чем восстанавливаем. Пора действовать, а не просто ставить лайки.</p>
                <div className="flex max-sm:flex-col justify-between gap-5 sm:gap-14 sm:mt-24 mt-8">
                    {STATS_DATA.map((item) => (
                        <StatsItem key={item.title} {...item} />
                    ))}
                </div>
                <div className="sm:mt-24 mt-9 font-bounded sm:text-2xl text-xl font-bold sm:px-20 sm:py-12 px-5 py-8 border bg-white/5 relative backdrop-blur-xl border-white/20 rounded-4xl ">
                    <div className=" flex items-center justify-between">
                        <p className="  ">Потери леса (вырубка + пожары)</p>
                        <p className=" max-sm:hidden">1.7 млн га</p>
                    </div>
                    <div className=" h-7 w-full bg-green mt-5 rounded-full"/>
                    <p className=" sm:hidden text-xs text-right mt-1 font-gotham">1.7 млн га</p>
                    <div className=" flex mt-10 items-center justify-between">
                        <p className="  ">Восстановление леса</p>
                        <p className="  max-sm:hidden">900 тыс. га</p>
                    </div>
                    <div className=" h-7 w-full bg-white/5 mt-5 rounded-full">
                        <div className=" h-7 w-[calc(9/17*100%)] bg-green mt-5 rounded-l-full"/>
                    </div>
                    <p className=" sm:hidden text-xs text-right mt-1 font-gotham">900 тыс. га</p>

                    <div className="mt-13 flex border sm:gap-10 gap-4 border-white rounded-4xl py-8 sm:px-32 px-3">
                        <Sprite name="war" className="size-9" pathSprite="icons/filled" />
                        <div>
                            <p className="text-base font-normal font-gotham">
                                <span className="font-bold">Дефицит восстановления:</span> около 800,000 гектаров леса не восстанавливается каждый год.
                                <br/>
                                <br/>
                                Это не про лайки в соцсетях. Это про реальные руки, саженцы и землю. Каждый из нас может посадить хотя бы 10 деревьев — и это уже будет вклад в будущее планеты.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

const STATS_DATA = [
    {
        sprite: "war",
        title: "1.2 млн га",
        description: "Вырубается ежегодно",
    },
    {
        sprite: "graph-down",
        title: "500 тыс. га",
        description: "Сгорает в пожарах",
    },
    {
        sprite: "graph-up",
        title: "900 тыс. га",
        description: "Восстанавливается",
    },
    {
        sprite: "heart-green",
        title: "800 тыс. га",
        description: "Нужно восстановить",
    },
]

const StatsItem = ({sprite, title, description}: typeof STATS_DATA[0]) => { 
    return (
        <div className="border bg-white/5 sm:text-2xl text-base relative flex-1 backdrop-blur-xl px-4 sm:py-12 py-8 border-white/20 rounded-4xl ">
            <div className="center flex-col ">
                <Sprite name={sprite} className="sm:size-11 size-9 mx-auto" pathSprite="icons/filled" />
                <p className=" font-bounded mt-8 sm:text-2xl text-base font-bold ">{title}</p>
                <p className=" sm:text-xl text-base mt-1">{description}</p>
            </div>
        </div>
    );
}