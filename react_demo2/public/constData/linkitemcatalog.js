const itemCatalog = [
    {
        id: 1,
        itemLevelOne: [
            {
                title: "Запчасти для ТО",
                url: "/to/",
                ico: "icon-category-brakes",
                itemSubLevel: [
                    { title: "Масляный фильтр", url: "/to/filtr-maslyanyy/" },
                    { title: "Воздушный фильтр", url: "/to/filtr-vozdushnyy/" },
                    { title: "Салонный фильтр", url: "/to/filtr-salonnyy/" },
                    { title: "Топливный фильтр", url: "/to/filtr-toplivnyy/" },
                    { title: "Тормозные колодки", url: "/to/kolodki-tormoznye/" },
                    { title: "Свечи зажигания", url: "/to/svechi-zazhiganiya/" },
                    { title: "Все категории", url: "/to/", allLink: true },
                ]
            }
        ]
    },
    {
        id: 2,
        itemLevelOne: [
            {
                title: "Масла и техжидкости",
                url: "/catalog/oil/",
                ico: "icon-category-oil",
                itemSubLevel: [
                    { title: "Моторное масло", url: "/catalog/oil/motor/" },
                    { title: "Масло трансмисионное", url: "/catalog/oil/maslo-transmissionnoe/" },
                    { title: "Тормозная жидкость", url: "/catalog/oil/tormoznaya-zhidkost/" },
                    { title: "Охлаждающая жидкость", url: "/catalog/oil/okhlazhdayushchaya-zhidkost/" },
                    { title: "Масло гидроусилителя руля", url: "/catalog/oil/maslo-gidrousilitelya-rulya/" },
                    { title: "Масло для мотоцикла", url: "/catalog/oil/maslo-dlya-mototsikla/" },
                    { title: "Все категории", url: "/catalog/oil/", allLink: true },
                ]
            }
        ]
    }, 
    {
        id: 3,
        itemLevelOne: [
            {
                title: "Автохимия",
                url: "/catalog/avtokhimiya/",
                ico: "icon-category-glue",
                itemSubLevel: [
                    { title: "Смазки", url: "/catalog/avtokhimiya/smazki/" },
                    { title: "Присадки", url: "/catalog/avtokhimiya/prisadki/" },
                    { title: "Промывки", url: "/catalog/avtokhimiya/promyvki/" },
                ]
            },
            {
                title: "Автокосметика",
                url: "/catalog/avtokosmetika/",
                ico: "icon-category-sprayer",
                itemSubLevel: [
                    { title: "Омыватель", url: "/catalog/avtokosmetika/omyvatel/" },
                    { title: "Полироль", url: "/catalog/avtokosmetika/polirol/" },
                    { title: "Шампуни", url: "/catalog/avtokosmetika/shampuni/" },
                ]
            }
        ]
    },
    {
        id: 4,
        itemLevelOne: [
            {
                title: "Оригинальный каталог",
                url: "/w247_laximo_oem/",
                ico: "icon-category-book-open",
            },
            {
                title: "Аккумуляторы",
                url: "/catalog/akb/",
                ico: "icon-category-battery",
            },
            {
                title: "Щетки стеклоочистителя",
                url: "/catalog/wiper/",
                ico: "icon-category-wiper",
            },
            {
                title: "Автолампы",
                url: "/lamp/",
                ico: "icon-category-light-bulb",
            },
            {
                title: "Автоаксессуары",
                url: "/catalog/avtoaksessuary/",
                ico: "icon-category-accesory",
                itemSubLevel: [
                    { title: "Коврики", url: "/catalog/avtoaksessuary/kovriki/" },
                    { title: "Щетки, скребки", url: "/catalog/avtoaksessuary/shchetki-skrebki/" },
                    { title: "Чехлы на сидения, накидки", url: "/catalog/avtoaksessuary/chekhly-na-sideniya-nakidki/" },
                ]
            }
        ]
    }, 
];

export default itemCatalog;