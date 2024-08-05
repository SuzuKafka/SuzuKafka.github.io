
// Array 
progLang = ['C', 'C++', 'C#', 'Pascal', 'Python', 'PHP', 'Java', 'Javascript', 'Haskell', 'COBOL', 'Assembly', 'Swift', 'Objective-C', "Ruby", "Perl", 'Matlab', 'Basic', "SQL", "HTML", "Scratch"];




// Array of objects

var courses = [
    {
        name: "Programming Bootcamp 1",
        year: 1,
        description: "Programming Bootcamp 1 introduces programming in a bootcamp style. This course covers algorithmic development using standard control structures, fundamental concepts of programming and the creation of small to medium practical applications. In this course, you will learn the basic skills of program development by working on the production of small amounts of software (typically in Java programming language). This will include skills in testing and debugging programs, and in the use of appropriate software technologies. "
    },
    {
        name: "Programming Studio 1",
        year: 1,
        description: "Programming Studio 1 is a studio-based course that focuses on the acquisition and development of fundamental technical and professional skills for computing. The studio-based approach provides an authentic problem setting. Theory and practice are blended in the application of learning centred on development."
    },
    {
        name: "Web programming bootcamp",
        year: 1,
        description: "Web Programming Bootcamp builds on Programming Bootcamp 1, in a bootcamp style.This course is a technical introduction to web programming techniques, introducing you to the essential concepts of the World Wide Web, and key principles and tools that are used to develop Web applications. The course will provide an overview of Internet technology and introduce you to current web protocols, client side programming, communication, and design. This course serves as a pre-requisite for more specialised courses that require web programming."
    },
    {
        name: "Software Engineering Fundamentals for IT",
        year: 2,
        description: "This course is designed to provide you opportunity to gain knowledge and skills necessary to analyse, design and implement complex software engineering projects. You should learn to analyse and design fairly complex real-life systems, working as teams. The project based approach used requires you to review and refine your design iteratively based on regular feedback from staff. You are also made aware of current software engineering standards and processes. You are also taught to consider qualitative aspects including maintainability, extensibility, reusability and robustness in every stage of the software-engineering life-cycle. At the end of the course you should be able to combine top-down and bottom-up approaches to software design and choose the most appropriate process considering the underlying technology, project duration, the level of risks and the customer expectations."
    },
    {
        name: "Cloud Foundation",
        year: 2,
        description: "By completing this foundation course, you will gain an overall understanding of Amazon Web Services (AWS) cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support. This introductory course will help you to understand the architecture of AWS cloud services including basics of concepts such as AWS IAM, VPC, Elastic beanstalk, Storage services, Database services and security."
    },
    {
        name: "Software Engineering Project Management",
        year: 3,
        description: "By completing this foundation course, you will gain an overall understanding of Amazon Web Services (AWS) cloud computing concepts, independent of specific technical roles. It provides a detailed overview of cloud concepts, AWS core services, security, architecture, pricing, and support. This introductory course will help you to understand the architecture of AWS cloud services including basics of concepts such as AWS IAM, VPC, Elastic beanstalk, Storage services, Database services and security."
    },
    {
        name: "Programming Project 1",
        year: 3,
        description: "This course is designed to provide you with hands-on practical experience developing software and/or delivering IT solutions in a project environment. You will work in teams and complete projects from inception to implementation. The emphasis is on understanding and working within a corporate environment, using formal project and software delivery methodologies and integrating all the skills and knowledge that you have acquired into a solid base from which to progress your professional life."
    },

    {
        name: "Programming Project Test",
        //year: 3,
        //description: "This course is designed to provide you with hands-on practical experience developing software and/or delivering IT solutions in a project environment. You will work in teams and complete projects from inception to implementation. The emphasis is on understanding and working within a corporate environment, using formal project and software delivery methodologies and integrating all the skills and knowledge that you have acquired into a solid base from which to progress your professional life."
    }

]


// Function to display programming languages
function displayProgLang() {
    var progLangList = document.getElementById('progLangList');
    progLang.forEach(function (lang) {
        var li = document.createElement('li');
        li.textContent = lang;
        progLangList.appendChild(li);
    });
}

// Function to display the programming languages
function displayCourses() {
    const courseList = document.getElementById('courseList');
    const fragment = document.createDocumentFragment();

    courses.forEach(function(course) {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="name">${course.name}</div><br>
            <div class="year">${course.year || 'Not found'}</div><br>
            <div class="description">${course.description || 'Not available'}</div>`;

        fragment.appendChild(li);
    });

    courseList.appendChild(fragment);
}




// Function to display the courses
displayProgLang();
displayCourses();