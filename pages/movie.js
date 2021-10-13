import Head from 'next/head'
import AuthCheck from '../component/AuthCheck'
import MainLayout from '../component/Layout/MainLayout'
import CastInfo from '../component/UI/CastInfo/CastInfo'
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../component/UI/ForYouList/ForYouList'
import JustAdded from '../component/UI/JustAdded/JustAdded'
import PosterView from '../component/UI/PosterView/PosterView'

// import styles from '../styles/Home.module.css'

export default function HomeView() {
    return AuthCheck(
        <MainLayout>
            <FeaturedMedia />
            <PosterView />
            <CastInfo />
        </MainLayout>

    )
}
