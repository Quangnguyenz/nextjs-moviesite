import Head from 'next/head';
import { useStateContext } from '../component/HBOProvider';
import { useState, useEffect } from 'react';
import ls from 'local-storage';
import { useRouter } from 'next/dist/client/router';
import Login from '../component/UI/Login/Login';

const LoginPage = () => {
    return (<Login />)

}

export default LoginPage;