/*
This is empty on purpose! Your code to build the resume will go here.
 */

//$("#main").append("Zhenghong Peng");
//var awesomeThoughts = "I am Peng and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThought = awesomeThoughts.replace("AWESOME", "FUN")
var skills = ["Programing", "Data Analyst", "Machine Learning", "Power BI","VBA"];
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
        "location" : "Houston, TX 77042",
        "description": "Sr. Data Analyst, SSIS, SSRS, Power BI, VBA, .Net",
        "summary" : "Senior Business analyst, SQL server, device manager, support of ATM management system. SSRS report on OLTP and OLAP  Environments."+
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
        "summary" : "SQL BI Developer Experience in design, development & analysis of SQL Server 2005/2008/2012 and SQL Server Business Intelligence tools (BIDS) - SSIS, SSRS, and SSAS."+
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

//education["name"] = "Georgia Institute of Technlogy";
//education["years"] = " 2012-2014";
//education["city"] = "Atlanta, GA 30332";

//HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
//HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);
//HTMLbioPic = HTMLbioPic.replace("%data%", bio.img);
//HTMLskills = HTMLskills.replace("%data%", bio.skills);
//HTMLcontactGeneric = HTMLcontactGeneric.replace("%data%", bio.contactinfo);
//HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage);







//$("#header").append(HTMLheaderName);

//$("#header").append(HTMLheaderRole);

//$("#main").append(HTMLbioPic);
//$("#main").append(HTMLskills);
//$("#main").append(HTMLcontactGeneric);
//$("#main").append(HTMLwelcomeMsg);

//$("#main").append(work["position"]);
//$("#main").append(education.name);


//Name and Role
function header() {
    var name = "Zhenghong Peng";
    var role = "Senior Data Analyst, Software Developer";
    var mobile = bio.contacts.mobile;
    var email = bio.contacts.email;
    var github = bio.contacts.github;
    //var twitter = bio.contacts.twitter;
    var _location = bio.contacts.location;
    var bioPic = bio.img;
    var welcomeMessage = bio.welcomemessage;
    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    var formattedEmail = HTMLemail.replace("%data%", email);
    var formattedGithub = HTMLgithub.replace("%data%", github);
    //var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
    var formattedLocation = HTMLlocation.replace("%data%", _location);
    var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bioPic);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    //$("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);
}
header();

//var welcomeMessage = bio.welcomeMessage;
//var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
//$("#header").prepend(formattedWelcomeMessage);



//Skills displays good
if (bio.skills.length != 0) {
    $('#header').append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
    $('#skills').append(formattedSkill);
    var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
    $('#skills').append(formattedSkill);

}

//Work Experience displays good
function displayWork() {
    for (job in work.jobs) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedWorkDescritption = HTMLworkDescription.replace('%data%', work.jobs[job].summary);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkDescritption);
    }
}
displayWork();

//Projects
projects.display = function () {
    for (var project in projects.projects) {
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images) {
            //if (projects.projects[project].images.length > 0) {
            //for (var image in projects.projects[project].images) {
            //var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedImage);
        }
    }
}

projects.display();



//Education displays good
function displayEducation() {
    for (schoolInfo in education.schools) {
        var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schoolInfo].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolInfo].degree);
        var formattedSchoolInformation = formattedSchool + formattedDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolInfo].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolInfo].location);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolInformation);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);

    }



    $("#education").append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

        var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool + "    " + formattedOnlineDates;
        //var formattedURL = HTMLonlineURL.replace("#","#"+" onClick="+"document.location.href= education.onlineCourses[onlineCourse].url");
        var formattedURL = HTMLonlineURL.replace("%data%", formattedOnlineSchoolInfo);
        var formattedURL = formattedURL.replace("YOUR_ID", education.onlineCourses[onlineCourse].title);
        //var HTMLonlineURL = '<br><a href="#">%data%</a>';

        $("#education").append(HTMLschoolStart);
        //$(".education-entry:last").append(formattedOnlineSchoolInfo);
        //$(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedURL);

    }

    $("#education").append(HTMLcertificates);
    for (certCourse in education.Certificates) {
        var formattedCertTitle = HTMLcertTitle.replace("%data%", education.Certificates[certCourse].name + " " +education.Certificates[certCourse].dates);

 //       var formattedCertDates = HTMLcertDates.replace("%data%", education.Certificates[certCourse].dates);
        //var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        //$("#education").append(HTMLcertificates);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedCertTitle);
//        $(".education-entry:last").append(formattedCertDates);
        //$(".education-entry:last").append(formattedURL);





    }
}
displayEducation();


//Map
function displaymap() {
    $("#mapDiv").append(googleMap);
}

displaymap();




