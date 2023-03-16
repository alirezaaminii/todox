import Head from 'next/head'
import {categoryMock, taskMock} from "@/mocks";
import Category from "@/components/category";
import {Layout} from "@/layout";
import React from "react";

const categories = [categoryMock, categoryMock, categoryMock,categoryMock, categoryMock, categoryMock,categoryMock, categoryMock, categoryMock,categoryMock];
const tasks = [taskMock, taskMock, taskMock, taskMock];

export default function Home() {
  return (
    <>
      <Head>
        <title>TodoX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        categories.map((category) => <Category {...category} key={category.id} tasks={tasks}/>)
      }
    </>
  )
}
