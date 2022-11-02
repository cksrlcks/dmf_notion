import Link from "next/link";
const Navrr = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/menu">메뉴</Link>
                </li>
                <li>
                    <Link href="/contact">문의</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navrr;
