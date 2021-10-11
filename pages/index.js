import Head from 'next/head';
import { useStateContext } from '../component/HBOProvider'
import Login from '../component/UI/Login/Login';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {
    const loggedIn = false;
    if (loggedIn == false) {
      router.push('/create')
    }
  }, [])
  return (
    <div>
      <Login />
    </div>
  )
}
