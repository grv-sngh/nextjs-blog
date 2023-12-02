export async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let allPosts = await res.json();
    console.log(allPosts);
    return {
        props: { allPosts },
    };
};

export default function DBPosts({ allPosts }) {
    const user_data = allPosts.data.map((user) =>
        <li>
            {user._id}
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
            </ul>
        </li>
    )
    return (
        <>
            <div>
                <ul>
                    {user_data}
                </ul>
            </div>
        </>
    )
}