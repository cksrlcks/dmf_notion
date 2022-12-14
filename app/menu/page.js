import { getDatabase, MENU_DATABASE_ID } from "../../lib/notion";
async function getData() {
    const response = await getDatabase(MENU_DATABASE_ID, {
        sorts: [
            {
                property: "index",
                direction: "ascending",
            },
            {
                property: "write_date",
                direction: "descending",
            },
        ],
    });

    return response;
}

export default async function Page() {
    const data = await getData();
    return (
        <div className={`app `}>
            <div>
                {data?.map((item) => {
                    return (
                        <div key={item.id}>
                            <div>{item.properties.category.select?.name}</div>
                            <div>
                                {item.properties.badge.multi_select?.map((badge) => (
                                    <div key={badge.id}>{badge.name}</div>
                                ))}
                            </div>
                            <figure>{item.properties.cover_img.files.length ? <img src={item.properties.cover_img.files[0]?.file.url} alt="" /> : <div>ėŽė§ėė</div>}</figure>
                            <div>{item.properties.menu_name.title[0]?.plain_text}</div>
                            <div>{item.properties.price.number}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
