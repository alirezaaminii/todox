import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import {useCategories} from "@/hooks/data/categories";
import {Loading} from "@/components/loading";
import NewTask from "@/components/new-task";
import {useQueryClient} from "react-query";
import {useCreateTask} from "@/hooks/data/tasks";

export default function Home() {
  const {data, isLoading} = useCategories();
  const queryClient = useQueryClient();
  const createTask = useCreateTask();
  const handleCreateTask = (taskName: string) => {
    createTask.mutateAsync({name: taskName}).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
  }
  return (
    <>
      <Head>
        <title>TodoX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {isLoading ? <Loading/> : null}
      {data?.map((category) => <Category {...category} key={category.id} isOpen={data.length === 1}/>)}
      {!isLoading && data?.length === 0
        ? <NewTask onChange={handleCreateTask} hideCheckbox/>
        : null
      }
    </>
  )
}
