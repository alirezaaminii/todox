import Head from 'next/head'
import Category from "@/components/category";
import React from "react";
import {useCategories, useCreateCategory} from "@/hooks/data/categories";
import {Loading} from "@/components/loading";
import NewTask from "@/components/new-task";
import {useQueryClient} from "react-query";
import {useCreateTask} from "@/hooks/data/tasks";
import {TasksContainer} from "@/layout/style";
import Button from "@/components/button";

export default function Home() {
  const {data, isLoading} = useCategories();
  const queryClient = useQueryClient();
  const createTask = useCreateTask();
  const createCategory = useCreateCategory();
  const handleCreateTask = (taskName: string) => {
    createTask.mutateAsync({name: taskName}).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
  }
  const handleCreateCategory = () => {
    createCategory.mutateAsync({name: "New Category"}).then(() => {
      queryClient.invalidateQueries({queryKey: ['categories'],});
    })
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
        {isLoading ? <Loading/> : null}
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
            <NewTask onChange={handleCreateTask} hideCheckbox/>
          </div>
          : null
        }
        <div className="actions">
          <Button variant="primary" onClick={handleCreateCategory}>Create a Category</Button>
        </div>
      </TasksContainer>
    </>
  )
}
