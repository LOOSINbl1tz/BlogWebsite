# BlogWebsite

<h1>Setup</h1>
<ul>
  <li>First make virtual enviroment and install libs in requirements.txt</li>
  <li>Then make a db using psql named <b>blogdb</b> and a user named <b>blogger</b></li>
  <li>Now runserver and make those api calls using POSTMAN</li>
</ul>

API calls:<br>
<table>
    <thead>
      <tr>
        <th>API Endpoint</th>
        <th>Accessibility</th>
        <th>Permission</th>
        <th>Returns</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>/auth/register/</td>
        <td>Accessible by anyone</td>
        <td>GET</td>
        <td>Status Code 200</td>
      </tr>
      <tr>
        <td>/auth/login/</td>
        <td>Accessible by anyone</td>
        <td>POST</td>
        <td>JWT token consisting of access token and refresh token</td>
      </tr>
      <tr>
        <td>/blog/save/</td>
        <td>Only logged-in users</td>
        <td>POST</td>
        <td>Data of the blog posted and Author ID</td>
      </tr>
      <tr>
        <td>/blog/getblog/</td>
        <td>Only logged-in users</td>
        <td>GET, DELETE</td>
        <td>All the blogs posted by the logged-in User</td>
      </tr>
      <tr>
        <td>/login/refresh/</td>
        <td>Only logged-in users</td>
        <td>GET</td>
        <td>New JWT token</td>
      </tr>
      <tr>
        <td>/auth/user/</td>
        <td>Only logged-in users</td>
        <td>POST</td>
        <td>User ID</td>
      </tr>
    </tbody>
  </table>

<br>
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

<h1>Update!!!!!!!!</h1>
<ul>
  <li>Added pytest support.</li>
  <li>Not using django test module because it does not follow much of python syntax.</li>
</ul>
