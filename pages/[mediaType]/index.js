import { useStateContext } from '../../component/HBOProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import MainLayout from '../../component/Layout/MainLayout';
import FeaturedMedia from '../../component/UI/FeaturedMedia/FeaturedMedia';
import AuthCheck from '../../component/AuthCheck';
import MediaRow from '../../component/UI/MediaRow/MediaRow';
import LazyLoad from 'react-lazyload';
import PlaceHolders from '../../component/UI/PlaceHolders/PlaceHolders.js';
import GenreNav from '../../component/UI/GenreNav/GenreNav';
import axios from 'axios';
import { shuffleArray } from "../../component/utilities"

export default function MediaTypePage(props) {
    const globalState = useStateContext();
    const router = useRouter();
    useEffect(() => {

    }, [])
    return AuthCheck(
        <div>
            <MainLayout>

                {/* <FeaturedMedia mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16" title="Mortal Kombat" location="In theaters and on HBO MAX. Streaming throughout May 23rd." linkUrl="/movie/460465" type="front" /> */}
                <GenreNav mediaType={props.query.mediaType} genresData={props.genresData} />
                <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="large-v" />}>
                    <MediaRow title="Movies" type="large-v" endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2021' />
                </LazyLoad>

            </MainLayout>
        </div>
    )
}

export async function getServerSideProps(context) {
    let genresData;
    let featuredData;
    try {
        genresData = await axios.get(`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`);

        featuredData = await axios.get(`https://api.themoviedb.org/3/discover/${context.query.mediaType}?/primary_release_year=2021&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`);

        console.log(genresData)
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
