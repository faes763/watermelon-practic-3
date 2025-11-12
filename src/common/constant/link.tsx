interface NavigationItem {
	title: string;
	href: string;
}

const LEFT_LINKS = [
    {
		title: "Формат участия",
		href: "/#participation-format",
	},
    {
        title: "Для компаний",
        href: "/#for-companies",
    },
];

const RIGHT_LINKS = [
    {
        title: "Особые программы",
        href: "/#special-programs",
    },
    {
        title: "Контакты",
        href: "/#contacts",
    }
]

export const NAVIGATION = {
    LEFT_LINKS,
    RIGHT_LINKS,
}
