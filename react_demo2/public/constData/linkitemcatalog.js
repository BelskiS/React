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
    }
];

export default itemCatalog;
{/* <div class="wrap_main_menu_drop__item">
    <div class="main_menu__item">
        <div class="main_menu__item_block">
            <a class="planshet_inviz link_menu title_main_menu " href="/to/">
                <span class="title_main_menu_ico icon-category-brakes"></span>
                <span class="title_main_menu_text">Запчасти для ТО</span>
            </a>
            <ul class="main_menu__collapse_ul">
                <li>
                    <a href="/to/filtr-maslyanyy/" class="site_link link_menu ">
                        Масляный фильтр
                    </a>
                </li>

                <li>
                    <a
                        href="/to/filtr-vozdushnyy/"
                        class="site_link link_menu "
                    >
                        Воздушный фильтр
                    </a>
                </li>

                <li>
                    <a href="/to/filtr-salonnyy/" class="site_link link_menu ">
                        Салонный фильтр
                    </a>
                </li>

                <li>
                    <a href="/to/filtr-toplivnyy/" class="site_link link_menu ">
                        Топливный фильтр
                    </a>
                </li>

                <li>
                    <a
                        href="/to/kolodki-tormoznye/"
                        class="site_link link_menu "
                    >
                        Тормозные колодки
                    </a>
                </li>

                <li>
                    <a
                        href="/to/svechi-zazhiganiya/"
                        class="site_link link_menu "
                    >
                        Свечи зажигания
                    </a>
                </li>

                <li>
                    <a
                        class="site_link_two site_link_with_borderb main_menu_all_link "
                        href="/to/"
                    >
                        Все категории{" "}
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main_menu__item">
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/catalog/oil/"
            >
                <span class="title_main_menu_ico icon-category-oil"></span>
                <span class="title_main_menu_text">Масла и техжидкости</span>
            </a>
            <ul class="main_menu__collapse_ul">
                <li>
                    <a href="/catalog/oil/motor/" class="site_link link_menu ">
                        Моторное масло
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/oil/maslo-transmissionnoe/"
                        class="site_link link_menu "
                    >
                        Масло трансмисионное
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/oil/tormoznaya-zhidkost/"
                        class="site_link link_menu "
                    >
                        Тормозная жидкость
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/oil/okhlazhdayushchaya-zhidkost/"
                        class="site_link link_menu "
                    >
                        Охлаждающая жидкость
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/oil/maslo-gidrousilitelya-rulya/"
                        class="site_link link_menu "
                    >
                        Масло гидроусилителя руля
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/oil/maslo-dlya-mototsikla/"
                        class="site_link link_menu "
                    >
                        Масло для мотоцикла
                    </a>
                </li>

                <li>
                    <a
                        class="site_link_two site_link_with_borderb main_menu_all_link "
                        href="/catalog/oil/"
                    >
                        Все категории{" "}
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main_menu__item">
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/catalog/avtokhimiya/"
            >
                <span class="title_main_menu_ico icon-category-glue"></span>
                <span class="title_main_menu_text">Автохимия</span>
            </a>
            <ul class="main_menu__collapse_ul">
                <li>
                    <a
                        href="/catalog/avtokhimiya/smazki/"
                        class="site_link link_menu "
                    >
                        Смазки
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/avtokhimiya/prisadki/"
                        class="site_link link_menu "
                    >
                        Присадки
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/avtokhimiya/promyvki/"
                        class="site_link link_menu "
                    >
                        Промывки
                    </a>
                </li>
            </ul>
        </div>
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/catalog/avtokosmetika/"
            >
                <span class="title_main_menu_ico icon-category-sprayer"></span>
                <span class="title_main_menu_text">Автокосметика</span>
            </a>
            <ul class="main_menu__collapse_ul">
                <li>
                    <a
                        href="/catalog/avtokosmetika/omyvatel/"
                        class="site_link link_menu "
                    >
                        Омыватель
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/avtokosmetika/polirol/"
                        class="site_link link_menu "
                    >
                        Полироль
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/avtokosmetika/shampuni/"
                        class="site_link link_menu "
                    >
                        Шампуни
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main_menu__item">
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/w247_laximo_oem/"
            >
                <span class="title_main_menu_ico icon-category-book-open"></span>
                <span class="title_main_menu_text">Оригинальный каталог</span>
            </a>
        </div>
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/catalog/akb/"
            >
                <span class="title_main_menu_ico icon-category-battery"></span>
                <span class="title_main_menu_text">Аккумуляторы</span>
            </a>
        </div>
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/catalog/wiper/"
            >
                <span class="title_main_menu_ico icon-category-wiper"></span>
                <span class="title_main_menu_text">Щетки стеклоочистителя</span>
            </a>
        </div>
        <div class="main_menu__item_block">
            <a class="planshet_inviz link_menu title_main_menu " href="/lamp/">
                <span class="title_main_menu_ico icon-category-light-bulb"></span>
                <span class="title_main_menu_text">Автолампы</span>
            </a>
        </div>
        <div class="main_menu__item_block">
            <a
                class="planshet_inviz link_menu title_main_menu "
                href="/catalog/avtoaksessuary/"
            >
                <span class="title_main_menu_ico icon-category-accesory"></span>
                <span class="title_main_menu_text">Автоаксессуары</span>
            </a>
            <ul class="main_menu__collapse_ul">
                <li>
                    <a
                        href="/catalog/avtoaksessuary/kovriki/"
                        class="site_link link_menu "
                    >
                        Коврики
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/avtoaksessuary/shchetki-skrebki/"
                        class="site_link link_menu "
                    >
                        Щетки, скребки
                    </a>
                </li>

                <li>
                    <a
                        href="/catalog/avtoaksessuary/chekhly-na-sideniya-nakidki/"
                        class="site_link link_menu "
                    >
                        Чехлы на сидения, накидки
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>; */}
