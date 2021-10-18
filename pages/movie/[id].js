import Head from 'next/head'
import AuthCheck from '../../component/AuthCheck'
import MainLayout from '../../component/Layout/MainLayout'
import CastInfo from '../../component/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../component/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../component/UI/MediaRow/MediaRow'
import { useRouter } from 'next/router'
import axios from "axios"
import { useEffect, useState } from 'react'

export default function SingleMediaPage(props) {
    const router = useRouter()
    const [mediaData, setMediaData] = useState(false)
    // const { id } = router.query
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${props.query.id}?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)

            .then(function (response) {
                console.log(response)
                setMediaData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return AuthCheck(
        <MainLayout>
            <h1 style={{ color: 'white' }}>{props.query.id}</h1>
            <FeaturedMedia
                title={mediaData.title}
                mediaUrl={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
                location="In theaters and on HBO MAX. Streaming throughout May 23rd."
                linkUrl="/movies/id"
                type="single" />
            <MediaRow title="More Like This" type="small-v" />
            <CastInfo />
        </MainLayout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: { query: context.query }, // will be passed to the page component as props
    }
}
