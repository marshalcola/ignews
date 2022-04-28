import  Head  from 'next/head';
import styles from './style.module.scss'

import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import Link from 'next/link'

import { RichText } from 'prismic-dom'

type Post = {
    slug: string,
    title: string,
    excert: string,
    updatedAt: string
}

interface PostProps {
    posts: Post[]
}


 export default function Posts( {posts}:PostProps ){
    return(
        <>
        <Head>
            <title>
                Posts | Ignews
            </title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                { posts.map(post => (
                    // eslint-disable-next-line react/jsx-key
                    <Link href={`/posts/${post.slug}`}>
                    <a key={post.slug}>
                    <time>{post.updatedAt}</time>

                        <strong>{post.title}</strong>
                        <p>{post.excert}</p>
                </a>
                </Link>
                )) }
            </div>
        </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    
    const response = await prismic.query<any>([
        Prismic.predicates.at('document.type','posts')
    ],{
        fetch: ['posts.title', 'posts.content'],
        pageSize: 100,
    })
    console.log(JSON.stringify(response, null, 2))
    
    const posts = response.results.map( post => {
        return {
            slug: post.uid,
            // title: post.data.title[0].text
            title: post.data.title,
            excert: post.data.content.find( content => content.type === 'paragraph')?.text ?? ''
            ,
            
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR',{
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
            
        }
    })
    return {
        props:{ posts }
    }
}
