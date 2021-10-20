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

export default function Home() {
    const globalState = useStateContext();
    const router = useRouter();
    useEffect(() => {

    }, [])
    return AuthCheck(
        <div>
            <MainLayout>

                {/* <FeaturedMedia mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16" title="Mortal Kombat" location="In theaters and on HBO MAX. Streaming throughout May 23rd." linkUrl="/movie/460465" type="front" /> */}
                <GenreNav />
                <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="large-v" />}>
                    <MediaRow title="Movies" type="large-v" endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2021' />
                </LazyLoad>

            </MainLayout>
        </div>
    )
}
