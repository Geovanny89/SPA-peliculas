const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGNhYWY5MjJmMDA4ZTU2MzJiNTFhZTc4ZmEyNjcyOSIsInN1YiI6IjY0MmQ5MWRhMTU4Yzg1MDEwMzFmOTAwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9wfnl5ljw0ObRiTfMopEizhBexbjpdo0IEvYWRZyQ0",
        "Content-Type": "application/json;charset=utf-8",
    },
  }).then((results) => results.json());
}