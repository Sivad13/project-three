const mongoose = require("mongoose");
const College = require('../models/College');

mongoose.connect(
  process.env.mongoURI || "mongodb://localhost/dashboard"
);

const seedThree = [
      {
          name: "Business",
          majors: ["Accounting", "Economics", "Finance", "Management"],
          faculty: [
            {
              fullName: "John Snow",
              Department: "Business",
              Title: "Professor",
              Email: "you@knownothing.com",
              OfficeNumber: "1485 S. Westeros",
              PhoneNumber: "555.123.4567",
              Image: "https://randomuser.me/api/portraits/men/62.jpg"
            },
            {
              fullName: "Greg Gandalf",
              Department: "Business",
              Title: "Dean",
              Email: "gray@wiz.com",
              OfficeNumber: "7865 Smotem Hall",
              PhoneNumber: "555.456.7898",
              Image: "https://randomuser.me/api/portraits/men/2.jpg"
            },     
          ]
      },
      {
        name: "Science",
        majors: ["Biology", "Physics", "Quantitative Risk Analytics", "Zoology"],
        faculty: [
          {
            fullName: "Jackie Brown",
            Department: "Science",
            Title: "Professor",
            Email: "profbrown@ift.edu",
              OfficeNumber: "76545 Rumpunch Commons",
              PhoneNumber: "555.789.1234",
              Image: "https://randomuser.me/api/portraits/women/62.jpg"
          },
          {
            fullName: "Mara Jann",
            Department: "Science",
            Title: "Dean",
            Email: "profjane@ift.edu",
            OfficeNumber: "8974 Union Commons",
            PhoneNumber: "555.402.0004",
            Image: "https://randomuser.me/api/portraits/women/55.jpg"
          },
        ]
    },
    {
        name: "Computer Science",
        majors: ["Computer Science", "Data Science", "Information Science"],
        faculty: [
          {
            fullName: "Dana Scully",
            Department: "Computer Science",
            Title: "Dean",
            Email: "truth@outthere.com",
            OfficeNumber: "8975 Nobees Hall",
            PhoneNumber: "555.258.3691",
            Image: "https://randomuser.me/api/portraits/women/64.jpg"
          },
          {
            fullName: "Natasha Romanoff",
            Department: "Computer Science",
            Title: "Professor",
            Email: "totally@notaspy.com",
            OfficeNumber: "7561 Suspense Hall",
            PhoneNumber: "555.147.2583",
            Image: "https://randomuser.me/api/portraits/women/66.jpg"
          },
        ]
    },
    {
        name: "Medicine",
        majors: ["Global Health", "Nursing", "Veterinary Nursing", "X-Ray Technician"],
        faculty: [
          {
            fullName: "Angela Ramonda",
            Department: "Medicine",
            Title: "Dean",
            Email: "proframonda@ift.edu",
            OfficeNumber: "4567 Union Commons",
            PhoneNumber: "555.741.8523",
            Image: "https://randomuser.me/api/portraits/women/5.jpg"
          },
          {
            fullName: "Babbage Nelson",
            Department: "Medicine",
            Title: "Professor",
            Email: "webhistori@n.org",
            OfficeNumber: "1245 Globochem Hall",
            PhoneNumber: "555.852.7413",
            Image: "https://randomuser.me/api/portraits/men/43.jpg"
          },
        ]
    },
    {
        name: "Social Science",
        majors: ["History", "Urban Planning", "Youth Development"],
        faculty: [
          {
            fullName: "Jane Foster",
            Department: "Social Science",
            Title: "Dean",
            Email: "redcross@hammernursing.org",
            OfficeNumber: "8975 Haul Hall",
            PhoneNumber: "555.987.6543",
            Image: "https://randomuser.me/api/portraits/women/80.jpg"
          },
          {
            fullName: "Natalie Emmanuel",
            Department: "Art",
            Title: "Professor",
            Email: "fast7@hollyoaks.org",
            OfficeNumber: "7642 Missandei Hall",
            PhoneNumber: "555.987.3214",
            Image: "https://randomuser.me/api/portraits/women/92.jpg"
          },
          {
            fullName: "Darcy Lewis",
            Department: "Social Science",
            Title: "Professor",
            Email: "proflewis@ift.edu",
            OfficeNumber: "8794 Westview Hall",
            PhoneNumber: "555.546.9875",
            Image: "https://randomuser.me/api/portraits/women/12.jpg"
          },
          {
            fullName: "Carl Drogo",
            Department: "Social Science",
            Title: "Professor",
            Email: "profdrogo@ift.edu",
            OfficeNumber: "8954 Ghostgrass Hall",
            PhoneNumber: "555.124.5632",
            Image: "https://randomuser.me/api/portraits/men/67.jpg"
          },
          {
            fullName: "Clint Barton",
            Department: "Social Science",
            Title: "Professor",
            Email: "profbarton@ift.edu",
            OfficeNumber: "7899 Mortimer Hall",
            PhoneNumber: "555.456.1278",
            Image: "https://randomuser.me/api/portraits/men/72.jpg"
          }
        ]
    },
    {
        name: "Arts",
        majors: ["Journalism", "Linguistics", "Online Teaching", "Rhetoric and Writing", "Literasy", "Spanish", "Theater", "Women's and Gender Studies"],
        faculty: [{
          fullName: "Becky Adjunct",
          Department: "Arts",
          Title: "Dean",
          Email: "deanadjunct@ift.edu",
          OfficeNumber: "12345 Lecture Hall",
          PhoneNumber: "555.789.1234",
          Image: "https://randomuser.me/api/portraits/women/53.jpg"
        },
        {
          fullName: "Bill Baggins",
          Department: "Arts",
          Title: "Professor",
          Email: "bagend@ift.edu",
          OfficeNumber: "111 Thbirthday Hall",
          PhoneNumber: "555.854.3214",
          Image: "https://randomuser.me/api/portraits/men/78.jpg"
        }
      ]
    },
    {
        name: "Education",
        majors: ["K-12 Education"],
        faculty: [
          {
            fullName: "Fox Mulder",
            Department: "Education",
            Title: "Dean",
            Email: "profmulder@ift.edu",
            OfficeNumber: "8799 Truthiness Hall",
            PhoneNumber: "555.555.5555",
            Image: "https://randomuser.me/api/portraits/men/31.jpg"
          },
          {
            fullName: "Sarah Connor",
            Department: "Education",
            Title: "Professor",
            Email: "profconnor@ift.edu",
            OfficeNumber: "5648 Faychamake Commons",
            PhoneNumber: "555.789.6587",
            Image: "https://randomuser.me/api/portraits/women/35.jpg"
          },
        ]
    },
  ]

  College.remove({})
  .then(() => College.collection.insertMany(seedThree))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });