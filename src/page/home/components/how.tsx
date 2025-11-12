import { Sprite } from "@/common/ui/sprite";



export const How = () => {
    return (
        <section id="how">
            <div className="container pt-24">
                <h2 className=" font-bounded text-center sm:text-4xl text-2xl font-bold">Как это работает</h2>
                <p className=" sm:text-2xl text-base text-center mt-8">Простой процесс от заявки до посадки вашего леса</p>
                <div className="sm:mt-24 mt-9 space-y-5">
                    {HOW_DATA.map((item) => (
                        <HowItem key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const HOW_DATA = [
    {
        sprite: "geo",
        title: "Выбираете город и формат",
        description: "Укажите ваш город и количество саженцев или уровень корпоративного участия.",
    },
    {
        sprite: "card",
        title: "Оплачиваете саженцы",
        description: "Безопасная оплата онлайн. Вы получаете подтверждение и квитанцию.",
    },
    {
        sprite: "mail",
        title: "Получаете приглашение",
        description: "Вам приходит письмо с точными координатами участка, датой и временем посадки.",
    },
    {
        sprite: "cool",
        title: "Приезжаете и сажаете",
        description: "Наши координаторы встречают вас на месте, выдают инструменты и саженцы.",
    },
    {
        sprite: "photo",
        title: "Получаете отчёт",
        description: "Фото, видео с посадки, сертификат и координаты для будущих визитов.",
    },
]

const HowItem = ({sprite, title, description}: typeof HOW_DATA[0]) => {
    return (
        <div className="flex max-sm:flex-col items-center bg-white/5 max-sm:backdrop-blur-xl max-sm:border max-sm:border-white/20 max-sm:rounded-4xl sm:px-12 py-6 sm:gap-5 gap-3 max-sm:text-center">
            <div className=" size-20 bg-green rounded-full center">
                <Sprite name={sprite} className="size-9" pathSprite="icons/filled" />            
            </div>
            <div>
                <h3 className="font-bounded font-bold">{title}</h3>
                <p className="font-gotham mt-4 sm:text-base text-sm font-normal">{description}</p>
            </div>
        </div>
    );
};