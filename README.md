# BlogWebsite

API calls:
  /auth/register/      <----- this api is accessible by anyone.<br>
  /auth/login/         <----- this is also accessible by anyone.<br>
  /blog/save/          <----- only logged in will be able to access this api and perm is set to POST.<br>
  /blog/getblog/       <----- Same with this and default permission is set to GET and DELETE.<br>
