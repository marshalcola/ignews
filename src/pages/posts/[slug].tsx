import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import  Head  from "next/head";
// import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../services/prismic";

import { Document } from '@prismicio/client/types/documents'
import { RichText } from "prismic-dom";

interface IPrismicData {
    type: string
    text: string
    spans: Array<any>
  }
  
  interface IPrismicResponseData {
    title: Array<IPrismicData>
    content: Array<IPrismicData>
  }

interface PostProps {
    post: {
        slug: string
        title: string,
        content: string,
        updatedAt: string
    }
}

export default function Post() {
// export default function Post({ post }:PostProps) {
    return (
        <>
            <Head>
                {/* <title>{post.title} | Ignews</title> */}
                <title> | Ignews</title>


                <main>
                    <article>
                        {/* <time>{post.updatedAt}</time> */}
                        <time>123123123</time>
                        asasdasd
                        {/* {post.content} */}
                    </article>
                </main>
            </Head>
        </>
    );
}
// página estática não é protegida, usar página dinâmica pois o 

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req })
    const { slug } = params;

    // if(!session) {

    // }
    
    if ( slug === 'favicon.png' ) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          }
        }
      }



        const prismic = getPrismicClient(req)

        const response = await prismic.getByUID('posts', String(slug), {})
        
      console.log(response)
        // const post = {
        //     slug,
        //     title: RichText.asText(response.data.title),
        //     content: RichText.asHtml(response.data.content),
        //     updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
        //         day: '2-digit',
        //         month: 'long',
        //         year: 'numeric'
    
        // })
        // }

    return {

        props: { 
            //  post,
        }
    }


}