# Astro i18n Starter with YAML Supported translation

This template can handle translations using YAML file, without using this very long hard-to-work-on redundant unmaintainable unreadable language objects.


Before: 

```tsx
import { useTranslator } from "@/lib/i18n";
const t = useTranslations(Astro.currentLocale as Lang);
const locale = Astro.currentLocale as Lang;

// You have to write this entire object directly in your code, how confusing 😫
{t({
  ja: "こんにちは",
  en: "Hello",
  "zh-cn": "你好",
  ar: "مرحبًا",
})}
```

After:

`src/locales/en.yaml`

```yaml
greetings:
  hello: Hello
  goodnight: "Good Night!"
```

`src/locales/ja.yaml`

```yaml
greetings:
  hello: こんにちは
  goodnight: "お゛や゛す゛み゛な゛さ゛い゛！゛！゛！゛！゛！゛（大声）"
```

`src/pages/[lang]/yours.astro`

```tsx
import { useTranslator } from "@/lib/i18n";
const t = useTranslator(Astro.currentLocale as "en" | "ja");

// Just specify the key you defined, you are absolutely free to work on!😁
{t("greetings.hello")}
{t("greetings.goodnight")}
```

Enjoy.