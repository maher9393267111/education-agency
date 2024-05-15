"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "../i18nConfig";

export default function LanguageChangerOLD() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    console.log(newLocale ,"LOCALEEEE")

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname, { scroll: false });
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        {
          scroll: false,
        }
      );
    }
  };

  return (
    <div className="flex w-full justify-end">
      {["en", "fr", "it", "ru"].map((locale) => (
        <button
          key={locale}
          onClick={() => handleChange({ target: { value: locale } })}
          className={`px-4 py-2 text-[14px] font-medium h-10 rounded-md transition-colors ${
            currentLocale === locale
              ? "bg-none text-gray-800 font-semibold"
              : "bg-none hover:text-gray-400 text-gray-500"
          }`}
        >
          {locale}
        </button>
      ))}
    </div>
  );
}