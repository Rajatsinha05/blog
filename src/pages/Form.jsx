import { Box, Spacer, VStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    headline: "",
    image: "",
    description: "",
    authorname: "",
  });

  const onChanged = (event) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };
  const onSubmited = (event) => {
    event.preventDefault();
    postBlog(data);
  };

  const postBlog = async () => {
    await axios.post("http://localhost:3000/blogs", data);
  };

  return (
    <div>
      <form onSubmit={onSubmited}>
        <VStack spacing="5">
          <Box fontWeight="bold" fontSize="x-large">
            Blog Create
          </Box>
          <Box>
            <label>Headline</label>
            <input
              type="text"
              name="headline"
              value={data.headline}
              onChange={onChanged}
            />
          </Box>
          <Box>
            <label>Image</label>
            <input
              type="url"
              name="image"
              value={data.image}
              onChange={onChanged}
            />
          </Box>
          <Box>
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={data.description}
              onChange={onChanged}
            />
          </Box>
          <Box>
            <label>Author Name</label>
            <input
              type="text"
              name="authorname"
              value={data.authorname}
              onChange={onChanged}
            />
          </Box>
          <input type="submit" value="submit" />
        </VStack>
      </form>
    </div>
  );
};

export default Form;
