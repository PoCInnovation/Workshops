import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useGetImages = () =>
  useMutation({
    mutationFn: () => {
      return axios.get("http://localhost:8080/images");
    },
  });

export default useGetImages;
