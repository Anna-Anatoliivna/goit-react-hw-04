import axios from "axios";

const API_KEY = "TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ";
axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common["Authorization"] = API_KEY; 
axios.defaults.params = {
  orientation: "landscape",
  per_page: 12,
};

export const getImg = async (query, page) => {
      const { data } = await axios.get(`search/photos?query=${query}&page=${page}`
      );
    return data;
};
    
// / Access Key
  // TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ
    // https://api.unsplash.com/photos/?client_id=TNyf12i8jeVlVVDDWlHnde9oQXes7SAdWsyNp-n8EXQ
