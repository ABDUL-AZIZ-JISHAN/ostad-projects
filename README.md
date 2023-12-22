API DOCUMENTATION

<!-- Create Single Student -->

POST - http://localhost:3000/api/students

<!-- Sample request -->

{
       "first_name": "Abdul Aziz",
        "last_name": "Jishan",
        "age": "25",
        "grade": "5.00",
        "courses": "English , Bangla, Arabic"
}

<!-- Create Single Student -->

POST - http://localhost:3000/api/students/createMany

<!-- Sample request -->

[{
       "first_name": "Abdul Aziz",
        "last_name": "Jishan",
        "age": "25",
        "grade": "5.00",
        "courses": "English , Bangla, Arabic"
},
{
       "first_name": "Abdul Aziz",
        "last_name": "Jishan",
        "age": "25",
        "grade": "5.00",
        "courses": "English , Bangla, Arabic"
}]


<!-- Get All Students -->

GET - http://localhost:3000/api/students

<!-- Get Single Student -->

GET - http://localhost:3000/api/students/STUDENT_ID

<!-- Update Single Student -->

PUT - http://localhost:3000/api/students/STUDENT_ID


<!-- Sample Request -->
{
       "first_name": "Abdul Aziz Updated",
        "last_name": "Jishan Updated",
        "age": "25",
        "grade": "5.00",
        "courses": "English , Bangla, Arabic"
}


<!-- Delete Single Student -->

DELETE - http://localhost:3000/api/students/STUDENT_ID



