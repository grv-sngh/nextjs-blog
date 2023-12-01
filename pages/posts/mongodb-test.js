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

export default function DBPosts() {
    return (
        <>
            <div>
                <div dangerouslySetInnerHTML={allPosts}></div>
            </div>
        </>
    )
}