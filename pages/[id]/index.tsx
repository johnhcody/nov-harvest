import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import BaseLayout from '../../components/layouts/BaseLayout';
import Link from 'next/link';

const Article = ({ article }) => {

    const [confirm, setConfirm] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();


    useEffect(() => {
        if (isDeleting) {
            deleteArticle();
        }
    }, [isDeleting])

    const deleteArticle = async () => {
        const articleId = router.query.id;

        const deleted = await axios.delete(`http://localhost:3000/api/articles/${articleId}`)
        router.push('/');
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        
    }

    return (
        <BaseLayout>
            <div className="article-container">
                <h1>{article.title}</h1>
                <p>{article.intro}</p>
                <Link href={`/${article._id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </BaseLayout>
    )

}

Article.getInitialProps = async ({ query: { id }}) => {
    const res = await axios.get(`http://localhost:3000/api/articles/${id}`)
    const data = res.data['data'];

    return { article: data }
}

export default Article;