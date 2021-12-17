import React from "react";
import Head from "../components/head";
import Header from "../components/header";
import Link from "next/link";

function HomePage() {
    return (
        <div className="site_wrap_content">
            <Head></Head>
           
            <Header></Header>
            <section class="sec_main advantage_main">
                <div class="site_container">
                    <div class="wrap_advantage_main_item">
                        <div class="advantage_main_item">
                            <div class="advantage_main_item__text">
                                <div class="advantage_main_item__title title_h2">
                                    Сеть магазинов и автосервисов в Москве и Московской области                    </div>
                                <div class="advantage_main_item__text_descr">
                                    Широкии ассортимент автотоваров. Автомасла для любых автомобилеи, вся продукция для прохождения технического обслуживания автомобиля и услуги экспресс-сервиса, позволяющие «на месте» воспользоваться приобретенными товарами.                    </div>
                            </div>

                            <div class="advantage_main_item__descr">


                                <div class="advantage_main_item__descr__item  advantage_main_year">
                                    14 лет на рынке автозапчастей</div>




                                <div class="advantage_main_item__descr__item  advantage_main_shop">
                                    10 магазинов и автосервисов</div>




                                <div class="advantage_main_item__descr__item  advantage_main_product">
                                    15 тыс. товаров в ассортименте</div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="main_page_selected_auto">
                <div class="site_container">



                    <div class="main_block_link_selected_auto">
                        <div class="main_block_link_selected_auto__item">
                            <div class="main_block_link_selected_auto__title"><span>Для более точного подбора выберите автомобиль.</span></div>

                            <a href="#modal_add_auto_new111" class="main_link_selected_auto" data-toggle="modal">
                                <span class="selected_auto__ico icon-ion-car-sport-sharp"></span>
                                <span class="wrap_main_link_selected_auto__item">
                                    <span class="main_link_selected_auto__item link_selected_auto__item_brand">
                                        <span class="link_selected_auto__item__text" id="BrandAuto">Марка</span>
                                    </span>
                                    <span class="main_link_selected_auto__item link_selected_auto__item_year">
                                        <span class="link_selected_auto__item__text" id="YearAuto">Год</span>
                                    </span>
                                    <span class="main_link_selected_auto__item link_selected_auto__item_model">
                                        <span class="link_selected_auto__item__text" id="ModelAuto">Модель</span>
                                    </span>
                                    <span class="btn_site">Выбрать</span>
                                </span>
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <section class="main_categories">
                <div class="site_container">
                    <div class="main_categories__content">
                        <a href="/to/" class="main_categories__item site_link mci__parts_forto">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/parts-to-1.png" alt="" /></span>
                            <span class="main_categories__item__title">Запчасти для ТО</span>
                        </a>
                        <a href="/catalog/oil/" class="main_categories__item site_link mci__oil">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/oil.png" alt="" /></span>
                            <span class="main_categories__item__title">Масла и техжидкости</span>
                        </a>
                        <a href="/catalog/avtokhimiya/" class="main_categories__item site_link mci__auto_chemical">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/autohim.png" alt="" /></span>
                            <span class="main_categories__item__title">Автохимия</span>
                        </a>
                        <a href="#" class="main_categories__item site_link mci__tires">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/tire-1.png" alt="" /></span>
                            <span class="main_categories__item__title">Шины и диски</span>
                        </a>
                        <a href="/catalog/akb/" class="main_categories__item site_link mci__batteries">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/battery.png" alt="" /></span>
                            <span class="main_categories__item__title">Аккумуляторы</span>
                        </a>
                        <div class="main_categories__item mci__height_one mci__origin_c">

                            <div class="main_categories__item__title">Оригинальный каталог</div>
                            <div class="main_categories__item__descr">Подбор автозапчастей в профессиональном каталоге</div>

                            <div id="mci__origin_c__search" class="planshet_inviz  mci__origin_c__search">

                                <div class="mci__origin_c__search__tab_radio">
                                    <div class="radio">
                                        <input id="radioVin" type="radio" name="origin_c_searchradio" data-cont="vin"
                                            checked="checked" />
                                        <label class="site_link" for="radioVin"><span class="radio_btn"></span> по VIN
                                            номеру</label>
                                    </div>

                                    <div class="radio">
                                        <input id="radioNumber" type="radio" name="origin_c_searchradio" data-cont="number" />
                                        <label class="site_link" for="radioNumber"><span class="radio_btn"></span> по номеру
                                            кузова</label>
                                    </div>
                                </div>

                                <div class="site_field search__vin" style={{display: "block"}}>
                                    <form class="mci__origin_c__search__item" name="findByVIN"
                                        onsubmit="checkVinValue(this.vin.value);return false;" id="findByVIN">
                                        <input class="" placeholder="Введите VIN автомобиля" name="vin" type="text" id="vin"
                                            value="" />
                                        <button name="vinSubmit" id="vinSubmit" type="submit"
                                            class="btn_site gradient_top">Найти</button>
                                        <input type="hidden" name="option" value="com_guayaquil" />
                                        <input type="hidden" name="view" value="vehicles" />
                                        <input type="hidden" name="ft" value="findByVIN" />
                                    </form>
                                </div>

                                <div class="site_field search__number" style={{display: "none"}}>
                                    <form class="form" name="findByFrame"
                                        onsubmit="return checkFrameValue(this.frame.value, this.frameNo.value, this.vinSubmit);"
                                        id="findByFrame">
                                        <div class="mci__origin_c__search__item">
                                            <div class="double_input">
                                                <input class="code_body" name="frame" type="text" id="frame"
                                                    placeholder="код кузова" value="" />
                                                <span>-</span>
                                                <input class="number_body" name="frameNo" type="text" id="frameNo"
                                                    placeholder="номер кузова" value="" />
                                            </div>
                                            <button name="vinSubmit" id="vinSubmit" type="submit"
                                                class="btn_site gradient_top">Найти</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <a href="/w247_laximo_oem/" class="site_link site_link_with_borderb mci__origin_c_link_in">Перейти в
                                каталог</a>

                        </div>
                        <a href="/catalog/avtokosmetika/" class="main_categories__item site_link mci__auto_cosmetics">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/cosmetic.png" alt="" /></span>
                            <span class="main_categories__item__title">Автокосметика</span>
                        </a>
                        <a href="/catalog/wiper/" class="main_categories__item site_link mci__brushes">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/wipers.png" alt="" /></span>
                            <span class="main_categories__item__title">Щетки</span>
                        </a>
                        <a href="/catalog/" class="main_categories__item site_link mci__all_link_catalog">
                            <span class="main_categories__item__img"><img
                                    src="/bitrix/templates/e-comexpert_v2/img/main_categories/ico_book.svg" alt="" /></span>
                            <span class="main_categories__item__title">Посмотреть весь каталог товаров</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;