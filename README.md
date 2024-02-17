# Course Registration

## Three features of this project are described below: 

- There are course cards that mention course title, describe briefly about course contents, credit hours, price and a button to select the course.
- There is a cart on the right side that displays selected cards along with mentioning remaining credit hours to notify user about how many courses one can take. It also shows the total price accumulating the courses.
- User can take one course once only, maximum credit hours is 20. If one try to do otherwise, there will be an alert for that particular move.

## How I managed the state in my assignment:

According to DOM tree, the course cards and the cart are on two different branches. As react communicate in one way, it is not possible to utilize event bubbling to handle event from one branch to another. So, I managed the state from app.jsx file, a higher level component from which both branches can be accessible.


