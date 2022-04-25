import  Head  from 'next/head';
import styles from './style.module.scss'

import { getPrismicClient } from '../../services/prismic';
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'

export default function Posts(){
    return(
        <>
        <Head>
            <title>
                Posts | Ignews
            </title>
        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>12 de março de 2022</time>

                        <strong>Creating something with Lorena</strong>
                        <p>A monorepo is a version-controlled code repository that holds many projects. While these projects may be related, they are often logically independent and run by different teams.</p>
                </a>
                <a href="#">
                    <time>12 de março de 2022</time>

                        <strong>Creating something with Lorena</strong>
                        <p>A monorepo is a version-controlled code repository that holds many projects. While these projects may be related, they are often logically independent and run by different teams.</p>
                </a>
                <a href="#">
                    <time>12 de março de 2022</time>

                        <strong>Creating something with Lorena</strong>
                        <p>A monorepo is a version-controlled code repository that holds many projects. While these projects may be related, they are often logically independent and run by different teams.</p>
                </a>
            </div>
        </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    
    const response = await prismic.query([
        Prismic.predicates.at('document.type','Posts')
    ],{
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })
    console.log(response.results)
    return {
        props:{}
    }
}