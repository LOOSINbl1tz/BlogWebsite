# BlogWebsite

API calls:<br>
&nbsp;&nbsp;  /auth/register/      <----- this api is accessible by anyone.<br>
&nbsp;&nbsp;  /auth/login/         <----- this is also accessible by anyone.<br>
&nbsp;&nbsp;  /blog/save/          <----- only logged in will be able to access this api and perm is set to POST.<br>
&nbsp;&nbsp;  /blog/getblog/       <----- Same with this and default permission is set to GET and DELETE.<br>
