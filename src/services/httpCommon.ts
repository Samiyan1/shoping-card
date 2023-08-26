import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTU5ZTg4OWVmMGM3Y2UyYmY2ZDlkNmM0ODU4ZTg1NyIsInN1YiI6IjY0ZWE0MzY3YzYxM2NlMDBhYzQyMDlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B-7R5IiuNvm3Oi8oIrPc6n1ilL68U__ZzbQm4bu33YU'
  }
});