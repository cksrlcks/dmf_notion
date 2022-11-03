import Nav from "../components/nav";
import "../styles/global.scss";
import styles from "./layout.module.css";
import { Noto_Sans_KR } from "@next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const notosans = Noto_Sans_KR({
    weight: ["400", "500", "700"],
    subsets: ["korean"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="kr">
            <head>
                <title>디어마이프렌즈 - 전자메뉴판</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={notosans.className}>
                <div className={styles.app}>
                    <div className={styles["app-nav"]}>
                        <Nav />
                    </div>
                    <div className={styles["app-container"]}>{children}</div>
                </div>
            </body>
        </html>
    );
}
