var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


var skills = ["Programing", "Data Analyst", "Machine Learning", "Power BI", "VBA"];
//$("#main").append(funThought);
var formattedName = "Zhenghong Peng";
var formattedRole = "Software Developer";
var bio = {
    "name": formattedName,
    "age": 0,
    "skills": skills,
    //"img": "images/zhpimg2.jpg",
    "img": "images/fry.jpg",
    "role": formattedRole,


    "contacts": {

        "email": "zhenghongpengcs@gmail.com",
        "mobile": "2813877143",
        "github": "https://github.com/zhenghongpeng",
        "location": "Houston, TX 77459"


    },


    "welcomemessage": " Welcome to " + formattedName + "'s Page"



};

//Work valid json
var work = {
    "jobs": [{
        "employer": "Cardtronics",
        "title": "Sr. Business Analyst",
        "dates": "Oct. 2014 -Present",
        "location": "Houston, TX 77042",
        "description": "Sr. Data Analyst, SSIS, SSRS, Power BI, VBA, .Net",
        "summary": "Senior Business analyst, SQL server, device manager, support of ATM management system. SSRS report on OLTP and OLAP  Environments." +
	 " Excel Power PI, Power Query Design, Dashboard Design and Optimization." +
     " Data Mining on large ATM machine management log files." +
     " Microsoft Studio VBA, C#, Python, Java, SQL software development for Customer Business Reports"
     + "	Experience in Developing, testing, deploying, and maintained new and existing ETL processes."
     + " Statistic R Analysis and Forcasting ATM Process. "
    + " IDE: Microssoft Studio, Java Eclipse, Pycharm, SQL Server."
    },

    {
        "employer": "MD Anderson Cancer Center",
        "title": "Research Scientist/Data Analyst",
        "location": "Houston, TX 77030",
        "dates": "May, 2013-Sept. 2014",
        "description": "SQL server Manager for Laboratory Information System, SSIS, SSRS.",
        "summary": "SQL BI Developer Experience in design, development & analysis of SQL Server 2005/2008/2012 and SQL Server Business Intelligence tools (BIDS) - SSIS, SSRS, and SSAS." +
        "Experience with Installing, Configuring, Managing, Upgrading, Migrating, Monitoring and Troubleshooting SQL Server 2005/2008/2012. "

        + " Development and Administration experience on Database Design and Implementation of OLTP and OLAP environment."
        + " Hands on Logical and Physical Data Modeling by building Referential Integrity Constraints."
        + " Good at creating Tables and Views using T-SQL."
        + "Extensive experience in developing Stored Procedures, Functions (Arithmetic, String and DateTime) using T-SQL."
        + "Implemented Triggers at different levels of Database Objects to apply Security Constraints."
        + "Experience in data Extraction, Transforming and Loading (ETL) using various tools such as SQL Server Integration Services (SSIS 2005/2008/2012), DTS, Bulk Insert and Bulk Copy Program utility."
        + "Good work experience with different Data Source such as Flat Files, Excel, CSV files and Oracle data sources to MS SQL Server by using linked server, SSIS, DTS, BCP and QSQL utility."
         + "Reporting Services (SSRS 2005/2008/2012) for organization requirements."
         + "Involved in creating Jobs, SQL Mail Agent, Alerts and Schedule DTS/SSIS Packages."
         + "Involved in administration tasks such as Data Loading, Batch Jobs, Data Unloading, Backup and Recovery, Upgrades, Creating Databases, Files, File groups and Transaction logs."
         + "Strong communication skills and an ability to work individually or part of a team and good learner to adapt new technologies that improve the business."
         + "Experience in Developing, testing, deploying, and maintained new and existing ETL processes."

    }

    ]
}

//Projects valid json
//var projects = {
//    "projects": [{
//        "title": "Alarm Migration Project",
//        "dates": "2015",
//        "description": "This was the first project I did back in 2015",
//        "images": "images/robot.jpg"
//    }, {
//        "title": "LMU Migration Project",
//        "dates": "2014",
//        "description": "This was the first project I did back in 2014",
//        "images": "images/tank.jpg"
//    }]
//}
//var work = {};
//work.position = "Senior Data Analyst/Software Developer";
//work.employer = "Cardtronics"
//work.years = 1;

var education = {
    "schools": [


        {

            "name": "Georgia Institute of Technlogy",
            "location": "Atlanta, GA 30332",
            "degree": "MS",
            "majors": ["CS"],
            "dates": 2015
        },

        {
            "name": "Univeristy of Houston Clear Lake",
            "location": "Houston, TX 77058",
            "degree": "MS student",
            "majors": ["CS"],
            "dates": 2002
        },
        {
            "name": "Univeristy of Science and Technology of China",
            "location": "Hefei, China",
            "degree": "BS",
            "majors": ["Chemistry"],
            "dates": 1992
        }

    ],

    "Certificates": [
    {
        "name": "Oracle DBA 8i",
        "dates": 2001
    },
    {
        "name": "Java 2 PLATFORM",
        "dates": 2001
    }

    ],

    "onlineCourses": [
        {
            "title": "Software Development Process",
            "school": "Gatech",
            "dates": 2015,
            "url": "https://www.udacity.com/"
        },
        {
            "title": "Knowledge-Based AI: Cognitive Systems",
            "school": "Gatech",
            "dates": 2015
        },
        {
            "title": "Machine Learning",
            "school": "Gatech",
            "dates": 2015,
            "url": "https://www.udacity.com/"
        },
        {
            "title": "Machine Learning for Trading",
            "school": "Gatech",
            "dates": 2015,
            "url": "https://www.udacity.com/"
        },
        {
            "title": "Introduction to HealthCare Informatics",
            "school": "Gatech",
            "dates": 2015,
            "url": "https://www.udacity.com/"
        },
        {
            "title": "Computer Networking",
            "school": "Gatech",
            "dates": 2015
        },
        {
            "title": "Developing Android Apps",
            "school": "Udacity",
            "dates": 2015
        },

        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/ud804"
        },

        //{
        //    "title": "Intro to Computer Science",
        //    "school": "Udacity",
        //    "dates": 2014
        //},

        //{
        //            "title": "Intro to Data Science",
        //            "school": "Udacity",
        //            "dates": 2014
        //},
        //{
        //    "title": "Intro to Java programming",
        //    "school": "Udacity",
        //    "dates": 2014
        //},
        {
            "title": "Web Development",
            "school": "Udacity",
            "dates": 2014
        },
        {

            "title": "Machine Learning",
            "school": "Stanford",
            "dates": 2014
        },
        {

            "title": "An Introduction to Interactive Programming in Python ",
            "school": "Rice",
            "dates": 2014
        },
        {

            "title": "Algorithms",
            "school": "Princeton",
            "dates": 2015
        },
        //{

        //    "title": "Introduction to Databases",
        //    "school": "Stanford",
        //    "dates": 2014
        //},
        {

            "title": "Introduction to Linux",
            "school": "edX",
            "dates": 2014
        }

    ]





};
var jsonresume = { "bio": bio, "work": work, "eduction": education };

app.post("/api/website", function (req, res) {
    var obj = req.body;//{ firstName: "First", lastName: "Last" };
    websites.push(obj);
    res.json(websites);
});



app.put("/api/website/:id", function (req, res) {
    var index = req.params.id;
    var obj = req.body;//{ firstName: "First", lastName: "Last" };
    websites[index] = obj;

    res.json(websites);

});



app.delete("/api/website/:id", function (req, res) {
    var index = req.params.id;
    websites.splice(index, 1);
    res.json(websites);

});

app.delete("/api/website/:siteID/Page/:pageIndex", function (req, res) {
    var index = req.params.siteID;
    websites[index].pages.splice(req.params.pageIndex,1);
    res.json(websites);

});

app.get("/json", function (req, res) {
    res.json(jsonresume);
});

app.get("/api/website/:id", function (req, res) {
    res.json(websites[req.params.id]);
});

app.use(express.static(__dirname + '/public'));

var ip = process.env.OPENSHIFT_NODEJS_IP||'127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);