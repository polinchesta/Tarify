import styles from './Table.module.sass'

export default function Table() {
    return (
        <div>
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.cell}>Сравнение пакета "Экспедитор + Перевозчик"</div>
                    <div className={styles.cell}>Start</div>
                    <div className={styles.cell}>Basic</div>
                    <div className={styles.cell}>Pro</div>
                </div>
                <div className={styles.lightRow}>
                    <div className={styles.cell}>Количество пользователей</div>
                    <div className={styles.cell}>от 2-х</div>
                    <div className={styles.cell}>от 2-х</div>
                    <div className={styles.cell}>от 2-х</div>
                </div>
                <div className={styles.darkRow}>
                    <div className={styles.cell}>Ведение базы контрагентов:
                        Клиенты, перевозчики, реквизиты, история работы</div>
                    <div className={styles.cell}><img src="./green.png" alt="green" /></div>
                    <div className={styles.cell}><img src="./green.png" alt="green" /></div>
                    <div className={styles.cell}><img src="./green.png" alt="green" /></div>
                </div>
                <div className={styles.lightRow}>
                    <div className={styles.cell}>Ведение заказов:
                        Контроль этапов заказов
                        Авто перевозки (комплектные, контейнерные, негабаритные)
                        Автоматический контроль работы сотрудников</div>
                    <div className={styles.cell}><img src="./green.png" alt="green" /></div>
                    <div className={styles.cell}><img src="./green.png" alt="green" /></div>
                    <div className={styles.cell}><img src="./green.png" alt="green" /></div>
                </div>
                <div className={styles.darkRow}>
                    <div className={styles.cell}>Ведение документооборота:
                        формирование документов в 1 клик по шаблонам
                        Конструктор шаблонов
                        Хранение и сортировка базы документов
                        Контроль отправки\ получения оригиналов документов</div>
                    <div className={styles.cell}><img src="./red.png" alt="red" /></div>
                    <div className={styles.cell}><img src="./red.png" alt="red" /></div>
                    <div className={styles.cell}><img src="./red.png" alt="red" /></div>
                </div>
            </div>
        </div>
    )
}
