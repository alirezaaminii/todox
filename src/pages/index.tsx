import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import tasksData from './api/tasks/tasks.json';
import categoriesData from './api/tasks/categories.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>TodoX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        categoriesData.categories.map((category) => <Category {...category} key={category.id} tasks={tasksData.tasks}/>)
      }
    </>
  )
}
