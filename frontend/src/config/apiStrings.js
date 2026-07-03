export const API_BASE_URL = "http://localhost:5001/api";

   export const AUTH = {
     LOGIN: `${API_BASE_URL}/auth/login`,
     REGISTER: `${API_BASE_URL}/auth/register`,
   };

   export const ADMIN = {
     CREATE_USER: `${API_BASE_URL}/admin/createUser`,
   };

   export const LEADS = {
     GET_ALL: `${API_BASE_URL}/leads`,
     CREATE: `${API_BASE_URL}/leads/create`,
   };