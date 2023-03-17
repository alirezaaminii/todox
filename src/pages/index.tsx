import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import {TaskInterface} from "@/types";
import {useCategories} from "@/hooks/data/categories";
import {Loading} from "@/components/loading";

interface Props {
  tasks: TaskInterface[]
}

export default function Home(props: TaskInterface) {
  const { data, isLoading } = useCategories();
  return (
    <>
      <Head>
        <title>TodoX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loading spinning={isLoading}>
        {
          data?.map((category) => <Category {...category} key={category.id}/>)
        }
      </Loading>
    </>
  )
}
