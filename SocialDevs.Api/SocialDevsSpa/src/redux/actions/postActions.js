import * as types from "./actionTypes";
import * as postApi from "../../api/postApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPostSuccess(posts) {
  return { type: types.LOAD_POST_SUCCESS, posts };
}

export function loadPosts() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return postApi
      .getPosts()
      .then(posts => {
        dispatch(loadPostSuccess(posts));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

// export function savePost(post) {
//   //eslint-disable-next-line no-unused-vars
//   return function(dispatch, getState) {
//     dispatch(beginApiCall());
//     return courseApi
//       .saveCourse(course)
//       .then(savedCourse => {
//         course.id
//           ? dispatch(updateCourseSuccess(savedCourse))
//           : dispatch(createCourseSuccess(savedCourse));
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }

