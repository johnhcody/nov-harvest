import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import BaseLayout from '../components/layouts/BaseLayout'

const NewArticle = () => {
    const [form, setForm] = useState({ title: '', intro: '', img: '', link: '' });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if (isSubmitting) {
            if (Object.keys(errors).length === 0) {
                createArticle();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    };

    const validate = () => {
        let err = {};

        if (!form.title) {
            err['title'] = "Title is required";
        }

        return err;
    }

    const createArticle = () => {

        axios.post('http://localhost:3000/api/articles', {
            title: form.title,
            intro: form.intro,
            img: form.img,
            link: form.link
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        router.push('/');    
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value 
        })
    };

    return (
        <BaseLayout>
            <div className="form-container">
                <h1>Create New Article for Portfolio</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Title</label>
                        <input type="text" placeholder="Title" name="title" onChange={handleChange} />
                        <label htmlFor="intro">intro</label>
                        <input type="text" placeholder="intro" name="intro" onChange={handleChange} />
                        <label htmlFor="image">image</label>
                        <input type="text" placeholder="image" name="image" onChange={handleChange} />
                        <label htmlFor="link">link</label>
                        <input type="text" placeholder="link" name="link" onChange={handleChange} />
                        <button>Post</button>
                    </form>
                </div>
            </div>
        </BaseLayout>
    )
}

export default NewArticle;