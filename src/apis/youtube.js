import axios from "axios";

const KEY = "AIzaSyAmrkYQVbcKJ5G_1U02nhuVeasa7s0K0tM";

export default axios.create({
  baseURL:  "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
