import { Button } from "@/common/ui/shadcn/button";
import { Sprite } from "@/common/ui/sprite";
import { cn } from "@/common/utils";



export const Company = () => {
    return (
        <section id="company">
            <div className="pt-24 container ">
                <h2 className=" font-bounded text-center sm:text-4xl text-2xl font-bold">Для компаний</h2>
                <p className=" sm:text-2xl text-base max-w-3xl mx-auto text-center mt-8">Возьмите шефство над гектаром леса. Инвестируйте в экологию и корпоративную социальную ответственность</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-24">
                    {CARD_DATA.map((item) => (
                        <Card key={item.count} {...item} />
                    ))}
                </div>

            </div>
        </section>
    );
};


const CARD_DATA = [
    {
        count: 1,
        tree_count: 2500,
        price: "375, 000 ₽",
        text: Array.from({length: 4}).map((_, index) => `Приглашение на посадку с точными координатами участка`),
        popular: false,
    },
    {
        count: 10,
        tree_count: 25000,
        price: "3,500,000 ₽",
        text: Array.from({length: 4}).map((_, index) => `Приглашение на посадку с точными координатами участка`),
        popular: true,
    },
    {
        count: 100,
        tree_count: 250000,
        price: "По запросу",
        text: Array.from({length: 4}).map((_, index) => `Приглашение на посадку с точными координатами участка`),
        popular: false,
    }
]

const Card = ({count, tree_count, price, text, popular}: typeof CARD_DATA[0]) => {
    return (
        <div 
            className={cn(
                "border-2 bg-white/5 text-2xl relative flex-1 backdrop-blur-xl px-4 py-8 border-white/20 rounded-4xl text-center max-sm:order-2",
                popular && "border-green max-sm:order-1",

            )}
        >
            {popular && (
                <div className="center gap-3 absolute left-1/2 -translate-x-1/2 -top-7  bg-green rounded-full px-8 py-3 text-base">
                    <Sprite name="popular" className="size-6" pathSprite="icons/filled" />
                    <p className=" ">Популярное</p>
                </div>
            )}
            <div className="flex flex-col sm:gap-6 gap-4">
                <p className=" font-bounded text-3xl font-bold ">{count} Гектар</p>
                <p>{count} га</p>
                <p>~ {tree_count} саженцев</p>
                <p className=" font-bounded font-black text-green">{price}</p>
                {text.map((item, index) => (
                    <p 
                        key={index}
                        className="flex text-left gap-4 sm:text-xl text-base items-center"
                    >
                        <Sprite name="duo-check" className="size-6" pathSprite="icons/filled" />
                        {item}
                    </p>
                ))}
                <Button variant={"green"} className="w-full mt-4">Оставить заявку</Button>
            </div>
        </div>
    );
};
