import Head from 'next/head'
import React, {useState} from "react";
import {useGenerateCategories} from "@/hooks/data/categories";
import {GenerateCategoriesFormStyles, GenerateCategoriesInnerContainer, TasksContainer} from "@/layout/style";
import Button from "@/components/button";
import {Loading} from "@/components/loading";
import {useRouter} from "next/router";

interface FormValues {
  description: string;
}

export default function Home() {
  const [formValues, setFormValues] = useState<FormValues>({
    description: '',
  });
  const router = useRouter();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const generateCategories = useGenerateCategories();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    generateCategories.mutateAsync(formValues.description).then(() => {
      router.push("/")
    })
  };

  return (
    <>
      <Head>
        <title>TodoX - Generate Categories using ChatGPT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <GenerateCategoriesFormStyles onSubmit={handleSubmit} style={{height: '100%'}}>
        <TasksContainer>
          {generateCategories.isLoading ? <Loading/> : null}
          <GenerateCategoriesInnerContainer>
            <p>
              Describe your daily duties, we will take care of the category creation.
            </p>
            <input
              placeholder="Ask ChatGPT to create your categories"
              value={formValues.description}
              name="description"
              onChange={handleInputChange}/>
          </GenerateCategoriesInnerContainer>
          <div className="actions">
            <Button type="submit" variant="gpt" disabled={generateCategories.isLoading}>Generate Categories</Button>
          </div>
        </TasksContainer>
      </GenerateCategoriesFormStyles>
    </>
  )
}
