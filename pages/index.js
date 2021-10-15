import { useStateContext } from '../component/HBOProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import MainLayout from '../component/Layout/MainLayout';
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia';
import AuthCheck from '../component/AuthCheck';
import MediaRow from '../component/UI/MediaRow/MediaRow';


export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {

  }, [])
  return AuthCheck(
    <div>
      <MainLayout>
        <FeaturedMedia />
        <MediaRow title="Movies" type="large-v" endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2021' />
        <MediaRow title="Series" type="small-h" endpoint='discover/tv?&primary_release_year=2021' />
        <MediaRow title="Action" type="small-v" endpoint='discover/movie?with_genres=28&primary_release_year=2021' />
        <MediaRow title="Horror" type="large-h" endpoint='discover/movie?with_genres=27&primary_release_year=2021' />
        <MediaRow title="Animation" type="large-h" endpoint='discover/movie?with_genres=16&primary_release_year=2021' />
        <MediaRow title="Sci-fi" type="small-v" endpoint='discover/movie?with_genres=878&primary_release_year=2021' />

      </MainLayout>
    </div>
  )
}
