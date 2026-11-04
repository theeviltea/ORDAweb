'use client';

/* Сгенерировано из дизайн-макета ORDA (canvas). Разметка повторяет макет 1:1. */
import Link from 'next/link';
import { asset } from '@/lib/asset';
import { Icon } from '@/components/Icon';
import { Star } from '@/components/Star';
import { useDC } from '@/lib/dc';
import { vals, tick } from './Docs.vals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function DocsView(props: {}) {
  const self = useDC(props, tick);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const v: any = vals(self);
  return (
    <>
      <div style={{ width: '100%', background: '#172A51', paddingBottom: '1px', fontFamily: "'Roboto Condensed', sans-serif", color: '#172A51' }}>
        <section style={{ position: 'relative', overflow: 'hidden', padding: '48px 0 44px' }} aria-label="Документы">
          <Star w={220} h={360} fill="rgba(18, 158, 217, 0.12)" style={{ position: 'absolute', right: '-60px', top: '-80px' }} />
          <Star w={24} h={24} fill="#129ED9" style={{ position: 'absolute', left: '46%', top: '54px' }} />
          <Star w={12} h={12} fill="#FFFFFF" style={{ position: 'absolute', left: '62%', top: '120px' }} />
          <Star w={90} h={150} fill="rgba(124, 198, 233, 0.1)" style={{ position: 'absolute', left: '-30px', bottom: '-40px' }} />
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '36px',
            }}
          >
            <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 520px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <nav
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#7FA3C9',
                  }}
                  aria-label="Навигация"
                >
                  <Link style={{ color: '#7FA3C9', textDecoration: 'none' }} href="/">
                    Главная
                  </Link>
                  <Icon name="arrow-right-01" size={14} weight={2} color="#7FA3C9" />
                  <span style={{ color: '#CFE3F2' }}>Документы</span>
                </nav>
                <h1
                  style={{
                    margin: '0',
                    fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                    fontSize: '80px',
                    fontWeight: '600',
                    lineHeight: '0.92',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                  }}
                >
                  Оферта и правила
                </h1>
                <p style={{ margin: '0', maxWidth: '560px', fontSize: '19px', lineHeight: '1.5', color: '#CFE3F2' }}>
                  Публичная оферта, политика конфиденциальности, оплата, доставка, обмен и возврат — всё в одном месте.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            position: 'relative',
            margin: '0 max(24px, calc((100% - 1280px) / 2)) 40px',
            borderRadius: '32px',
            overflow: 'hidden',
            background: '#FFFFFF',
            padding: '40px 0',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 40px',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <nav
                style={{
                  flex: '0 0 300px',
                  position: 'sticky',
                  top: '110px',
                  padding: '16px',
                  borderRadius: '24px',
                  background: '#F2F6FA',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
                aria-label="Документы"
              >
                <span
                  style={{
                    padding: '4px 12px 10px',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5B6B8C',
                  }}
                >
                  Содержание
                </span>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#offer"
                >
                  <Icon name="file-01" size={18} weight={1.6} color="#129ED9" />
                  Публичная оферта
                </a>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#privacy"
                >
                  <Icon name="shield-01" size={18} weight={1.6} color="#129ED9" />
                  Политика конфиденциальности
                </a>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#personal-data"
                >
                  <Icon name="security-check" size={18} weight={1.6} color="#129ED9" />
                  Согласие на обработку персональных данных
                </a>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#order"
                >
                  <Icon name="shopping-cart-check-01" size={18} weight={1.6} color="#129ED9" />
                  Как оформить заказ
                </a>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#payment"
                >
                  <Icon name="credit-card" size={18} weight={1.6} color="#129ED9" />
                  Оплата и безопасность
                </a>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#delivery"
                >
                  <Icon name="delivery-truck-01" size={18} weight={1.6} color="#129ED9" />
                  Доставка и самовывоз
                </a>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    minHeight: '44px',
                    padding: '0 12px',
                    borderRadius: '12px',
                    color: '#172A51',
                    fontSize: '16px',
                    fontWeight: '600',
                    textDecoration: 'none',
                  }}
                  href="#returns"
                >
                  <Icon name="delivery-return-01" size={18} weight={1.6} color="#129ED9" />
                  Обмен и возврат
                </a>
                <Link
                  style={{
                    marginTop: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    minHeight: '44px',
                    padding: '0 12px',
                    fontSize: '15px',
                    fontWeight: '700',
                    textDecoration: 'none',
                  }}
                  href="/legal"
                >
                  <Icon name="legal-document-01" size={18} weight={1.8} color="#0B7DB0" />
                  Реквизиты клуба
                </Link>
              </nav>
              <div style={{ flex: '1 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="offer"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Публичная оферта
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>1. Общие положения</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Настоящий документ — публичная оферта [Полное наименование юрлица, например ТОО «Футбольный клуб «Ордабасы»] (далее — «Клуб») о продаже
                      клубной атрибутики и билетов на матчи через мобильное приложение и сайт [ordabasy.kz].
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Оферта считается принятой (акцептованной), когда покупатель отмечает согласие с её условиями на экране оформления заказа и оплачивает
                      заказ. Действующая редакция всегда доступна в приложении: Профиль → Документы и реквизиты.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>2. Предмет</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Клуб продаёт официальную атрибутику ФК «Ордабасы» (игровую форму, одежду, сувениры) и электронные билеты на домашние матчи. Список товаров
                      и услуг соответствует разделам «Магазин» и «Билеты».
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>3. Товары и цены</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      На карточке каждого товара указаны описание, характеристики, комплектация и гарантийные условия.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Цены указаны в казахстанских тенге и включают НДС. Стоимость доставки показывается отдельно на этапе оформления и включается в итог до
                      оплаты. Комиссия за оплату картой не взимается.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>4. Порядок оформления заказа</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      1. Выберите товар в разделе «Магазин» или матч в разделе «Билеты». На карточке товара указаны характеристики, комплектация, гарантия и
                      цена.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      2. Укажите размер, цвет и количество (для билетов — трибуну и число мест) и нажмите «Купить».
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      3. На экране оформления выберите способ получения: самовывоз, курьер по Шымкенту или доставка по Казахстану. Стоимость доставки сразу
                      добавится к итогу.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      4. Проверьте состав заказа и итоговую сумму в тенге (с НДС и доставкой) и отметьте согласие с публичной офертой и политикой
                      конфиденциальности.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      5. Нажмите «Оплатить» — откроется защищённая платёжная страница Halyk Bank (ePay). Введите данные карты Visa или Mastercard и подтвердите
                      платёж кодом 3-D Secure от вашего банка.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      6. После оплаты заказ появится в разделе «Мои заказы» (билеты — в «Мои билеты»), а электронный чек придёт на e-mail. О смене статуса мы
                      сообщим уведомлением.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>5. Оплата</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Оплата принимается банковскими картами Visa и Mastercard через платёжный сервис Halyk Bank (ePay). Списание производится в казахстанских
                      тенге.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Комиссия за оплату картой не взимается. Итоговая сумма к оплате показывается до перехода к оплате и не меняется.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Платёж подтверждается по технологии 3-D Secure (Visa Secure, Mastercard Identity Check): банк, выпустивший карту, может запросить
                      одноразовый код из SMS или подтверждение в своём приложении.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если оплата не прошла, деньги не списываются; при временной блокировке суммы банк вернёт её автоматически.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>6. Доставка и получение</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Самовывоз — бесплатно: Фан-шоп «Ордабасы», Казахстан, г. Шымкент, [Адрес фан-шопа]. Телефон [+7 7xx xxx xx xx]. Режим работы: Ежедневно
                      10:00–20:00, в дни матчей — до 22:00. [Как добраться: ориентиры, вход, парковка]. Заказ можно забрать на следующий день после оплаты, при
                      себе — номер заказа и документ, удостоверяющий личность.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Курьер по Шымкенту — 1 500 ₸, 1–2 рабочих дня после оплаты. Курьер заранее позвонит, чтобы согласовать время.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Доставка по Казахстану — 2 500 ₸, 3–7 рабочих дней через [службу доставки]. Номер для отслеживания придёт уведомлением.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Ограничения: доставка выполняется только по территории Республики Казахстан; за рубеж товары не отправляются. Экспортных и лицензионных
                      ограничений на товары нет.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Билеты — электронные: после оплаты они появляются в разделе «Мои билеты» с QR-кодом для прохода на стадион. Печатать билет не нужно.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>7. Отмена заказа</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Отменить заказ можно до передачи его в доставку (обычно в течение 24 часов после оплаты) — в разделе «Мои заказы» или через Центр
                      поддержки. Деньги вернутся полностью.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Билет на матч можно вернуть не позднее чем за [N] часов до начала матча. После этого срока билет возврату не подлежит, кроме случаев
                      отмены или переноса матча.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>8. Обмен и возврат товара</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Товар надлежащего качества можно обменять или вернуть в течение 14 календарных дней, не считая дня покупки, если он не был в употреблении,
                      сохранены товарный вид, ярлыки и бирки, а также чек (электронный чек в приложении подходит). Это право установлено Законом Республики
                      Казахстан «О защите прав потребителей».
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если товар оказался некачественным или некомплектным, вы можете выбрать замену на такой же товар, замену на другой товар с перерасчётом
                      цены, устранение недостатков или возврат денег. Обратитесь в течение гарантийного срока, указанного на карточке товара.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Как оформить: напишите в Центр поддержки в приложении или позвоните [+7 7xx xxx xx xx], укажите номер заказа и причину. Мы пришлём
                      инструкцию, примем товар в фан-шопе или через службу доставки и проверим его в течение [N] рабочих дней. Расходы на возврат
                      некачественного товара несёт клуб.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>9. Возврат денег</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Деньги возвращаются только на ту карту, с которой был оплачен заказ, — наличными или на другую карту возврат не производится.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Клуб оформляет возврат в течение [N] рабочих дней после одобрения заявки. Срок зачисления на карту зависит от банка, выпустившего карту, и
                      обычно составляет от 3 до 30 рабочих дней.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если заказ отменён до отправки, стоимость доставки возвращается полностью; при возврате товара надлежащего качества стоимость доставки не
                      возвращается.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>10. Безопасность платежей</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Данные карты вводятся только на защищённой платёжной странице Halyk Bank и передаются по зашифрованному соединению (HTTPS/TLS). Клуб не
                      получает и не хранит номер карты, срок действия и CVV/CVC.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Платёжная система банка соответствует требованиям стандарта безопасности PCI DSS международных платёжных систем.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Каждый платёж проходит проверку 3-D Secure. Никому не сообщайте коды из SMS — сотрудники клуба никогда их не запрашивают.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если вы заметили подозрительную операцию, сразу свяжитесь с вашим банком и с нашей поддержкой: [+7 7xx xxx xx xx].
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>11. Права на товары</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Товары выпускаются под товарными знаками ФК «Ордабасы», права на которые принадлежат Клубу [или: используются по лицензионному договору №
                      [..] от [..] с [правообладатель]]. Продажа атрибутики и билетов не относится к лицензируемым видам деятельности.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>12. Ответственность и споры</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Стороны руководствуются законодательством Республики Казахстан. Претензии принимаются через Центр поддержки и рассматриваются в течение 10
                      рабочих дней. Если спор не удалось решить в претензионном порядке, он рассматривается в суде по месту нахождения Клуба.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>13. Реквизиты</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      [Полное наименование юрлица, например ТОО «Футбольный клуб «Ордабасы»], БИН [БИН]. Юридический адрес: [Юридический адрес]. Фактический
                      адрес: [Фактический адрес]. Телефон: [+7 7xx xxx xx xx], e-mail: [support@ordabasy.kz].
                    </p>
                  </section>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
                        aria-label="Принимаем Visa и Mastercard, оплата через Halyk ePay"
                      >
                        <img style={{ width: '60px', height: '38px', borderRadius: '6px' }} src={asset('/img/pay-visa.png')} alt="Visa" />
                        <img style={{ width: '60px', height: '38px', borderRadius: '6px' }} src={asset('/img/pay-mastercard.png')} alt="Mastercard" />
                        <a
                          style={{
                            height: '38px',
                            boxSizing: 'border-box',
                            padding: '0 12px',
                            borderRadius: '6px',
                            background: '#FFFFFF',
                            border: '1px solid #DCE3EE',
                            color: '#172A51',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            textDecoration: 'none',
                          }}
                          href="https://epayment.kz"
                          aria-label="Halyk ePay — epayment.kz"
                        >
                          Halyk ePay
                          <Icon name="link-square-02" size={15} weight={1.8} color="#5B6B8C" />
                        </a>
                      </div>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', lineHeight: '1.35', color: '#5B6B8C' }}>
                        <Icon name="security-check" size={16} weight={1.8} color="#137040" />
                        Платежи защищены 3-D Secure: Visa Secure и Mastercard Identity Check
                      </span>
                    </div>
                  </div>
                </article>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="privacy"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Политика конфиденциальности
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Какие данные мы собираем</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Имя, фамилию, номер телефона, e-mail, дату рождения и фото профиля — когда вы регистрируетесь или редактируете профиль.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>Адрес доставки — когда оформляете заказ с доставкой.</p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Историю заказов, билетов, баллов и участия в активностях фан-зоны.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Технические данные: модель устройства, версию приложения, IP-адрес — для работы и защиты сервиса.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Зачем</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Чтобы оформлять и доставлять заказы, выпускать билеты, начислять баллы, отвечать в поддержке и присылать уведомления, которые вы включили.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Мы не продаём персональные данные и не передаём их третьим лицам для рекламы.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Кому передаём</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Halyk Bank — для проведения платежей (данные карты вводятся на странице банка и Клубу не передаются).
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Службам доставки — имя, телефон и адрес, только для доставки вашего заказа.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Государственным органам — в случаях, предусмотренных законодательством Республики Казахстан.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Хранение и защита</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Данные хранятся на серверах, расположенных на территории Республики Казахстан, в течение срока действия аккаунта и сроков, установленных
                      законодательством.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Доступ к данным есть только у сотрудников, которым он нужен для работы; соединение с приложением шифруется.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Ваши права</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Вы можете посмотреть и изменить свои данные в разделе «Личные данные», отозвать согласие на обработку и удалить аккаунт в «Настройках».
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>По вопросам о данных пишите на [support@ordabasy.kz].</p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Оператор данных</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      [Полное наименование юрлица, например ТОО «Футбольный клуб «Ордабасы»], БИН [БИН]. Юридический адрес: [Юридический адрес]. Фактический
                      адрес: [Фактический адрес]. Телефон: [+7 7xx xxx xx xx], e-mail: [support@ordabasy.kz].
                    </p>
                  </section>
                </article>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="personal-data"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Согласие на обработку персональных данных
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Согласие</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Регистрируясь в приложении и оформляя заказы, я в соответствии с Законом Республики Казахстан «О персональных данных и их защите» даю
                      [Полное наименование юрлица, например ТОО «Футбольный клуб «Ордабасы»] согласие на сбор и обработку моих персональных данных: фамилии,
                      имени, номера телефона, e-mail, даты рождения, фото профиля, адреса доставки, истории заказов.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Цели и действия</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Цели: регистрация и ведение аккаунта, исполнение заказов и выпуск билетов, программа лояльности, поддержка, уведомления.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Действия: сбор, запись, хранение, уточнение, использование, передача Halyk Bank и службам доставки в объёме, необходимом для исполнения
                      заказа, обезличивание, блокирование и уничтожение.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Срок и отзыв</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Согласие действует до удаления аккаунта или до его отзыва. Отозвать согласие можно, удалив аккаунт в «Настройках» или написав на
                      [support@ordabasy.kz].
                    </p>
                  </section>
                </article>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="order"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Как оформить заказ
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Шаги</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      1. Выберите товар в разделе «Магазин» или матч в разделе «Билеты». На карточке товара указаны характеристики, комплектация, гарантия и
                      цена.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      2. Укажите размер, цвет и количество (для билетов — трибуну и число мест) и нажмите «Купить».
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      3. На экране оформления выберите способ получения: самовывоз, курьер по Шымкенту или доставка по Казахстану. Стоимость доставки сразу
                      добавится к итогу.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      4. Проверьте состав заказа и итоговую сумму в тенге (с НДС и доставкой) и отметьте согласие с публичной офертой и политикой
                      конфиденциальности.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      5. Нажмите «Оплатить» — откроется защищённая платёжная страница Halyk Bank (ePay). Введите данные карты Visa или Mastercard и подтвердите
                      платёж кодом 3-D Secure от вашего банка.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      6. После оплаты заказ появится в разделе «Мои заказы» (билеты — в «Мои билеты»), а электронный чек придёт на e-mail. О смене статуса мы
                      сообщим уведомлением.
                    </p>
                  </section>
                </article>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="payment"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Оплата и безопасность
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Способы и условия оплаты</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Оплата принимается банковскими картами Visa и Mastercard через платёжный сервис Halyk Bank (ePay). Списание производится в казахстанских
                      тенге.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Комиссия за оплату картой не взимается. Итоговая сумма к оплате показывается до перехода к оплате и не меняется.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Платёж подтверждается по технологии 3-D Secure (Visa Secure, Mastercard Identity Check): банк, выпустивший карту, может запросить
                      одноразовый код из SMS или подтверждение в своём приложении.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если оплата не прошла, деньги не списываются; при временной блокировке суммы банк вернёт её автоматически.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Безопасность платежей</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Данные карты вводятся только на защищённой платёжной странице Halyk Bank и передаются по зашифрованному соединению (HTTPS/TLS). Клуб не
                      получает и не хранит номер карты, срок действия и CVV/CVC.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Платёжная система банка соответствует требованиям стандарта безопасности PCI DSS международных платёжных систем.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Каждый платёж проходит проверку 3-D Secure. Никому не сообщайте коды из SMS — сотрудники клуба никогда их не запрашивают.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если вы заметили подозрительную операцию, сразу свяжитесь с вашим банком и с нашей поддержкой: [+7 7xx xxx xx xx].
                    </p>
                  </section>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}
                        aria-label="Принимаем Visa и Mastercard, оплата через Halyk ePay"
                      >
                        <img style={{ width: '60px', height: '38px', borderRadius: '6px' }} src={asset('/img/pay-visa.png')} alt="Visa" />
                        <img style={{ width: '60px', height: '38px', borderRadius: '6px' }} src={asset('/img/pay-mastercard.png')} alt="Mastercard" />
                        <a
                          style={{
                            height: '38px',
                            boxSizing: 'border-box',
                            padding: '0 12px',
                            borderRadius: '6px',
                            background: '#FFFFFF',
                            border: '1px solid #DCE3EE',
                            color: '#172A51',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '14px',
                            fontWeight: '700',
                            textDecoration: 'none',
                          }}
                          href="https://epayment.kz"
                          aria-label="Halyk ePay — epayment.kz"
                        >
                          Halyk ePay
                          <Icon name="link-square-02" size={15} weight={1.8} color="#5B6B8C" />
                        </a>
                      </div>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', lineHeight: '1.35', color: '#5B6B8C' }}>
                        <Icon name="security-check" size={16} weight={1.8} color="#137040" />
                        Платежи защищены 3-D Secure: Visa Secure и Mastercard Identity Check
                      </span>
                    </div>
                  </div>
                </article>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="delivery"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Доставка и самовывоз
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Способы получения</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Самовывоз — бесплатно: Фан-шоп «Ордабасы», Казахстан, г. Шымкент, [Адрес фан-шопа]. Телефон [+7 7xx xxx xx xx]. Режим работы: Ежедневно
                      10:00–20:00, в дни матчей — до 22:00. [Как добраться: ориентиры, вход, парковка]. Заказ можно забрать на следующий день после оплаты, при
                      себе — номер заказа и документ, удостоверяющий личность.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Курьер по Шымкенту — 1 500 ₸, 1–2 рабочих дня после оплаты. Курьер заранее позвонит, чтобы согласовать время.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Доставка по Казахстану — 2 500 ₸, 3–7 рабочих дней через [службу доставки]. Номер для отслеживания придёт уведомлением.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Ограничения: доставка выполняется только по территории Республики Казахстан; за рубеж товары не отправляются. Экспортных и лицензионных
                      ограничений на товары нет.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Билеты — электронные: после оплаты они появляются в разделе «Мои билеты» с QR-кодом для прохода на стадион. Печатать билет не нужно.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Отмена заказа</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Отменить заказ можно до передачи его в доставку (обычно в течение 24 часов после оплаты) — в разделе «Мои заказы» или через Центр
                      поддержки. Деньги вернутся полностью.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Билет на матч можно вернуть не позднее чем за [N] часов до начала матча. После этого срока билет возврату не подлежит, кроме случаев
                      отмены или переноса матча.
                    </p>
                  </section>
                </article>
                <article
                  style={{
                    scrollMarginTop: '110px',
                    padding: '32px',
                    borderRadius: '24px',
                    background: '#F2F6FA',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
                  }}
                  id="returns"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <h2
                      style={{
                        margin: '0',
                        fontFamily: "'SO Sporty', 'Oswald', sans-serif",
                        fontSize: '34px',
                        fontWeight: '600',
                        lineHeight: '1',
                        textTransform: 'uppercase',
                        color: '#172A51',
                      }}
                    >
                      Обмен и возврат
                    </h2>
                    <span style={{ fontSize: '14px', color: '#5B6B8C' }}>Редакция от [дата редакции]</span>
                  </div>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Обмен и возврат товара</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Товар надлежащего качества можно обменять или вернуть в течение 14 календарных дней, не считая дня покупки, если он не был в употреблении,
                      сохранены товарный вид, ярлыки и бирки, а также чек (электронный чек в приложении подходит). Это право установлено Законом Республики
                      Казахстан «О защите прав потребителей».
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если товар оказался некачественным или некомплектным, вы можете выбрать замену на такой же товар, замену на другой товар с перерасчётом
                      цены, устранение недостатков или возврат денег. Обратитесь в течение гарантийного срока, указанного на карточке товара.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Как оформить: напишите в Центр поддержки в приложении или позвоните [+7 7xx xxx xx xx], укажите номер заказа и причину. Мы пришлём
                      инструкцию, примем товар в фан-шопе или через службу доставки и проверим его в течение [N] рабочих дней. Расходы на возврат
                      некачественного товара несёт клуб.
                    </p>
                  </section>
                  <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <h3 style={{ margin: '0', fontSize: '20px', fontWeight: '700', color: '#172A51' }}>Возврат денег</h3>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Деньги возвращаются только на ту карту, с которой был оплачен заказ, — наличными или на другую карту возврат не производится.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Клуб оформляет возврат в течение [N] рабочих дней после одобрения заявки. Срок зачисления на карту зависит от банка, выпустившего карту, и
                      обычно составляет от 3 до 30 рабочих дней.
                    </p>
                    <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: '#3E4F70' }}>
                      Если заказ отменён до отправки, стоимость доставки возвращается полностью; при возврате товара надлежащего качества стоимость доставки не
                      возвращается.
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
