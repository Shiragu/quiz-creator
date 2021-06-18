import axios from "axios";

export default axios.create({
  baseURL:
    "https://quiz-creator-a0eee-default-rtdb.europe-west1.firebasedatabase.app/",
});
