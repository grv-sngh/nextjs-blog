import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function Firstpost() {
    return (
        <Layout>
            <Head>
                <title>My First Post</title>
            </Head>
            <Image
                src="/images/profile.png"
                width={300}
                height={300}
                alt="profile image"
            />
            <h2>This is my first post</h2>
            <p>Thanks for reading</p>
            <Link href="/">Back to Home</Link>
        </Layout>
    )
}
