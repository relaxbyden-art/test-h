# Flash Sale — что изменено и как откатить

## Акция
- **Скидка:** 25%
- **Промокод:** `8472XPQ1`
- **Таймер:** до 29 мая 2026, 23:59 Dubai (UTC+4)
- **Планы в акции:** $100K, $150K, $200K

---

## Файлы затронуты

| Файл | Что изменено |
|------|-------------|
| `hashhedge-react-app-ru.js` | Попап, тарифная таблица |
| `hashhedge-react.css` | Фон попапа, CSS для карточек таймера |

---

## Изменения в `hashhedge-react-app-ru.js`

### 1. Тарифная таблица — добавлен $200K план

```js
// sizes
const sizes = [5000, 10000, 25000, 50000, 100000, 150000, 200000]; // добавлен 200000

// pricing
200000: 1293

// paymentLinks
200000: "https://app.hashhedge.com/ru/register"  // ← заменить на реальный payment-form URL

// accountNotes
200000: "Максимальный капитал для профессиональных трейдеров..."
```

### 2. Тарифная таблица — FLASH SALE бейджи на $100K / $150K / $200K

```js
// Добавлены переменные в map-функции (desktop и mobile карточки):
const isFlash = [100000, 150000, 200000].includes(s);
const badge = isFlash ? "FLASH SALE" : isBest ? "ВЫГОДНЫЙ" : isPop ? "ПОПУЛЯРНЫЙ" : null;
const badgeBg = isFlash ? "#fcd535" : ...
```

### 3. Тарифная таблица — зачёркнутая цена в блоке «СТОИМОСТЬ ЧЕЛЛЕНДЖА»

```js
// Добавлено после const price = pricing[size]:
const flashSizes = [100000, 150000, 200000];
const isFlashPrice = flashSizes.includes(size);
const salePrice = isFlashPrice ? Math.round(price * 75) / 100 : null;
```

Блок цены рендерит:
- Если `isFlashPrice`: зачёркнутая оригинальная + жёлтая акционная
- Иначе: обычная жёлтая цена

Также `≈ $X за $1,000 капитала` считается от акционной цены если isFlashPrice.

### 4. Попап — полностью заменена функция `PromoPopup()`

Старый попап: "Обновление платформы / Новый личный кабинет"

Новый попап Flash Sale содержит:
- Бейдж "FLASH SALE"
- Заголовок со скидкой 25%
- Подзаголовок (кол-во промокодов)
- Таймер обратного отсчёта
- Промокод с кнопкой копирования
- 3 карточки: $100K / $150K / $200K
- Футер-дисклеймер

---

## Изменения в `hashhedge-react.css`

### 1. Фон попапа — тёмно-синий вместо чёрного

```css
/* было */
linear-gradient(135deg, rgba(31,29,37,0.99) 0%, rgba(14,13,18,0.99) 100%)

/* стало */
linear-gradient(135deg, #0e1128 0%, #080c1e 100%)
```

### 2. Добавлен CSS для карточек попапа

```css
.hh-fs-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* mobile: 2 колонки */
}
```

---

## Стилевые решения (важно для EN версии)

| Элемент | Значение |
|---------|---------|
| Акционная цена | Зелёный `#10B981` |
| Бейдж скидки `-25%` | Зелёный фон `rgba(16,185,129,0.15)`, зелёный текст `#10B981` |
| Фон попапа | Тёмно-синий `#0e1128 → #080c1e` |
| Контент попапа | Центрирован (`alignItems: center`) |
| Зелёный цвет | **Не используется** нигде в акции |
| Убрана зелёная обводка 150K | `isBest` не применяется к `isFlash` размерам |

---

## Как откатить (после окончания акции)

### В `hashhedge-react-app-ru.js`:

1. **Удалить $200K** из `sizes`, `pricing`, `paymentLinks`, `accountNotes`
2. **Убрать `isFlash`** переменную из обоих map-функций (desktop + mobile карточки), вернуть старые бейджи:
   ```js
   const badge = isBest ? "ВЫГОДНЫЙ" : isPop ? "ПОПУЛЯРНЫЙ" : null;
   const badgeBg = isBest ? "#7BC75A" : active ? "var(--accent)" : "var(--fg)";
   ```
3. **Убрать `flashSizes / isFlashPrice / salePrice`** и вернуть простой рендер цены:
   ```js
   React.createElement("div", { style: { fontSize:30, fontWeight:800, color:"var(--accent)", ... }}, "$", price)
   ```
4. **Вернуть старый `PromoPopup`** (или убрать компонент вообще из рендера)
5. **Вернуть зелёную обводку 150K** (если нужно):
   ```js
   border: `1px solid ${active ? "var(--accent)" : isBest ? "rgba(123,199,90,0.5)" : "var(--line)"}`,
   ```

### В `hashhedge-react.css`:

1. **Фон попапа** — вернуть:
   ```css
   linear-gradient(135deg, rgba(31,29,37,0.99) 0%, rgba(14,13,18,0.99) 100%)
   ```
2. **Удалить блок `.hh-fs-cards`** (помечен комментарием `/* ── Flash Sale popup cards ── */`)

---

## Для EN версии (`hashhedge-react-app.js`)

Применить **те же изменения**, что и для RU, с заменой:
- Текст бейджа: `"FLASH SALE"` (уже по-английски)
- Текст заголовка: `"25% OFF Hash Hedge Challenges"`
- Подзаголовок: `"Only 200 vouchers available. Limited-time offer."`
- Промокод: тот же `8472XPQ1` (или другой если нужен отдельный для EN)
- Кнопка попапа: `"Buy Now"`
- Промокод label: `"Promo code:"`
- Промокод copy: `"Copy"` / `"✓ Copied"`
- Таймер labels: `"days"` / `"hours"` / `"mins"` / `"secs"`
- Таймер label: `"Sale ends in:"`
- Дисклеймер: `"The promotion ends when the timer runs out or all vouchers are gone."`
- Ссылки оплаты: `/en/app/payment-form/...` вместо `/ru/...`
- Payment links для EN нужно уточнить у Denis

CSS (`hashhedge-react.css`) **общий** — менять не нужно, уже обновлён.
