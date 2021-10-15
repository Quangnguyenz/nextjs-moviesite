import Head from 'next/head'
import MainLayout from '../component/Layout/MainLayout'
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia';
import MediaRow from '../component/UI/MediaRow/MediaRow';

// import styles from '../styles/Home.module.css'

export default function HomeView() {
    return (
        <MainLayout>
            <FeaturedMedia />
            <MediaRow />
        </MainLayout>
    )
}
