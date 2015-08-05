var bio = {
    'name' : 'Daniel Campbell',
    'role' : 'Web Developer',
    'contacts' : {
        'mobile' : '269.519.0057',
        'email' : 'metalwhirlwind@gmail.com',
        'github' : 'https://github.com/mavarius',
        'twitter' : '@mavarius',
        'location' : 'Bay Point, CA'
    },
	'welcomeMessage' : 'Hi, I&apos;m a designer and developer of print designs, <br>UI designs, and front-end code. Come build with me!',
	'skills' : [
        'Photoshop',
		'InDesign',
		'Illustrator',
		'Dreamweaver',
		'Flash',
		'HTML5',
		'CSS3',
		'JavaScript'
	],
	'biopic' : 'images/me.jpg',
	'display' : 'function'
};

var work = {
	'jobs' : [
		{
			'employer' : 'Maetrics LLC',
			'title' : 'Graphic Design and Compliance Consultant',
			'location' : 'Fremont, CA',
			'dates' : '2013-2015',
			'description' : 'Consulted with major pharmaceutical company on two contracts. Converted product labels to new branding specifications as part of a larger rebranding strategy. Redesigned product labeling and barcodes to comply with new FDA device identification regulations. Developed new visual guideline documentation for future label designs.'
		},
		{
			'employer' : 'Saffron Vintage Inc.',
			'title' : 'Graphic Designer',
			'location' : 'Newark, CA',
			'dates' : '2013-2015',
			'description' : 'Designed product packaging, labels, and promotional flyers. Photographed and edited product images, and updated company catalog and website.'
		},
		{
			'employer' : 'LithoTech Services',
			'title' : 'Prepress Technician',
			'location' : 'Berrien Springs, MI',
			'dates' : '2009-2010',
			'description' : 'Conducted marketing research to increase business from local customers. Implemented findings which improved client-business communication and internal process efficiency. This resulted in faster, more reliable service and greater customer satisfaction. Designed advertising pieces for both print and web. Prepared client files for print and ran digital press.'
		}
	],
    'display' : 'function'
};

var education = {
	'schools' : [
		{
			'name' : 'Andrews University',
			'location' : 'Berrien Springs, MI',
			'degree' : 'BFA & BBA',
			'majors' : 'Graphic Design & Marketing',
			'dates' : 2012,
			'url' : 'http://www.andrews.edu'
		},
		{
			'name' : 'Jackson Community College',
			'location' : 'Jackson, MI',
			'degree' : 'AAS',
			'majors' : 'Business Administration',
			'dates' : 2006,
			'url' : 'http://www.jccmi.edu'
		},
		{
			'name' : 'Georgia Perimeter College',
			'location' : 'Covington, GA',
			'degree' : 'transferred',
			'majors' : 'Business Management',
			'dates' : 2005,
			'url' : 'http://www.gpc.edu'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Front-End Developer Nanodegree',
			'school' : 'Udacity',
			'date' : 2015,
			'url' : 'http://www.udacity.com'
		}
	],
    'display' : 'function'
};

var projects = {
    'projects' : [
        {
        'title' : 'CogitoTree',
        'dates' : '2015',
        'description' : 'CogitoTree is a multi-platform writing environment for game developers and novelists. The backbone of CogitoTree is the Node Tree, a map that give writers the ability to write and visually navigate branching stories.',
        'images' : ['images/CT1.jpg', 'images/CT2.jpg', 'images/CT3.jpg', 'images/CT4.jpg']
        },
        {
        'title' : 'Project Peon',
        'dates' : '2014-2015',
        'description' : 'Project Peon is an iPad physics game in which players build carts to try to traverse each level. The game combines free-form physics gameplay with fast paced driving action.',
        'images' : ['images/pp1.jpg', 'images/pp2.jpg', 'images/pp3.jpg', 'images/pp4.jpg']
        }
	],
    'display' : 'function'
};

//Bio Display Function
bio.display = function() {
    var formattedBiopic = HTMLbioPic.replace('%data%',bio.biopic);
    $('#header').append(formattedBiopic);
	$('#header').append(HTMLheaderIntro);

    var formattedName = HTMLheaderName.replace('%data%',bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
    var formattedNameRole = formattedName + formattedRole;
    $('#headerIntro').append(formattedNameRole);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
    $('#headerIntro').append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%',bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace('%data%',bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
    var formattedContactInfo = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
    $('#topContacts').append(formattedContactInfo);
    $('#footerContacts').append(formattedContactInfo);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace('%data%',bio.skills[i]);
            $('#skills').append(formattedSkills);
        }
    }
};
bio.display();

//Work Display Function
work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$('#workExperience').append(HTMLworkStart);

		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
		$('.work-entry-inner:last').append(formattedEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[i].dates);
		$('.work-entry-inner:last').append(formattedWorkDates);

        var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
		$('.work-entry-inner:last').append(formattedWorkLocation);

        var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[i].description);
        $('.work-entry-inner:last').append(formattedWorkDescription);
	}
};
work.display();

//Projects Display Function
projects.display = function() {
	for (var i = 0; i < projects.projects.length; i++) {
		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
        $('.project-entry-inner:last').append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
        $('.project-entry-inner:last').append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
        $('.project-entry-inner:last').append(formattedProjectDescription);

        if (projects.projects[i].images.length > 0) {
			$('.project-entry-inner:last').append(HTMLprojectImageStart);
            for (image in projects.projects[i].images) {
                var formattedProjectImages = HTMLprojectImage.replace('%data%', projects.projects[i].images[image]);
                $('.image-box:last').append(formattedProjectImages);
            }
        }
	}
};
projects.display();

//Education Display Function
education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
		$('#education').append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
        var formattedschoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
        var formattedNameDegree = formattedschoolName + formattedschoolDegree;
        $('.education-entry-inner:last').append(formattedNameDegree);

        var formattedschoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
        $('.education-entry-inner:last').append(formattedschoolDates);

        var formattedschoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
        $('.education-entry-inner:last').append(formattedschoolLocation);

        var formattedschoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
        $('.education-entry-inner:last').append(formattedschoolMajor);

		var formattedschoolURL = HTMLschoolURL.replace(/%data%/g,education.schools[i].url);
		$('.education-entry-inner:last').append(formattedschoolURL);
	}
    if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);

        for (var i = 0; i < education.onlineCourses.length; i++) {
		    $('#education').append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);

            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);

            var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $('.education-entry-inner:last').append(formattedTitleSchool);

            var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].date);
            $('.education-entry-inner:last').append(formattedOnlineDates);

            var formattedOnlineURL = HTMLonlineURL.replace(/%data%/g, education.onlineCourses[i].url);
            $('.education-entry-inner:last').append(formattedOnlineURL);
        }
    }
};
education.display();

$('#mapDiv').append(googleMap);

/*
//Internationalize
function inName(name) {
	name = bio.name.trim().split(' ');
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + ' ' + name[1];
};

$('#main').append(internationalizeButton);
*/