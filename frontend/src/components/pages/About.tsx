import React, { useState } from "react";
export const About = (): JSX.Element => {

  const [file, setFile] = useState<File>();
  const [image, setImage] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!file){
      return;
    }
    try{
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("http://localhost:8080/api/images/new", {
        method: 'POST',
        body: data,
      });

      if(!res.ok) throw new Error(await res.text());
      const resData = await res.json();
      setImage(resData.image);

    }catch(err: any){
      console.error(err);
    }
  }

  return (
    <main>
      <h1>TEST</h1>
      <form onSubmit={onSubmit}>
        <input type="file" name="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0])} />
        <input type="submit" value="Upload" />
      </form> 
      {
        (image)?
        <img src={image} height={300} alt="" />
        :false
      } 
    </main>
  );
};