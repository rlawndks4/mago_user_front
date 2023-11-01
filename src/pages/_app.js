

import Head from 'next/head';
import '../../styles/globals.css'
import theme from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "react-quill/dist/quill.snow.css";
import "react-quill-emoji/dist/quill-emoji.css";
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { store } from '../redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import axios from 'axios';

const App = (props) => {
  const { Component, pageProps, head_data = {} } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  const [headData, setHeadData] = useState({});
  const router = useRouter();
  useEffect(() => {
    getHeadData(head_data);
  }, [router])

  const getHeadData = async (head_data_ = {}) => {
    let head_obj = head_data_;
    if (Object.keys(head_obj).length > 0) {
      setHeadData(head_obj)
    } else {
      let shop_id = -1;
      let route_list = router.asPath.split('/');
      if(route_list[1] == 'shop'){
        shop_id = route_list[4];
      }
      const {data:response} = await axios.get(`/api/setting?shop_id=${shop_id}`);
      setHeadData(response?.data);
    }
  }
  return (
    <>
      <Head>
        <title>{head_data?.meta_title || headData?.meta_title}</title>
        <meta name="description" content={head_data?.meta_description || headData?.meta_description} />
        <meta name="title" property="og:title" content={head_data?.meta_title || headData?.meta_title} />
        <meta name="keywords" content={head_data?.meta_keywords || headData?.meta_keywords} />
        <meta name="description" property="og:description" content={head_data?.meta_description || headData?.meta_description} />
      </Head>
      <Script
        strategy='beforeInteractive'
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=3fbdbua1qd`}
      ></Script>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
          <Toaster position={'right-top'} toastOptions={{ className: 'react-hot-toast' }} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}

App.getInitialProps = async (context) => {
  const { ctx } = context;
  try {
    let head_data = {}
    const host = ctx?.req?.headers?.host ? ctx?.req?.headers.host.split(':')[0] : '';
    let uri = ctx?.req?.headers['x-invoke-path'] ?? "";
    let shop_id = -1;
    if (uri.split('/')[1] == 'shop') {
      shop_id = uri.split('/')[4]
    }
    if (host) {
      const url = `${process.env.BACK_URL}/api/setting?shop_id=${shop_id}`;
      const res = await fetch(url);
      head_data = await res.json();
      let dns_data = head_data?.data
      return {
        head_data: dns_data,
      }
    } else {
      return {
        head_data: {},
      }
    }
  } catch (err) {
    console.log(err)
    return {
      head_data: {},
    }
  }
};
export default App
