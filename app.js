var app = angular.module('portfolio', []);

app.controller('MainCtrl',[ '$scope', function($scope){
  $scope.personalDetails = {
    name:'Vishal Chilate',
    aboutMe:'I am Computer Science graduate seeking Entry level position. I am committed, dynamic and an adaptable person who loves to accept challenges and who finds out innovative ways to solve/tackle any problem and eager to learn new technologies and Strive for continued excellence.',
    phone:'(228) 596 2671',
    email:'vishalchilate3@gmail.com',
    fbName:'facebook.com/vishal.chilate',
    twitName:'twitter.com/vishalchilate'
  };
  
  $scope.name='Vishal Chilate';
  $scope.aboutMe='I am Computer Science graduate seeking Entry level position. I am committed, dynamic and an adaptable person who loves to accept challenges and who finds out innovative ways to solve/tackle any problem and eager to learn new technologies and Strive for continued excellence.';
  $scope.phone= '(228) 596 2671';
  $scope.email= 'vishalchilate3@gmail.com';
  $scope.fbName= 'facebook.com/vishal.chilate';
  $scope.twitName= 'twitter.com/vishalchilate';
  
  $scope.experiences = [{
    duration: 'Dec 2014 - Present',
    title: 'Java Developer, Deloitte, Santa Fe, NM',
    details:'Developing feature and functionalities using Deloitte NextGen framework for ASPEN Project which is one stop application for all the social security residents of State of New Mexico.'
  },{
    duration: 'Mar 2014 - Dec 2014',
    title: 'AngularJS Developer, Citrix Online, San Francisco, CA',
    details:'Developed cross platform front ends using HTML5, CSS3, JSON, AngularJS and used chrome developer tools for debugging web pages for GoToAssist product of Citrix'
  },
  {
    duration: 'Jul 2013 - Dec 2013',
    title: 'Research Assistant, University of Southern Mississippi',
    details:'Implemented algorithms for creating lists of unique words and text categorization in Python for research in Natural language processing in which the aim of research is to create contextual pattern by using semantic tagging of text document.'
  },
  {
    duration: 'Jun 2011 - Dec 2012',
    title: 'Software Engineer, HSBC GLT, India',
    details:'Implemented security layer to intercept payments flow for HSBCnet in near-real time based on risk weighted result of fraud engine to prevent suspicious payment transactions being processed by the payment back-offices.'
  },
  {
    duration: 'Jan 2013 - Dec 2013',
    title: 'M.S Computer Science, University of Southern Mississippi',
    details:'GPA 3.82/4.0'
  },
  {
    duration: 'May 2007 - May 2011',
    title: 'B.E. Information Technology, Nagpur University, India',
    details:''
  }];
  
  $scope.skills = [{
      skill:'HTML/HTML5, CSS/CSS3, SASS, Bootstrap'
  },
  {
      skill:'AngularJS, JavaScript, Jquery, JSP'
  },
  {
      skill:'Java/J2EE'
  },
  {
      skill:'Spring, Hibernate, Servlet'
  },
  {
      skill:'MySQL, Oracle, DB2'
  },
  {
      skill:'REST, SOAP'
  },
  {
      skill:' Mac, Linux'
  },
  {
      skill:'Eclipse, RAD, Visual Studio'
  },
  {
      skill:'Git, SVN, ClearCase'
  }
  ]

  
}]);

app.directive('ngExperienceCustom', function(){
    
   return{
    restrict: 'E',
    templateUrl: 'directives/experienceCustom.html',
    scope: {
        expObj: "="
    }
   }
    
});

app.directive('ngSkillCustom', function(){
    
   return{
    restrict: 'E',
    templateUrl: 'directives/skillCustom.html',
    scope: {
        skillObj: "="
    }
   }
    
});