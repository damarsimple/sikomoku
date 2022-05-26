import axios from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const httpClient = axios.create();
