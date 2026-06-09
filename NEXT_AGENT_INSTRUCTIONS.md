# Hash Hedge Site — handover для нового агента

Этот документ описывает текущее состояние проекта, рабочий процесс и важные нюансы. Прочитай **перед** началом любой работы.

---

## 1. Что это за проект

Hash Hedge — крипто-проп-фирма. Сайт лежит на **Tilda**, а сложные интерактивные блоки рендерятся как **React-приложение**, которое подгружается через `<script>` из jsDelivr CDN на основе нашего GitHub-репозитория.

Каждая страница Tilda содержит один HTML-блок (T123) с двумя строками:
```html
<div id="hashhedge-root"></div>
<script src="https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@<SHA>/hashhedge-react-loader-<lang>.js"></script>
```

Loader подгружает React + ReactDOM + основной bundle (`hashhedge-react-app-*.js`) с того же SHA.

---

## 2. Папки и файлы

**Локальный путь:** `/Users/bdrom/Desktop/Hash Hedge/Site/`
**Sandbox-путь (для bash):** `/sessions/<session>/mnt/Site/`
**GitHub:** `https://github.com/relaxbyden-art/hash-hedge` (ветка `main`)

### Основные файлы

| Что | Главная страница | Partner page (новая) |
|---|---|---|
| **Bundle** | `hashhedge-react-app-{lang}.js` | `hashhedge-react-app-affiliate-{ru,en}.js` |
| **Loader** | `hashhedge-react-loader-{lang}.js` | `hashhedge-react-loader-affiliate-{ru,en}.js` |
| **Snippet (для Tilda)** | `tilda-react-snippet-{lang}.html` | `tilda-react-snippet-affiliate-{ru,en}.html` |
| **CSS (общий)** | `hashhedge-react.css` | (тот же) |
| **Assets** | `assets/` | (тот же) |

Языки главной: `ru, en, de, fr, es, pt, hi, id, kz, ua`.
Языки affiliate-страницы: пока только `ru` и `en` (в работе).

### Папки-инструкции (читать обязательно)

- `AGENTS.md` — критические правила (см. ниже)
- `NEXT_AGENT_INSTRUCTIONS.md` ← этот файл
- `backups/` — backup-копии bundle перед большими редизайнами
- `Hash Hedge Main Web (6)/` — reference от другого разработчика (Vercel-версия affiliate) + ассеты
- `old/` — архив, **не использовать** как источник правды

---

## 3. Workflow — как делать правки

### Стандартный цикл (одна правка)

1. **`git fetch origin`** в начале (если sandbox позволяет — может вернуть 403, тогда полагайся на pin в `tilda-react-snippet-*.html` как на источник правды).
2. **Редактируй файл** через `Edit` / `Write` инструменты.
3. **`node --check <file>.js`** — проверь синтаксис.
4. **`git add ... && git commit`** с подробным сообщением.
5. **Обнови snippet pin**: в `tilda-react-snippet-affiliate-*.html` поменяй `HH_COMMIT` и все preload-URLs на новый SHA.
6. **Запиши commit для pin** отдельно.
7. **Попроси пользователя запустить `push.command`** — у пользователя локальный zsh-скрипт, который пушит на main через PAT.
8. **После «пушнул»** — верифицируй через `mcp__workspace__web_fetch` что новый SHA доступен на `cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@<SHA>/...`.
9. **Отдай готовый snippet** для вставки в Tilda HTML-блок.

### КРИТИЧНО (правило из AGENTS.md)

- **Из sandbox `git push` блокируется HTTP 403** (proxy allowlist). **Не пытайся пушить сам** — всегда проси пользователя запустить `push.command`.
- **Никогда не пиши PAT в файлы.** PAT уже зашит в `push.command` (этот файл в `.gitignore`).
- **Не объявляй push успешным**, пока не подтвердил web_fetch'ом что SHA на jsDelivr возвращает 200.
- **Если push блокируется и нужна доставка** — используй фразу из AGENTS.md: «Я сделал локальные коммиты, но не могу пушить из-за GitHub 403 в песочнице».

### Pin / snippet нюансы

- `tilda-react-snippet-*.html` содержит `var HH_COMMIT = "<SHA>"` + кучу `<link rel="preload" href="https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@<SHA>/...">` (для CSS, JS, картинок). **Все SHA в файле должны быть одинаковые** — обычно делаешь `sed -i 's/<oldSHA>/<newSHA>/g' tilda-react-snippet-*.html`.
- jsDelivr immutable cache держит pinned SHA URLs 7 дней. После замены SHA в Tilda — пользователю нужен hard refresh (Safari → закрыть/открыть вкладку, или Settings → Clear Website Data).

---

## 4. Архитектура bundle

Каждый bundle — это **один JS-файл** ~200-280 KB, который оборачивает всё в IIFE и рендерит в `#hashhedge-root` через React UMD (загружается loader'ом).

```js
(function(){
  const { useEffect, useRef, useState, useMemo } = React;
  function useInView(ref, opts) { /* IntersectionObserver hook */ }
  function Reveal({ children, delay }) { /* fade-in wrapper */ }
  const _e = React.createElement;

  // ============= Component functions =============
  function Hero() { ... }
  function AboutProgram() { ... }
  function WhyPartner() { ... }
  function IncomeSources() { ... }
  function Calculator() { ... }
  function Steps() { ... }
  function PartnerContent() { ... }
  function Events() { ... }
  function Support() { ... }
  function FAQ() { ... }
  function BigCTA() { ... }
  function Footer() { ... }
  function MobileCTABar() { ... }

  function App() {
    return _e("div", { className: "tilda-html-hashhedge hh-with-glow" },
      _e(Header, null),
      _e(Hero, null),
      _e(AboutProgram, null),
      // ... etc
    );
  }

  // Inject CSS via <style>
  if (!document.getElementById("hh-partner-styles")) { ... }

  ReactDOM.createRoot(document.getElementById("hashhedge-root")).render(_e(App, null));
})();
```

### Конвенции

- **Никакого JSX** — компиляция out, всё через `_e = React.createElement` руками.
- **Inline-стили** в большинстве мест (style props). CSS в `<style>`-тэге внутри функции компонента только для медиа-квери и сложных селекторов.
- **Шрифты:** только **Onest** (через Google Fonts в loader). Раньше использовался **Akrobat** — теперь убран отовсюду. Никогда не возвращай Akrobat.
- **Tilda fights you** — глобальный CSS из главной (`hashhedge-react.css`) иногда бьёт по селекторам, которые ты не ожидаешь. Если что-то странно — ищи в `hashhedge-react.css` правила, которые могут зацепить твой компонент по `style*="grid-template-columns"` или подобным атрибутным селекторам. Override через **inline `<style>` блок внутри affiliate bundle** (он инжектится позже глобального CSS → побеждает по каскаду).

### Tilda HTML structure
- Affiliate-bundle оборачивается в `<div id="hashhedge-root" data-hh-ready="1">` после загрузки.
- Все внутренние селекторы должны жить в этом контексте.

---

## 5. Текущее состояние Partner pages

### RU (`/affiliateprogram-ru`)

**Финальный pinned SHA (на момент написания):** см. `tilda-react-snippet-affiliate-ru.html` — на момент handover это `db8b52a`.

Структура секций (после v11.0 редизайна):
1. Header (sticky, blur backdrop)
2. Hero — full-width фото-фон (`assets/hero-partner-vercel.webp` — 167KB)
3. AboutProgram — 4 карточки «до 80% / Weekly / Lifetime / Minutes»
4. WhyPartner — 8 карточек с visualizations (V1-V9) и subtle CSS-анимациями
5. IncomeSources — 3 источника дохода
6. Calculator — slider 0→999 трейдеров + 7-level list с YOU-badge (кликабельные ряды)
7. Steps — 4 шага
8. PartnerContent — videos grid
9. Events — Vercel-style сетка (1 hero + 2 stacked + 4 bottom)
10. Support — «Meet Tati» photo + checklist + 2 CTA
11. FAQ — 6 Q&A
12. BigCTA — финальный CTA с matrix-rain (падающие цифры)
13. Footer — 3 колонки (Product / Company / Legal)
14. MobileCTABar — sticky bottom bar на мобиле

**Убраны:** Tiers, CabinetPreview, Leaderboard, TelegramCommunity (закомментированы в App() — функции существуют как dead-code).

### EN (`/affiliateprogram-en`)

**Финальный pinned SHA:** `944de21`.

Создан как зеркало RU после v11.9, далее переведён в 5 проходов (всего ~290 фраз). На момент handover все видимые тексты — EN. Остаточный кириллик ТОЛЬКО в dead-code (TelegramCommunity / Leaderboard / Cabinet) и нативных названиях языков в lang-switcher.

Footer ссылок — на EN-версии главного сайта (`/affiliateprogram`, `/blog`, `/faq` без `/ru` суффикса).

---

## 6. Reference Vercel preview

Дизайн affiliate-страницы вдохновлён preview, который сделал другой разработчик:
- **Live:** https://hashhedge-affiliate.vercel.app/
- **Source:** `Hash Hedge Main Web (6)/` в репо — .jsx файлы и assets

Когда пользователь говорит «как на Vercel» — открой preview в Chrome MCP и сверься визуально. Тексты в совпадающих блоках (Hero, AboutProgram, Calculator, Support «Meet Tati», final CTA) уже подтянуты 1-в-1 на EN-странице.

Уникальные блоки которые НЕ совпадают с Vercel (это наша эстетика):
- WhyPartner — 8 наших viz-карточек
- Steps — наши тексты
- FAQ — наши вопросы
- IncomeSources — наши 3 источника

---

## 7. Полезные команды

```bash
# Sandbox bash
cd /sessions/<session>/mnt/Site

# Проверка синтаксиса
node --check hashhedge-react-app-affiliate-ru.js

# Найти строку в bundle
grep -n "что искать" hashhedge-react-app-affiliate-ru.js

# Найти оставшийся кириллик в EN bundle
grep -oP '"[^"]*[\x{0400}-\x{04FF}][^"]*"' hashhedge-react-app-affiliate-en.js | sort -u

# Проверить какой SHA на jsDelivr
curl -s -o /dev/null -w "%{http_code}\n" https://cdn.jsdelivr.net/gh/relaxbyden-art/hash-hedge@<SHA>/hashhedge-react-loader-affiliate-ru.js
# Или через mcp__workspace__web_fetch (он не блокируется sandbox proxy)

# Конвертировать PNG → WebP (для оптимизации)
convert assets/hero-partner-vercel.png -quality 82 -define webp:method=6 assets/hero-partner-vercel.webp
```

---

## 8. Чек-лист перед сдачей правки пользователю

- [ ] `node --check <file>.js` → SYNTAX_OK
- [ ] Commit с подробным сообщением (что / почему / как)
- [ ] Snippet pin обновлён в `tilda-react-snippet-affiliate-*.html`
- [ ] Pin commit сделан отдельным коммитом
- [ ] Попросил пользователя запустить `push.command`
- [ ] После «пушнул» — `web_fetch` на `cdn.jsdelivr.net/@<SHA>/...` вернул 200
- [ ] Отдал готовый snippet с инструкцией заменить HTML-блок в Tilda

---

## 9. Частые grиблy

1. **Sed по большому файлу** — иногда захватывает СЛИШКОМ много (см. v11.0 фаза 3 — sed-удаление Support зацепило FAQ функцию → чёрный экран). Лучше: либо `sed -i '<start>,<end>d'` с **точно проверенными границами** через `grep -n`, либо `Edit` инструмент с большим уникальным old_string.

2. **half-translated phrases** при массовом RU→EN — если в скрипте перевода есть мап `"Партнёр" → "Partner"`, то фраза `"Партнёрская программа"` после замены станет `"Partnerская программа"` (мусор). Лечится: 1) длинные фразы в маппинге **первыми**; 2) после прогона ищи `grep -oP '"[^"]*[\x{0400}-\x{04FF}][^"]*"'` и доfix вручную.

3. **CSS глобал бьёт по селектору атрибута** — если что-то странно выглядит, проверь `hashhedge-react.css` на правила вида `[style*="grid-template-columns"][style*="margin-bottom"]` которые могут случайно зацепиться. Чинится локальным override с той же специфичностью + `!important`.

4. **React-обёртки с `Reveal`** — если IntersectionObserver не успевает сработать (особенно на мобильных Safari), `opacity: 0` остаётся. Лечится: убрать Reveal-обёртку для критичного контента и/или не вязать `opacity` на `useInView`.

5. **Tilda кэширует HTML-блок** — после смены SHA в snippet иногда нужно открыть Tilda → пересохранить страницу → опубликовать. Без публикации новый snippet не применится.

---

## 10. Где найти историю изменений

`git log --oneline` в репо — все коммиты с префиксом версии (v11.0, v11.1, ...) и подробными описаниями. Если нужно откатиться — backup-папка `backups/` содержит снимки bundle на момент перед большими редизайнами (например `hashhedge-react-app-affiliate-ru-v10.14.js` = последний стабильный pre-v11.0 на SHA `fcb7e77`).

---

**Контакты владельца:** Denis <d.bugaychuk@hashhedge.com>
