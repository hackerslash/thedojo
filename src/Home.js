import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum", author: "mario", id: 1 },
    { title: "Welcome party", body: "lorem ipsum", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum", author: "mario", id: 3 }
  ]);

  // const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newPosts = blogs.filter((blogpost) =>
      blogpost.id !== id ? true : false
    );
    setBlogs(newPosts);
  };

  useEffect(() => {
    // console.log("use effect ran!");
    // console.log(blogs);
    // fetch("http://localhost:8000/blogs")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   });
  }, []);
  // empty array after useEffect: https://www.youtube.com/watch?v=jQc_bTFZ5_I

  return (
    <div className="home">
      <h2>Homepage</h2>
      <hr />
      <BlogList blogs={blogs} title="All posts" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => (blog.author === "mario" ? true : false))}
        title="Mario's posts"
        handleDelete={handleDelete}
      />
      <br />
    </div>
  );
};

// const Home = () => {
//   const [name, setName] = useState("mario");

//   const handleClick = (e) => {
//     console.log(`clicked!`, e);
//     setName("luigi");
//   };

//   const handleClickAgain = (name, e) => {
//     console.log(`Hello ${name}!`, e);
//   };

//   return (
//     <div className="Home">
//       <h2>Homepage</h2>
//       <p> {name} </p>
//       <button onClick={handleClick}>Click me</button>
//       <button
//         onClick={(e) => {
//           handleClickAgain("Mario", e);
//         }}
//       >
//         Click me again
//       </button>
//     </div>
//   );
// };

export default Home;
