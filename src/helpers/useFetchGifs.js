import { useEffect, useState } from "react";
import { getGifs } from "./getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const myImages = await getGifs(category);
        setImages(myImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])

    return ({
        images,
        isLoading
    })
}
