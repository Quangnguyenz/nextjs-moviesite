import Head from 'next/head'
import AuthCheck from '../component/AuthCheck'
import MainLayout from '../component/Layout/MainLayout'
import CastInfo from '../component/UI/CastInfo/CastInfo'
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../component/UI/MediaRow/MediaRow'

// import styles from '../styles/Home.module.css'

export default function HomeView() {
    return AuthCheck(
        <MainLayout>
            <FeaturedMedia />
            <MediaRow title="More Like This" type="small-v" />
            <CastInfo />
        </MainLayout>
    )
}
