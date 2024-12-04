import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const usePostImage = () =>
  useMutation({
    mutationFn: (params: { image: File, name: string }) => {
      const formData = new FormData();
      formData.append("image", params.image);
      formData.append("name", params.name);
      console.log(formData);
      return axios.post("http://localhost:8080/upload", formData);
    },
  });

export default usePostImage;
