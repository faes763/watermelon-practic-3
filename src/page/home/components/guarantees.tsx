import { Sprite } from "@/common/ui/sprite";




export const Guarantees = () => {
    return (
        <section>
            <div className="container pt-24">
                <h2 className=" font-bounded text-center sm:text-4xl text-2xl font-bold">Доверие и гарантии</h2>
                <p className=" sm:text-2xl text-base text-center mt-8">Прозрачность, ответственность и проверенные партнёры</p>
                <div className="sm:mt-24 mt-9 flex max-sm:flex-col gap-5 sm:gap-40 justify-between">
                    <Partners />
                    <Docs />
                </div>
            </div>
        </section>
    );
};


const PARTNERS_DATA = [
    "Министерство природных ресурсов",
    "Российское экологическое общество",
    "Агентство лесного хозяйства",
    "Общероссийский народный фронт"
]
const Partners = () => {
    return (
        <div className="bg-white/5 backdrop-blur-xl border flex-1 border-white/20 rounded-4xl sm:p-14 px-8 py-7">
            <div className="flex items-center gap-4">
                <Sprite
                    name="leader"
                    className="size-9"
                    pathSprite="icons/filled"
                />
                <p className=" font-black text-2xl">Наши партнеры</p>
            </div>
            <div className=" sm:mt-11 mt-4 space-y-6">
                {PARTNERS_DATA.map((item) => (
                    <div 
                        key={item}
                        className="flex sm:text-2xl text-base gap-4 items-center"
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


const DOCS_DATA = [
    "Регистрация: НКО №1234567890 Некоммерческая организация",
    "ИНН: 7701234567 КПП: 770101001",
    "Договоры с лесхозами Официальные соглашения о посадке",
]

const Docs = () => {
    return (
        <div className="bg-white/5 backdrop-blur-xl border flex-1 border-white/20 rounded-4xl sm:p-14 px-8 py-7">
        <div className="flex items-center gap-4">
            <Sprite
                name="docs"
                className="size-9"
                pathSprite="icons/filled"
            />
            <p className=" font-black text-2xl">Документы и гарантии</p>
        </div>
        <div className=" sm:mt-11 mt-4 space-y-6">
            {DOCS_DATA.map((item) => (
                <div 
                    key={item}
                    className="flex sm:text-2xl text-base gap-4 items-center"
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
