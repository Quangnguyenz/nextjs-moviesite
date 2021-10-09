import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '../component/Layout/MainLayout'
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia'
// import styles from '../styles/Home.module.css'

export default function HomeView() {
    return (
        <MainLayout>
            <FeaturedMedia />
        </MainLayout>

    )
}
