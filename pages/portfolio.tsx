import React, { Component } from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import { NextPageContext } from 'next'
import axios from 'axios'
import articles from './api/articles'
import Link from 'next/link';


interface Props {

}
interface State {

}

const Portfolio = (props: Props) => {
    const articles = Object.values(props);

        return (
            <BaseLayout>
                <h1>hello from the Portfolio page</h1>
                <div className="articles-wrapper">
                    {articles.map(article => {
                        return (
                            <div key={article._id}>
                                <h1>{article.title}</h1>
                                <Link href={`/${article._id}`}>
                                    <button>View</button>
                                </Link>
                                <Link href={`/${article._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="new-note">
                        <Link href={'/new'}>
                            <button>Create a new Article</button>
                        </Link>
                    </div>
                </div>

            </BaseLayout>
        )
    
}


Portfolio.getInitialProps = async () => {
    const res = await axios.get('http://localhost:3000/api/articles');
    const articles = res.data['data'];
    //console.log(articles)
    return articles;
}



export default Portfolio