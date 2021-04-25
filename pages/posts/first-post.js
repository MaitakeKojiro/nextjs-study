// linkをインポート
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        // Layoutタグで大外を囲む
        <Layout>
            {/* メタデータの書き換え Headタグで囲み、その中でtitleタグで囲んだものがメタデータのtitleになる。 */}
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {/* 遷移先のパスをLinkタグのhref属性に指定 */}
                <Link href="/">
                    {/* クリック出来る箇所をaタグで囲む */}
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}