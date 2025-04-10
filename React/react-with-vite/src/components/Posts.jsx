import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";
import "../App.scss";

export const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setupdateDataApi] = useState({});


  //get post function
  const getPostData = async () => {
    const res = await getPost();
    console.log(res.data);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  //delete post function
  const handleDeletPost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      }
      else{
        console.log("Failed to delete the post", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //update post
  const handleUpdatePost = (curElem)=>{setupdateDataApi(curElem);
  }

  return (
    <>
    <section className="section-form">
        <Form data={data} setData={setData} updateDataApi={updateDataApi} setupdateDataApi={setupdateDataApi}/>
    </section>
    <section className="section-post">
      <ol>
        {data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              <h3>Title: {title}</h3>
              <p>Description: {body}</p>
              <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletPost(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
    </>
    
  );
};
