# BlogWebsite

<h1>Setup</h1>
<ul>
  <li>First make virtual enviroment and install libs in requirements.txt</li>
  <li>Then make a db using psql named <b>blogdb</b> and a user named <b>blogger</b></li>
</ul>

API calls:<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /auth/register/      &emsp;<----- this api is accessible by anyone.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /auth/login/         &emsp;<----- this is also accessible by anyone.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /blog/save/          &emsp;<----- only logged in will be able to access this api and perm is set to POST.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /blog/getblog/       &emsp;<----- Same with this and default permission is set to GET and DELETE.<br>

Now by default SessionAuthentication is disabled so to access these API <b><h2>PostMan is necessary</h2></b>
