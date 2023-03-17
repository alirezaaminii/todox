import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import {useCategories} from "@/hooks/data/categories";
import {Loading} from "@/components/loading";

export default function Home() {
  const {data, isLoading} = useCategories();
  return (
    <>
      <Head>
        <title>TodoX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Loading spinning={isLoading}>
        {
          data?.map((category) => <Category {...category} key={category.id}/>)
        }
      </Loading>
    </>
  )
}
