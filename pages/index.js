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
        <MediaRow title="Movies" type="large-v" />
        <MediaRow title="Series" type="small-h" />
        <MediaRow title="Action" type="small-v" />
        <MediaRow title="Horror" type="large-h" />
        <MediaRow title="Sci-fi" type="small-v" />
        <MediaRow title="Animation" type="large-h" />
      </MainLayout>
    </div>
  )
}
