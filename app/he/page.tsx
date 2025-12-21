import type { Metadata } from "next";
import { LandingShell } from "@/app/components/landing/LandingShell";

export const metadata: Metadata = {
  title: "EA Product Studios | MVP Builder / Product Engineer",
  description:
    "בניית MVPים שהופכים רעיונות למוצרים אמיתיים. ליווי סטארטאפים משלב הרעיון ועד מוצר עובד בפרודקשן — בצורה מהירה, ממוקדת וסקיילבילית.",
};

export default function Page() {
  const primaryCtaHref =
    "mailto:elad@eaproductstudios.com?subject=%D7%A9%D7%99%D7%97%D7%AA%20%D7%94%D7%99%D7%9B%D7%A8%D7%95%D7%AA%20-%20EA%20Product%20Studios";

  const copy = {
    lang: "he",
    nav: { switchTo: { label: "EN", href: "/en" }, cta: "קביעת שיחת היכרות" },
    hero: {
      eyebrow: "MVP Builder / Product Engineer",
      title: "בונה MVPים שהופכים רעיונות למוצרים אמיתיים",
      subtitle:
        "MVP Builder ו־Product Engineer שמלווה סטארטאפים ויזמים משלב הרעיון ועד מוצר עובד בפרודקשן — בצורה מהירה, ממוקדת וסקיילבילית.",
      primaryCta: "קביעת שיחת היכרות חינמית",
      secondaryCta: "צפייה בשירותים",
    },
    trust: [
      {
        title: "מהיר לשוק",
        text: "בניית MVP תוך שבועות (לא חודשים), עם Scope ואבני דרך ברורות.",
        icon: "zap",
      },
      {
        title: "חשיבה מוצרית",
        text: "המיקוד הוא לבנות את הדבר הנכון — לא רק “עוד קוד”.",
        icon: "sparkles",
      },
      {
        title: "מוכן לפרודקשן",
        text: "בסיס נקי ואיכותי שמאפשר צמיחה והמשך פיתוח בצורה בטוחה.",
        icon: "shield",
      },
    ],
    problem: {
      title: "בעיה → פתרון",
      p1: "יש רעיון — אבל הדרך למוצר עובד מרגישה מסובכת.",
      bullets: [
        "ברור מה הרעיון, לא ברור איך לממש אותו",
        "הפיתוח איטי, מבולגן או מתסכל",
        "קשה לדעת מה באמת חשוב לבנות בשלב הראשון",
      ],
      p2Title: "כאן אני נכנס לתמונה",
      p2: (
        <>
          אני עובד כ־<strong>Product Engineer</strong>, לא רק כמפתח — ועוזר
          לבנות את <strong>MVP הנכון</strong>, לא רק לכתוב קוד.
        </>
      ),
    },
    services: {
      title: "שירותים",
      subtitle: "מה אני עוזר לבנות — מ־MVP ראשון ועד ליווי מתמשך בצמיחה.",
      cards: [
        {
          title: "MVP Sprint",
          text: "מרעיון ל־MVP מוכן לפרודקשן תוך שבועות, לא חודשים.",
          forWho: "יזמים וסטארטאפים בשלבי ולידציה",
        },
        {
          title: "Product Extension",
          text: "פיתוח פיצ׳רים משמעותיים, Dashboards ומערכות פנימיות למוצרים קיימים.",
          forWho: "מוצרים קיימים שצריכים יכולת ביצוע מהירה",
        },
        {
          title: "Product Retainer",
          text: "ליווי מוצרי וטכנולוגי מתמשך בזמן צמיחה.",
          forWho: "סטארטאפים שצריכים יציבות וקצב לאורך זמן",
        },
      ],
    },
    why: {
      title: "למה דווקא אני",
      bullets: [
        "חשיבה מוצרית, לא רק פיתוח",
        "Fullstack עם התמחות ב־Backend",
        "ניסיון אמיתי בסטארטאפים",
        "אחריות מלאה: מרעיון → קוד → פרודקשן",
      ],
      note: "המיקוד שלי הוא להוציא מוצר נכון, בצורה נקייה ויציבה.",
    },
    process: {
      title: "איך זה עובד",
      steps: [
        "שיחת היכרות קצרה",
        "הגדרת Scope ואבני דרך ברורות",
        "פיתוח, איטרציה ועלייה לאוויר",
        "אפשרות לליווי מתמשך",
      ],
      note: "בלי רעש מיותר, עם שקיפות מלאה.",
    },
    proof: {
      title: "ניסיון / הוכחות",
      text: "עבדתי על מערכות Backend בפרודקשן, Dashboards ומערכות ניהול פנימיות, ארכיטקטורות סקיילביליות ו־MVPים שנעשה בהם שימוש אמיתי.",
    },
    finalCta: {
      title: "מוכנים לבנות MVP?",
      subtitle: "בואו נדבר ונראה אם זה מתאים.",
      primary: "קביעת שיחת היכרות חינמית",
      switchLang: "English",
      closing:
        "שיחת היכרות קצרה (15 דקות), ללא התחייבות. בדרך כלל חוזר תוך 24 שעות.",
    },
    footer: "",
  } as const;

  return <LandingShell copy={copy} primaryCtaHref={primaryCtaHref} />;
}
