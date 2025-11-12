import { NAVIGATION } from "@/common/constant/link";
import { Sprite } from "@/common/ui/sprite";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer id="footer" className="relative z-50">
			<div className="container py-16 bg-black mt-36">
				<div className="flex max-sm:flex-col gap-20">
					<div className="max-w-md">
						<p className=" font-bounded text-2xl font-black text-green">Сажаем лес</p>
						<p className="  mt-5">Восстанавливаем леса России вместе. Каждый саженец — вклад в будущее.</p>
					</div>
					<div>
						<p className=" font-bounded text-2xl font-black text-green">Контакты</p>
						<ul className="mt-5 space-y-3">
							<li className="flex items-center gap-2">
								<Sprite
									name="mail-green"
									className="size-6"
									pathSprite="icons/filled"
								/>
								<a href="mailto:info@chotatam.ru">info@chotatam.ru</a>
							</li>
							<li className="flex items-center gap-2">
								<Sprite
									name="phone-green"
									className="size-6"
									pathSprite="icons/filled"
								/>
								<a href="tel:+77777777777">+7 (777) 777-77-77</a>
							</li>
							<li className="flex items-center gap-2">
								<Sprite
									name="geo-green"
									className="size-6"
									pathSprite="icons/filled"
								/>
								<a href="https://yandex.ru/maps/org/arbuz/196650645107/?ll=49.307879,53.561043&z=17">Тольятти, ул. Арбуза, д. 3</a>
							</li>
						</ul>
					</div>
					<div>
						<p className=" font-bounded text-2xl font-black text-green">Быстрые ссылки</p>
						<ul className="mt-5 space-y-3">
							{NAVIGATION.LEFT_LINKS.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.title}</Link>
								</li>
							))}
							{NAVIGATION.RIGHT_LINKS.map((link) => (
								<li key={link.href}>
									<Link href={link.href}>{link.title}</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="flex-1 flex justify-end">
						<Link href="/">
							<Image className="w-40 h-20" src="/logo.png" alt="logo" width={400} height={400} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
