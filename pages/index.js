import { useStateContext } from '../component/HBOProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import MainLayout from '../component/Layout/MainLayout';
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia';
import AuthCheck from '../component/AuthCheck';
import MediaRow from '../component/UI/MediaRow/MediaRow';
import LazyLoad from 'react-lazyload';
import PlaceHolders from '../component/UI/PlaceHolders/PlaceHolders.js';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {

  }, [])
  return AuthCheck(
    <div>
      <MainLayout>

        <FeaturedMedia mediaUrl="https://www.youtube.com/embed/9eY2W7uUkDE?autoplay=1&mute=1&loop=1&start=16" title="Spies in Disguise" location="On HBO MAX. Streaming Now." linkUrl="/movie/431693" type="front"
          mediaType='movie' mediaId='movie' />

        <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="large-v" />}>
          <MediaRow title="Movies" type="large-v" endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2021' />
        </LazyLoad>

        <LazyLoad offset={-400} placeholder={<PlaceHolders title="Series" type="small-v" />}>
          <MediaRow title="Series" mediaType="series" type="small-h" endpoint='discover/tv?&primary_release_year=2021' />
        </LazyLoad>

        <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="small-v" />}>
          <MediaRow title="Action" type="small-v" endpoint='discover/movie?with_genres=28&primary_release_year=2021' />
        </LazyLoad>

        <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="large-h" />}>
          <MediaRow title="Horror" type="large-h" endpoint='discover/movie?with_genres=27&primary_release_year=2021' />
        </LazyLoad>

        <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="large-h" />}>
          <MediaRow title="Animation" type="large-h" endpoint='discover/movie?with_genres=16&primary_release_year=2021' />
        </LazyLoad>

        <LazyLoad offset={-400} placeholder={<PlaceHolders title="Movies" type="small-v" />}>
          <MediaRow title="Sci-fi" type="small-v" endpoint='discover/movie?with_genres=878&primary_release_year=2021' />
        </LazyLoad>

      </MainLayout>
    </div>
  )
}
