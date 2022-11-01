import { getDatabase, getPage} from "../lib/notion";

export default function Home(props) {
	console.log(props.posts)
  return (
    <div >
      {props?.posts?.map(item => {
		return <div key={item.id}>
			{/* <div>{item.properties.category.select?.name}</div>
			<div>{item.properties.badge.multi_select?.map(badge => <div key={badge.id}>{badge.name}</div>)}</div>
			<figure>
				{item.properties.cover_img.files.length ? 
					(<img src={item.properties.cover_img.files[0]?.file.url} alt="" />)	: (<div>사진없음</div>)
				}
			</figure> */}
			<div>{item.properties.menu_name.title[0]?.plain_text}</div>
			{/* <div>{item.properties.price.number}</div> */}
		</div>
	  })}
    </div>
  )
}

export const getServerSideProps = async () => {
	const posts = await getDatabase();
	return {
	  props: {
		posts 
	  }
	};
  };