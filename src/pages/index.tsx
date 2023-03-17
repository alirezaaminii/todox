import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import {useCategories} from "@/hooks/data/categories";
import {Loading} from "@/components/loading";

export default function Home() {
  const {data, isLoading} = useCategories();
  // const queryClient = useQueryClient();
  // const createTask = useCreateTask();
  // createTask.mutateAsync({name:'newTask', categoryId: 1}).then(() => {
  //       queryClient.invalidateQueries({queryKey: [`categories`],});
  //     }).catch((e) => console.log(e))
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
