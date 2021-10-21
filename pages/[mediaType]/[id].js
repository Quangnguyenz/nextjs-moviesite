import Head from 'next/head'
import AuthCheck from '../../component/AuthCheck'
import MainLayout from '../../component/Layout/MainLayout'
import CastInfo from '../../component/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../component/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../component/UI/MediaRow/MediaRow'
import { useRouter } from 'next/router'
import axios from "axios"
import { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import PlaceHolders from '../../component/UI/PlaceHolders/PlaceHolders'

export default function SingleMediaPage(props) {
    const router = useRouter()
    const [mediaData, setMediaData] = useState(false)

    // useEffect(() => {
    //     axios
    //         .get(`https://api.themoviedb.org/3/movie/${props.query.id}?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)

    //         .then(function (response) {
    //             console.log(response)
    //             setMediaData(response.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }, [mediaData])

    return AuthCheck(
        <MainLayout>
            <FeaturedMedia
                title={props.query.mediaType === 'movie' ? props.mediaData.title : props.mediaData.name}
                mediaUrl={`https://image.tmdb.org/t/p/w1280${props.mediaData.backdrop_path}`}
                location="In theaters and on HBO MAX. Streaming throughout May 23rd."
                linkUrl="/movies/id"
                type="single" />
            <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="small-v" />}>
                <MediaRow
                    updateData={props.query.id}
                    title="Similar To This"
                    type="small-v"
                    mediaType={props.query.mediaType}
                    endpoint={`${props.query.mediaType === 'movie' ? 'movie' : 'tv'}/${props.query.id}/similar?`} />
            </LazyLoad>
            <CastInfo mediaId={props.query.id} mediaType={props.query.mediaType} updateData={props.query.id} />
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    let mediaData;
    try {
        mediaData = await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)
    } catch (error) {
        console.log(error)
    }
    return {
        props: { mediaData: mediaData.data, query: context.query } // will be passed to the page component as props
    }
}
