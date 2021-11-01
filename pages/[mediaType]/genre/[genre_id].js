import { useStateContext } from '../../../component/HBOProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import MainLayout from '../../../component/Layout/MainLayout';
import FeaturedMedia from '../../../component/UI/FeaturedMedia/FeaturedMedia';
import AuthCheck from '../../../component/AuthCheck';
import MediaRow from '../../../component/UI/MediaRow/MediaRow';
import LazyLoad from 'react-lazyload';
import PlaceHolders from '../../../component/UI/PlaceHolders/PlaceHolders.js';
import GenreNav from '../../../component/UI/GenreNav/GenreNav';
import axios from 'axios';
import { shuffleArray } from "../../../component/utilities"

export default function MediaTypePage(props) {
    const globalState = useStateContext();
    const router = useRouter();

    const showRandomMedia = () => {
        let thumbTypes;
        return props.genresData.map((item, index) => {
            thumbTypes = shuffleArray(globalState.thumbTypes)[0]
            return (
                <div key={item.id}>
                    <LazyLoad offset={-400} placeholder={<PlaceHolders key={item.key} title={item.name} type={thumbTypes} />}>
                        <MediaRow
                            updateData={props.query.genre_id}
                            title={item.name}
                            type={thumbTypes}
                            endpoint={`discover/${props.query.mediaType}?with_genres=${props.query.genre_id}&sort_by=popularity.desc&primary_release_year=2021&page=${index + 1}`} />
                    </LazyLoad>)
                </div>)
        })
    }

    return AuthCheck(
        < div >
            <MainLayout>

                <FeaturedMedia mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
                    title={props.query.mediaType === 'movie' ? props.featuredData.title : props.featuredData.name}
                    linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
                    type="single"
                    mediaType={props.query.mediaType}
                    mediaId={props.featuredData.id}
                />
                <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />
                {showRandomMedia()}
            </MainLayout>
        </div >
    )
}

export async function getServerSideProps(context) {
    let genresData;
    let featuredData;
    try {
        genresData = await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`);

        featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2021&with_genres=${context.query.genre_id}&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`);

        console.log("genresData", genresData)
        console.log(featuredData)

    } catch (error) {
        console.log(error)
    }
    return {
        props: {
            genresData: genresData.data.genres,
            featuredData: shuffleArray(featuredData.data.results)[0],
            query: context.query
        } // will be passed to the page component as props
    }
}
