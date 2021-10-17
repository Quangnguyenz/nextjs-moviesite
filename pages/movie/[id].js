import Head from 'next/head'
import AuthCheck from '../../component/AuthCheck'
import MainLayout from '../../component/Layout/MainLayout'
import CastInfo from '../../component/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../component/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../component/UI/MediaRow/MediaRow'
import { useRouter } from 'next/router'
import axios from "axios"
import { useEffect } from 'react'

export default function SingleMediaPage() {
    const router = useRouter()
    const { id } = router.query
    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)

            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    return AuthCheck(
        <MainLayout>
            <h1 style={{ color: 'white' }}>{id}</h1>
            <FeaturedMedia />
            <MediaRow title="More Like This" type="small-v" />
            <CastInfo />
        </MainLayout>
    )
}
