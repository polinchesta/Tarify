import React from 'react'
import styles from './Card.module.sass'

export default function Card() {
    return (
        <div className={styles.card_container}>
            <div className={styles.card}>
                <div className={styles.cardHeader}><h3>START </h3><p>От 2-х пользователей</p></div>
                <div className={styles.cardBody}></div>
                <div className={styles.blockPrice}>
                    <p className={styles.price}>20 EUR<p>за пользователя /мес</p></p>
                    <div className={styles.blockTransport}>
                        <img className={styles.car} src='./car.svg' alt='car' />
                        <p>поддержка типов транспорта</p>
                    </div>
                </div>
                <ul>
                    <li>Автоперевозки</li>
                    <li>Ведение заказов</li>
                    <li>Ведение базы контрагентов</li>
                    <li>Работа со статусами заказов/грузов/рейсов</li>
                    <li>Ведение финансов</li>
                    <li>Ведение документооборота</li>
                    <li>Типовые отчеты</li>
                    <li>Поддержка мультивалютности</li>
                    <li>Типовое внедрение 4logist</li>
                    <li>Настройка прав доступа</li>
                    <li>Базовая поддержка</li>
                </ul>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}><h3>BASIC </h3><p>От 2-х пользователей</p></div>
                <div className={styles.blockPrice}>
                    <p className={styles.price}>30 EUR<p>за пользователя /мес</p></p>
                    <div className={styles.blockTransport}>
                        <div className={styles.blockImage}>
                            <img className={styles.car} src='./car.svg' alt='car' />
                            <img className={styles.box} src='./box.svg' alt='box' /></div>
                        <p>поддержка типов транспорта</p>
                    </div>
                </div>
                <ul>
                    <li>Функционал пакета Start</li>
                    <li>Транспортный модуль</li>
                    <li>Сборные грузы (консолидация)</li>
                    <li>Работа с запросами от клиентов</li>
                    <li>Ведение субподрядные сделки</li>
                    <li>Модуль контроля задач</li>
                    <li>Модуль бонусов и заработной платы</li>
                    <li>Расширенные отчеты</li>
                    <li>Отправка статусов в Whatsapp и на почту</li>
                    <li>Расширенное внедрение 4logist</li>
                    <li>Интеграция с транспортными биржами</li>
                    <li>Базовая интеграция с 1С*</li>
                    <li>Отправка статусов клиентам в Whatsapp + email</li>
                    <li>Интеграция с Google Drive</li>
                    <li>Google Address Autocomplete</li>
                    <li>IP телефония</li>
                    <li>Возможность использовать API</li>
                </ul>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}><h3>PRO</h3> <p>От 2-х пользователей</p></div>
                <div className={styles.blockPrice}>
                    <p className={styles.price}>35 EUR<p>за пользователя /мес</p></p>
                    <div className={styles.blockTransport}>
                        <div className={styles.blockImage}>

                            <img className={styles.car} src='./car.svg' alt='car' />
                            <img className={styles.box} src='./box.svg' alt='box' />
                            <img className={styles.transport} src='./transport.svg' alt='transport' />
                            <img className={styles.sea} src='./sea.svg' alt='sea' />
                            <img className={styles.airplane} src='./airplane.svg' alt='airplane' />
                        </div>
                        <p>поддержка типов транспорта</p>
                    </div>
                </div>
                <ul>
                    <li>Функционал пакета Basic</li>
                    <li>Модуль мультимодальных перевозок</li>
                    <li>Ведение контейнерных перевозок</li>
                    <li>Приоритетная поддержка</li>
                    <li>Личные кабинеты для контрагентов</li>
                    <li>Модуль индивидуальных отчетов</li>
                    <li>Модуль склада для консолидации</li>
                    <li>Неограниченное количество компаний в аккаунте</li>
                    <li>Индивидуальное внедрение 4logist</li>
                    <li>Мобильное приложение для склада со сканером</li>
                    <li>Мобильное приложение для клиентов</li>
                    <li>Индивидуальный Расчет ЗП (в разработке)</li>
                    <li>Индивидуальные курсы (в разработке)</li>
                    <li>Интеграция с Google Data Studio</li>
                </ul>
            </div>
        </div>
    )
}
