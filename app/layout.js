import Nav from "../components/nav";
import { Noto_Sans } from "@next/font/google";

const notosans = Noto_Sans({
    weight: ["400", "500", "700"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="kr">
            <head>
                <title>디어마이프렌즈 - 전자메뉴판</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={notosans.className}>
                <div className="app">
                    <div className="app-nav">
                        <Nav />
                    </div>
                    <div className="app-container">{children}</div>
                </div>
            </body>
        </html>
    );
}
