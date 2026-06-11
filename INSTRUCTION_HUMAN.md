# Hash Hedge Site — инструкция

Короткий гид как редактировать сайт через Claude и публиковать изменения на Tilda.

---

## 1. Что это

Сайт лежит на **Tilda**. Сложные интерактивные блоки (Pricing, Hero, попапы и т.д.) — это **React-приложение**, которое подгружается на страницу Tilda из CDN (jsDelivr) на основе нашего GitHub-репозитория. Когда меняешь код в репо и пушишь — обновлённый бандл становится доступен по новому SHA, и его нужно «запинить» в HTML-блоке T123 на странице Tilda.

**GitHub-репозиторий:** `https://github.com/relaxbyden-art/test-h` (ветка `main`)
**Локальная папка с кодом:** где её положишь у себя (например `~/Desktop/Hash Hedge/Site`)
**Где живёт сайт:** Tilda, страницы `/` (EN), `/ru`, `/pt`, `/de`, `/fr`, `/es`, `/hi`, `/id`, `/kz`, `/ua` + партнёрские `/affiliateprogram-{lang}`

---

## 2. Одноразовая настройка (15 минут)

### 2.1 Положи папку `Site` куда удобно

Например: `~/Desktop/Hash Hedge/Site`

### 2.2 Получи GitHub Personal Access Token (PAT)

1. Зайди на `https://github.com/settings/tokens` (Settings → Developer settings → Personal access tokens → Tokens (classic)).
2. **Generate new token (classic)**, expire = «No expiration» или год.
3. Scopes: галку только на **`repo`**.
4. Скопируй токен (`ghp_...`) — он показывается **один раз**, сохрани в надёжное место.

### 2.3 Создай свой `push.command`

В корне папки `Site` создай файл `push.command` (он в `.gitignore` — не закоммитится):

```sh
#!/bin/zsh
set -e

cd "/ПОЛНЫЙ/ПУТЬ/К/Site"

echo "Hash Hedge: pushing main to GitHub..."
git -c http.postBuffer=157286400 push https://relaxbyden-art:ВСТАВЬ_СВОЙ_PAT@github.com/relaxbyden-art/test-h.git main

COMMIT="$(git rev-parse --short HEAD)"

echo ""
echo "Done. Current commit: $COMMIT"
echo ""
echo "Press any key to close..."
read -k 1
```

Замени:
- `/ПОЛНЫЙ/ПУТЬ/К/Site` на твой путь (напр. `/Users/имя/Desktop/Hash Hedge/Site`)
- `ВСТАВЬ_СВОЙ_PAT` на свой токен из шага 2.2

Сделай исполняемым (в Terminal):
```sh
chmod +x "/Users/имя/Desktop/Hash Hedge/Site/push.command"
```

**Никогда не коммить этот файл и не отправляй его в чат.** Он в `.gitignore`, но проверь.

### 2.4 Установи Claude и подключи папку

1. Скачай Claude desktop с `https://claude.ai/download`.
2. Открой Claude, создай проект «Hash Hedge Site» (или как удобно).
3. Подключи (mount) папку `Site` к этому проекту.
4. Claude будет читать `AGENTS.md`, `AGENT_CONTEXT.md`, `NEXT_AGENT_INSTRUCTIONS.md` автоматически и знать как работать.

---

## 3. Ежедневный workflow

### Шаг 1. Опиши Claude что нужно поменять

Примеры:
- «На главной RU замени в Hero текст на …»
- «Поменяй цену 25K челленджа на $279 на 10 языках»
- «Сделай попап акции с таймером до 20 июня»

Claude сам найдёт нужные файлы, отредактирует, проверит синтаксис, сделает локальный коммит.

### Шаг 2. Claude скажет «локальные коммиты готовы, нужен push.command»

Он не может пушить сам (sandbox блокируется 403). Открой Finder → дважды кликни на `push.command`. Откроется Terminal, введёт PAT-команду, запушит. Когда увидишь «Press any key to close» — закрывай.

### Шаг 3. Скажи Claude «пушнул»

Claude сделает `web_fetch` на jsDelivr с новым SHA, подтвердит что бандл доступен, и отдаст готовый snippet типа:

```html
<div id="hashhedge-root"></div>
<script src="https://cdn.jsdelivr.net/gh/relaxbyden-art/test-h@НОВЫЙSHA/hashhedge-react-loader-ru.js"></script>
```

### Шаг 4. Обнови Tilda

1. Зайди в Tilda → нужная страница → найди HTML-блок (обычно T123) с этим скриптом.
2. Замени содержимое блока на новый snippet от Claude.
3. **Save** → **Опубликовать**.
4. Открой страницу в браузере → **hard refresh** (Cmd+Shift+R на Mac, Ctrl+Shift+R на Windows). На iPhone — Safari → закрыть/открыть вкладку, или Settings → Safari → Clear History.

Если правка касается нескольких языков (например, изменилась цена на 10 страницах), Claude отдаст 10 snippet'ов — обновляй каждую страницу.

### Шаг 5. Проверь визуально

Открой страницу и убедись что изменения видны. Если что-то сломалось — см. раздел 5.

---

## 4. Структура файлов (полезно понимать)

Bundle = React-приложение для одной страницы. Loader = маленький скрипт, который подгружает bundle + React. Snippet = HTML для блока T123.

**Главные страницы:**
- `hashhedge-react-app.js` + `hashhedge-react-loader.js` + `tilda-react-snippet.html` — EN
- `hashhedge-react-app-ru.js` + `hashhedge-react-loader-ru.js` + `tilda-react-snippet-ru.html` — RU
- то же с суффиксами `-de`, `-fr`, `-es`, `-pt`, `-hi`, `-id`, `-kz`, `-ua` — остальные 8 языков

**Партнёрские страницы:**
- `hashhedge-react-app-affiliate-{lang}.js` + loader + snippet, 10 языков

**Общее:**
- `hashhedge-react.css` — стили для всех страниц
- `assets/` — картинки, иконки

**Доки для Claude (не трогай, они для агента):**
- `AGENTS.md` — правила работы
- `AGENT_CONTEXT.md` — контекст проекта
- `NEXT_AGENT_INSTRUCTIONS.md` — handover

---

## 5. Если что-то сломалось

### Откатить на предыдущий рабочий SHA

Скажи Claude: «откати pin RU snippet на коммит `XYZ` и собери snippet». В Tilda обнови блок на этот SHA — сайт вернётся к рабочему состоянию.

Чтобы найти рабочий SHA — смотри git log: открой Terminal, перейди в папку `Site`, набери:
```sh
git log --oneline -20
```

### Bundle не грузится на странице

- Открой `https://cdn.jsdelivr.net/gh/relaxbyden-art/test-h@<SHA>/hashhedge-react-app-ru.js` в браузере. Должна открыться портянка JS.
- Если 404 — SHA не запушен или ошибся в snippet.
- Если 200 но сайт пустой — открой DevTools → Console на странице Tilda, посмотри ошибки. Перешли Claude — починит.

### Сломался push.command

- Проверь что PAT не истёк (`https://github.com/settings/tokens`).
- Проверь что в файле правильный путь к папке.
- В Terminal выполни вручную: `cd /путь/Site && git push origin main` — увидишь точную ошибку.

---

## 6. Важные правила

- **PAT никогда не коммитим.** Он только в `push.command`, который в `.gitignore`.
- **Файлы в `old/` не трогаем.** Это архив старых версий, не источник правды.
- **Перед большими правками** скажи Claude «убедись что папка синхронизирована с origin/main» — Claude знает что делать (правило №0).
- **После каждого push** обязательно обновляй Tilda. Если в репо новый коммит, но в Tilda старый SHA — пользователи увидят старую версию.
- **jsDelivr кеширует pinned SHA 7 дней** — это immutable cache. Поэтому каждое изменение требует НОВОГО SHA. Старый SHA не «перепомнится».

---

## 7. Часто используемое

| Что хочу | Что говорить Claude |
|---|---|
| Поменять цену на 10 языках | «Поменяй цену 25K челленджа на $279 на всех 10 языках, обнови пины» |
| Добавить акцию с таймером | «Сделай попап акции до 20 июня с такими ценами …» |
| Поменять текст в FAQ | «На главной RU в FAQ замени вопрос N на …» |
| Изменить ссылку | «Поменяй ссылку на регистрацию на … во всех bundles» |
| Откатить последнее изменение | «Откати последний коммит и собери pin'ы на предыдущий SHA» |
| Только посмотреть код, без изменений | «Покажи как сейчас выглядит блок Hero в RU bundle» |

---

**Контакты для эскалации:** если что-то критичное и Claude не помогает — пиши Денису.
