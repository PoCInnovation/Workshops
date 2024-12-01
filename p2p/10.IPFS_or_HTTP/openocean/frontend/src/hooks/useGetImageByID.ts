import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const useGetImageByID = () =>
  useMutation({
    mutationFn: (id: string | undefined) => {
      return axios.get(`http://localhost:8080/images/${id}`);
    },
  });

export default useGetImageByID;
