# BlogWebsite

API calls:
  /auth/register/      <----- this api is accessible by anyone.
  /auth/login/         <----- this is also accessible by anyone.
  /blog/save/          <----- only logged in will be able to access this api and perm is set to POST.
  /blog/getblog/       <----- Same with this and default permission is set to GET and DELETE.
