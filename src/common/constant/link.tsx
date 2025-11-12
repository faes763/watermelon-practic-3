interface NavigationItem {
	title: string;
	href: string;
}

const LEFT_LINKS = [
    {
		title: "Формат участия",
		href: "/#how",
	},
    {
        title: "Для компаний",
        href: "/#company",
    },
];

const RIGHT_LINKS = [
    {
        title: "Особые программы",
        href: "/#programs",
    },
    {
        title: "Контакты",
        href: "/#footer",
    }
]

export const NAVIGATION = {
    LEFT_LINKS,
    RIGHT_LINKS,
}
