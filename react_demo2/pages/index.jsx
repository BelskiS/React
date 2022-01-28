import React from "react";
import Head from "../components/head";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Link from "next/link";

function HomePage() {
    return (
        <>
            <Head></Head>
            
            <Header></Header>
            <div className="site_wrap_content">
                <section className="sec_main advantage_main">
                    <div className="site_container">
                        <div className="wrap_advantage_main_item">
                            <div className="advantage_main_item">
                                <div className="advantage_main_item__text">
                                    <div className="advantage_main_item__title title_h2">
                                        Сеть магазинов и автосервисов в Москве и Московской области                    </div>
                                    <div className="advantage_main_item__text_descr">
                                        Широкии ассортимент автотоваров. Автомасла для любых автомобилеи, вся продукция для прохождения технического обслуживания автомобиля и услуги экспресс-сервиса, позволяющие «на месте» воспользоваться приобретенными товарами.                    </div>
                                </div>

                                <div className="advantage_main_item__descr">


                                    <div className="advantage_main_item__descr__item  advantage_main_year">
                                        14 лет на рынке автозапчастей</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_shop">
                                        10 магазинов и автосервисов</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_product">
                                        15 тыс. товаров в ассортименте</div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec_main advantage_main">
                    <div className="site_container">
                        <div className="wrap_advantage_main_item">
                            <div className="advantage_main_item">
                                <div className="advantage_main_item__text">
                                    <div className="advantage_main_item__title title_h2">
                                        Сеть магазинов и автосервисов в Москве и Московской области                    </div>
                                    <div className="advantage_main_item__text_descr">
                                        Широкии ассортимент автотоваров. Автомасла для любых автомобилеи, вся продукция для прохождения технического обслуживания автомобиля и услуги экспресс-сервиса, позволяющие «на месте» воспользоваться приобретенными товарами.                    </div>
                                </div>

                                <div className="advantage_main_item__descr">


                                    <div className="advantage_main_item__descr__item  advantage_main_year">
                                        14 лет на рынке автозапчастей</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_shop">
                                        10 магазинов и автосервисов</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_product">
                                        15 тыс. товаров в ассортименте</div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec_main advantage_main">
                    <div className="site_container">
                        <div className="wrap_advantage_main_item">
                            <div className="advantage_main_item">
                                <div className="advantage_main_item__text">
                                    <div className="advantage_main_item__title title_h2">
                                        Сеть магазинов и автосервисов в Москве и Московской области                    </div>
                                    <div className="advantage_main_item__text_descr">
                                        Широкии ассортимент автотоваров. Автомасла для любых автомобилеи, вся продукция для прохождения технического обслуживания автомобиля и услуги экспресс-сервиса, позволяющие «на месте» воспользоваться приобретенными товарами.                    </div>
                                </div>

                                <div className="advantage_main_item__descr">


                                    <div className="advantage_main_item__descr__item  advantage_main_year">
                                        14 лет на рынке автозапчастей</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_shop">
                                        10 магазинов и автосервисов</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_product">
                                        15 тыс. товаров в ассортименте</div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="sec_main advantage_main">
                    <div className="site_container">
                        <div className="wrap_advantage_main_item">
                            <div className="advantage_main_item">
                                <div className="advantage_main_item__text">
                                    <div className="advantage_main_item__title title_h2">
                                        Сеть магазинов и автосервисов в Москве и Московской области                    </div>
                                    <div className="advantage_main_item__text_descr">
                                        Широкии ассортимент автотоваров. Автомасла для любых автомобилеи, вся продукция для прохождения технического обслуживания автомобиля и услуги экспресс-сервиса, позволяющие «на месте» воспользоваться приобретенными товарами.                    </div>
                                </div>

                                <div className="advantage_main_item__descr">


                                    <div className="advantage_main_item__descr__item  advantage_main_year">
                                        14 лет на рынке автозапчастей</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_shop">
                                        10 магазинов и автосервисов</div>




                                    <div className="advantage_main_item__descr__item  advantage_main_product">
                                        15 тыс. товаров в ассортименте</div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="main_page_selected_auto">
                    <div className="site_container">



                        <div className="main_block_link_selected_auto">
                            <div className="main_block_link_selected_auto__item">
                                <div className="main_block_link_selected_auto__title"><span>Для более точного подбора выберите автомобиль.</span></div>

                                <a href="#modal_add_auto_new111" className="main_link_selected_auto" data-toggle="modal">
                                    <span className="selected_auto__ico icon-ion-car-sport-sharp"></span>
                                    <span className="wrap_main_link_selected_auto__item">
                                        <span className="main_link_selected_auto__item link_selected_auto__item_brand">
                                            <span className="link_selected_auto__item__text" id="BrandAuto">Марка</span>
                                        </span>
                                        <span className="main_link_selected_auto__item link_selected_auto__item_year">
                                            <span className="link_selected_auto__item__text" id="YearAuto">Год</span>
                                        </span>
                                        <span className="main_link_selected_auto__item link_selected_auto__item_model">
                                            <span className="link_selected_auto__item__text" id="ModelAuto">Модель</span>
                                        </span>
                                        <span className="btn_site">Выбрать</span>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </section> */}

                {/* <section className="main_categories">
                    <div className="site_container">
                        <div className="main_categories__content">
                            <a href="/to/" className="main_categories__item site_link mci__parts_forto">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/parts-to-1.png" alt="" /></span>
                                <span className="main_categories__item__title">Запчасти для ТО</span>
                            </a>
                            <a href="/catalog/oil/" className="main_categories__item site_link mci__oil">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/oil.png" alt="" /></span>
                                <span className="main_categories__item__title">Масла и техжидкости</span>
                            </a>
                            <a href="/catalog/avtokhimiya/" className="main_categories__item site_link mci__auto_chemical">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/autohim.png" alt="" /></span>
                                <span className="main_categories__item__title">Автохимия</span>
                            </a>
                            <a href="#" className="main_categories__item site_link mci__tires">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/tire-1.png" alt="" /></span>
                                <span className="main_categories__item__title">Шины и диски</span>
                            </a>
                            <a href="/catalog/akb/" className="main_categories__item site_link mci__batteries">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/battery.png" alt="" /></span>
                                <span className="main_categories__item__title">Аккумуляторы</span>
                            </a>
                            <div className="main_categories__item mci__height_one mci__origin_c">

                                <div className="main_categories__item__title">Оригинальный каталог</div>
                                <div className="main_categories__item__descr">Подбор автозапчастей в профессиональном каталоге</div>

                                <div id="mci__origin_c__search" className="planshet_inviz  mci__origin_c__search">

                                    <div className="mci__origin_c__search__tab_radio">
                                        <div className="radio">
                                            <input id="radioVin" type="radio" name="origin_c_searchradio" data-cont="vin"
                                                checked="checked" />
                                            <label className="site_link" for="radioVin"><span className="radio_btn"></span> по VIN
                                                номеру</label>
                                        </div>

                                        <div className="radio">
                                            <input id="radioNumber" type="radio" name="origin_c_searchradio" data-cont="number" />
                                            <label className="site_link" for="radioNumber"><span className="radio_btn"></span> по номеру
                                                кузова</label>
                                        </div>
                                    </div>

                                    <div className="site_field search__vin" style={{display: "block"}}>
                                        <form className="mci__origin_c__search__item" name="findByVIN"
                                            onsubmit="checkVinValue(this.vin.value);return false;" id="findByVIN">
                                            <input className="" placeholder="Введите VIN автомобиля" name="vin" type="text" id="vin"
                                                value="" />
                                            <button name="vinSubmit" id="vinSubmit" type="submit"
                                                className="btn_site gradient_top">Найти</button>
                                            <input type="hidden" name="option" value="com_guayaquil" />
                                            <input type="hidden" name="view" value="vehicles" />
                                            <input type="hidden" name="ft" value="findByVIN" />
                                        </form>
                                    </div>

                                    <div className="site_field search__number" style={{display: "none"}}>
                                        <form className="form" name="findByFrame"
                                            onsubmit="return checkFrameValue(this.frame.value, this.frameNo.value, this.vinSubmit);"
                                            id="findByFrame">
                                            <div className="mci__origin_c__search__item">
                                                <div className="double_input">
                                                    <input className="code_body" name="frame" type="text" id="frame"
                                                        placeholder="код кузова" value="" />
                                                    <span>-</span>
                                                    <input className="number_body" name="frameNo" type="text" id="frameNo"
                                                        placeholder="номер кузова" value="" />
                                                </div>
                                                <button name="vinSubmit" id="vinSubmit" type="submit"
                                                    className="btn_site gradient_top">Найти</button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                                <a href="/w247_laximo_oem/" className="site_link site_link_with_borderb mci__origin_c_link_in">Перейти в
                                    каталог</a>

                            </div>
                            <a href="/catalog/avtokosmetika/" className="main_categories__item site_link mci__auto_cosmetics">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/cosmetic.png" alt="" /></span>
                                <span className="main_categories__item__title">Автокосметика</span>
                            </a>
                            <a href="/catalog/wiper/" className="main_categories__item site_link mci__brushes">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/wipers.png" alt="" /></span>
                                <span className="main_categories__item__title">Щетки</span>
                            </a>
                            <a href="/catalog/" className="main_categories__item site_link mci__all_link_catalog">
                                <span className="main_categories__item__img"><img
                                        src="/bitrix/templates/e-comexpert_v2/img/main_categories/ico_book.svg" alt="" /></span>
                                <span className="main_categories__item__title">Посмотреть весь каталог товаров</span>
                            </a>
                        </div>
                    </div>
                </section> */}
            </div>

            <Footer />
        </>
    )
}

export default HomePage;