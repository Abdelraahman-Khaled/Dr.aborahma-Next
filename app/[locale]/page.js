import { useTranslations } from "next-intl";
import styles from "./page.module.css";
import { Link } from "../../i18n/routing";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
        <div className={styles.ctas}>
          <Link href="/" locale="en" className={styles.primary}>
            English
          </Link>
          <Link href="/" locale="ar" className={styles.secondary}>
            العربية
          </Link>
        </div>
      </main>
    </div>
  );
}
