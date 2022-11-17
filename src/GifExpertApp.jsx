import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragron Ball']);

    const onAddCategory = (category) => {
        if (categories.includes(category)) return;
        setCategories([...categories, category])
    }

    console.log(categories);
    const apiKey = 'rgNRvlapgaZjsAmFD9Wc51kF7uJ09IKc'

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={onAddCategory} />

            {categories.map(category => <GifGrid key={category} category={category} />)}
        </>
    )
}