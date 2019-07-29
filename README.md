# Back-End
Back-End Repo

https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/register

A POST to this endpoint will register a new user and provide a Web Token
Requires a firstName, lastName, username, and password

https://bw19-wedding-planner-portfolio.herokuapp.com/api/auth/login

A POST to this endpoint will login a registered user. Also provides Web Token.
Requires username and password

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/all

A GET request to this endpoint will return all posts/portfolios
Requires nothing as far as login goes.

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/:id

A GET request to this endpoint will return the post with the specific ID. (Replace ":id" with the id you want to look for)
Will only return if associated with logged in user

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts

A POST request to this endpoint will allow the logged in user to add a post or portfolio
Requires a couple_name

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/:id

A PUT request to this endpoint where ":id" is replaced by the post ID, will allow the logged in user to edit their post

https://bw19-wedding-planner-portfolio.herokuapp.com/api/posts/:id

A DELETE request to this endpoint where ":id" is replaced by the post ID, will allow the logged in user to DELETE their post