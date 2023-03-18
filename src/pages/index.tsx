import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import {useCategories, useCreateCategory} from "@/hooks/data/categories";
import {Loading} from "@/components/loading";
import NewTask from "@/components/new-task";
import {useQueryClient} from "react-query";
import {TasksContainer} from "@/layout/style";
import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  const {data, isLoading, isRefetching} = useCategories();
  const queryClient = useQueryClient();
  const createCategory = useCreateCategory();
  const invalidateCategories = () => {
    queryClient.invalidateQueries({queryKey: ['categories'],});
  }
  const handleCreateCategory = () => {
    createCategory.mutateAsync({name: "New Category"}).then(invalidateCategories)
  }
  const hasData = data && data?.length > 0
  return (
    <>
      <Head>
        <title>TodoX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <TasksContainer>
        {isLoading || isRefetching ? <Loading/> : null}
        {
          hasData
            ? (
              <div className="categories">
                {data.map((category) =>
                  <Category
                    {...category}
                    key={category.id}
                    isOpen={data.length === 1 || category.name === 'New Category'}
                  />
                )}
              </div>
            )
            : null
        }

        {!isLoading && data?.length === 0
          ? <div className="create-task">
            <NewTask hideCheckbox/>
          </div>
          : null
        }
        <div className="actions">
          <Button
            variant="primary"
            onClick={handleCreateCategory}>
            {createCategory.isLoading ? 'Creating...' : 'Create a Category'}
          </Button>
          <Link href={'generate'}>
            <Button variant="gpt">{`Use ChatGPT's help`}</Button>
          </Link>
        </div>
      </TasksContainer>
    </>
  )
}
