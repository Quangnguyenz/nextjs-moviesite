import { useStateContext } from '../component/HBOProvider';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import MainLayout from '../component/Layout/MainLayout';
import FeaturedMedia from '../component/UI/FeaturedMedia/FeaturedMedia';
import ForYouList from '../component/UI/ForYouList/ForYouList';
import JustAdded from '../component/UI/JustAdded/JustAdded';
import PosterView from '../component/UI/PosterView/PosterView';
import AuthCheck from '../component/AuthCheck';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {

  }, [])
  return AuthCheck(
    <div>
      <MainLayout>
        <FeaturedMedia />
        <ForYouList />
        <JustAdded />
        <PosterView />
      </MainLayout>
    </div>
  )
}
