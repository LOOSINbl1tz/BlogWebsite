# BlogWebsite

<h1>Setup</h1>
<ul>
  <li>First make virtual enviroment and install libs in requirements.txt</li>
  <li>Then make a db using psql named <b>blogdb</b> and a user named <b>blogger</b></li>
  <li>Now runserver and make those api calls using POSTMAN</li>
</ul>

API calls:<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /auth/register/      &emsp;<----- this api is accessible by anyone.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /auth/login/         &emsp;&emsp;&nbsp;<----- this is also accessible by anyone.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /blog/save/          &emsp;&emsp;&nbsp;&nbsp;<----- only logged in will be able to access this api and perm is set to POST.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /blog/getblog/       &emsp;<----- Same with this and default permission is set to GET and DELETE.<br>
&nbsp;&nbsp;&nbsp;&nbsp;  /login/refresh/  &emsp;<----- To refresh JWT token
<br><br>
Now by default SessionAuthentication is disabled so to access these API <b><h2>PostMan is necessary</h2></b>

<br>
<h1>Everything should be given in JSON format</h1>
<ul>
  <li> Register API takes 'username','first_name','last_name','email' and 'password' as input.</li>
  <li> Login API takes 'username' and 'password' as input.&nbsp;After login access token will be return which should be used as bearer authentication in postman.</li>
  <li> After adding the token /blog/save/ can be accessed which saves blog written by the user this API takes author, title and body as input.</li>
  <li> For /blog/getblog/ it returns all the blogs written by the user and to access specific blog use /blog/getblog/{blog_id}/ which can be deleted also.</li>
</ul>

<h2>Remember</h2>
<ul>
  <li>The token returned by JWT consists of user_id hyperlink and passoword and this hyperlink is used to save blogs which should be maintained by frontend.</li>
  <li>The blog saving API uses author_id which is linked to user_id in other words the hyperlink for user_id is equivalent to author_id. Probably in future I will add exception handler to return some json message if wrong data is provided.</li>
</ul>

<h2>Things to add</h2>
<ul>
  <li>Proper exception handler.</li>
  <li>Roles making easier to handle multiple users.</li>
  <li>JWT token need to be refreshed.</li>
</ul>

<h2>For Front-End</h2>
<ul>
  <li>JWT token needs to be stored in cookies and after some time refresh call should be done to refresh JWT token</li>
</ul>
