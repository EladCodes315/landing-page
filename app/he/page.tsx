import type { Metadata } from "next";
import { LandingShell } from "@/app/components/landing/LandingShell";
import { generatePersonSchema, generateServiceSchema } from "@/app/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "EA Product Studios | בניית אפליקציות ומערכות לעסקים",
    description:
      "בניית אפליקציות ומערכות דיגיטליות לעסקים. ליווי מלא מהרעיון ועד פתרון עובד — קביעת תורים, ניהול לקוחות, תשלומים ועוד.",
    openGraph: {
      title: "EA Product Studios | בניית אפליקציות לעסקים",
      description:
        "בניית אפליקציות ומערכות דיגיטליות לעסקים. ליווי מלא מהרעיון ועד פתרון עובד.",
      url: "https://eaproductstudios.com/he",
      siteName: "EA Product Studios",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "EA Product Studios – בניית אפליקציות ומערכות לעסקים",
        },
      ],
      locale: "he_IL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "EA Product Studios | בניית אפליקציות",
      description: "בניית אפליקציות ומערכות דיגיטליות לעסקים",
      images: ["/og.png"],
    },
  };
}

export default function Page() {
  const copy = {
    lang: "he",
    nav: { switchTo: { label: "EN", href: "/en" }, cta: "קביעת שיחת היכרות" },
    header: {
      tagline: "בונה אפליקציות ומערכות דיגיטליות לעסקים",
    },
    hero: {
      eyebrow: "אפליקציות ומערכות לעסקים",
      title: "בונה אפליקציות ומערכות דיגיטליות לעסקים",
      subtitle:
        "אני מלווה בעלי עסקים משלב הרעיון ועד פתרון שעובד בפועל — לקביעת תורים, ניהול לקוחות, תשלומים ותפעול יומיומי. תהליך ברור, תקשורת פשוטה, ותוצאה שמרגישים.",
      primaryCta: "קביעת שיחת היכרות חינמית",
      secondaryCta: "צפייה בשירותים",
    },
    trust: [
      {
        title: "אפליקציות לעסקים",
        text: "קביעת תורים, ניהול לקוחות, תשלומים והתראות — בדיוק מה שצריך לעסק.",
        icon: "zap",
        badge: "מהירות ובהירות",
      },
      {
        title: "מערכת שעוזרת לך לנהל",
        text: "לוח ניהול פנימי (Admin) שמסדר את התפעול וחוסך זמן יומיומי.",
        icon: "sparkles",
        badge: "איכות על פני כמות",
      },
      {
        title: "עובד, יציב ומוכן לצמיחה",
        text: "בסיס נקי ואמין שמאפשר להוסיף יכולות בהמשך בלי לשבור את הכול.",
        icon: "shield",
        badge: "בנוי לצמיחה",
      },
    ],
    problem: {
      title: "בעיה ← פתרון",
      p1: "יש לך רעיון לאפליקציה או מערכת — אבל לא ברור מאיפה מתחילים.",
      bullets: [
        "קשה להבין מה באמת צריך לבנות בהתחלה",
        "הצעות מחיר מבלבלות וחוסר ודאות לגבי תהליך העבודה",
        "רוצים פתרון שיעבוד ללקוחות בפועל — בלי כאב ראש",
      ],
      p2Title: "כאן אני נכנס לתמונה",
      p2: (
        <>
          אני לוקח אחריות על כל התהליך — מהגדרת הצורך ועד פתרון שעובד בפועל.
          פשוט, מסודר, עם שקיפות מלאה ותוצאה שאפשר להשתמש בה.
        </>
      ),
      outcomeLabel: "התוצאה:",
      outcomeText:
        "אפליקציה שאפשר להציג, למכור ולצמוח איתה — עם בסיס טכנולוגי נקי.",
    },
    services: {
      title: "שירותים",
      subtitle: "מה אני עוזר לבנות — מאפליקציה ראשונה לעסק ועד ליווי מתמשך.",
      cards: [
        {
          title: "פיתוח אפליקציה לעסק",
          text: "מרעיון לפתרון עובד — כולל קביעת תורים/ניהול לקוחות/תשלומים ועלייה לאוויר.",
          forWho: "לבעלי עסקים שרוצים פתרון חדש שעובד מהר",
        },
        {
          title: "שדרוג מערכת קיימת",
          text: "הוספת יכולות, שיפור תהליכים, בניית לוח ניהול (Admin) וסידור הדברים כדי שיעבדו חלק.",
          forWho: "לעסקים שכבר יש להם מערכת ורוצים לשפר אותה",
        },
        {
          title: "ליווי טכנולוגי מתמשך",
          text: "תחזוקה, שיפורים ותמיכה שוטפת — כדי שתוכל להתמקד בעסק ולא בטכנולוגיה.",
          forWho: "לעסקים שרוצים שקט נפשי וקצב התקדמות קבוע",
        },
      ],
    },
    why: {
      title: "למה דווקא אני",
      bullets: [
        "מדבר בשפה פשוטה וברורה — בלי מונחים מסובכים",
        "Fullstack עם דגש חזק על יציבות ואמינות",
        "ניסיון אמיתי בבניית מערכות שעובדות בפרודקשן",
        "אחריות מלאה: מהרעיון → פיתוח → עלייה לאוויר",
      ],
      note: "המטרה שלי היא לא רק לפתח — אלא לבנות פתרון שעובד ומייצר ערך לעסק.",
    },
    process: {
      title: "איך זה עובד",
      steps: [
        "שיחת היכרות קצרה והבנת הצורך",
        "הגדרת מה בונים בשלב הראשון + אבני דרך",
        "פיתוח, בדיקות ועלייה לאוויר",
        "אפשרות לליווי ושיפורים בהמשך",
      ],
      note: "תהליך פשוט ושקוף — כדי שתדע בדיוק איפה עומדים בכל רגע.",
    },
    proof: {
      title: "ניסיון / הוכחות",
      text: "בניתי מערכות בפרודקשן, לוחות ניהול פנימיים (Admin), APIs ותשתיות אמינות — פתרונות שמשרתים משתמשים אמיתיים ועובדים לאורך זמן.",
      items: [
        "לוחות ניהול ומערכות Admin",
        "APIs בפרודקשן + אבטחה ואימות משתמשים",
        "ארכיטקטורה נקייה המאפשרת צמיחה",
      ],
    },
    finalCta: {
      title: "רוצים לבנות אפליקציה לעסק?",
      subtitle: "בואו נדבר ונראה מה הדרך הכי נכונה להתחיל.",
      primary: "קביעת שיחת היכרות חינמית",
      closing: "שיחת היכרות קצרה (30 דקות), ללא התחייבות.",
    },
  } as const;

  const personSchema = generatePersonSchema("he");
  const serviceSchema = generateServiceSchema("he");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <LandingShell copy={copy} />
    </>
  );
}
