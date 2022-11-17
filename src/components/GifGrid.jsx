import { useFetchGifs } from '../helpers/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div>
                {
                    images.map(image => (
                        <GifItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    )
}
