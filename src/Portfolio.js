import React from "react"
import { FaCloud, FaCode, FaHeadset, FaGuitar, FaPlane, FaUserNinja, FaBriefcase } from 'react-icons/fa';
import microsoft from "./microsoft.png";
import ibm from "./ibm.png";
import aws from "./aws.png";

function About(props) {
  return (
        <div id="main">
          <div className="content">
            <h3> </h3>

            <div className="skills">
	          	<div className="pure-g">
	          	
				    <div className="pure-u-1-6">
				   		<center>
					    	<h1><FaCloud /></h1>
					    	<h4> Dev Ops </h4>
					    	<p>I fix, maintain, improve and automate cloud infrastructure.</p>
				    	</center>
				    </div>

				    <div className="pure-u-1-6">
				   		<center>
					    	<h1><FaUserNinja /></h1>
					    	<h4> Support Ninja</h4>
					    	<p>6 years being a support engineer, fixing bugs, answering tickets, and fixing issues.</p>
				    	</center>
				    </div>


				  	<div className="pure-u-1-6">
				   		<center>
					    	<h1><FaCode /></h1>
					    	<h4> Programming </h4>
					    	<p>I code in PHP, Python & GoLang, Javascript, React, NodeJS, MySQL</p>
				    	</center>
				    </div>

				  	<div className="pure-u-1-6">
				   		<center>
					    	<h1><FaHeadset /></h1>
					    	<h4> Customer Service </h4>
					    	<p>An expert in Customer Service, with an IBM Customer Certification.</p>
				    	</center>
				    </div>

				  	<div className="pure-u-1-6">
				   		<center>
					    	<h1><FaGuitar /></h1>
					    	<h4> Music </h4>
					    	<p>I play Guitar, Piano, Harmonica and love to make little tunes.</p>
				    	</center>
				    </div>

				  	<div className="pure-u-1-6">
				   		<center>
					    	<h1><FaPlane /></h1>
					    	<h4> Aviation </h4>
					    	<p>I have always loved aviation, and hope to learn to fly one day.</p>
				    	</center>
				    </div>


				</div>
			</div>

            <h2 className="content-subhead">A man with a passion</h2>
            <p>
              Hello Friend,<br></br>
              Thanks for visiting my site, my name is James Wilson, I am from Bath in the United Kingdom, currently living just outside of Bath, I absolutely love new cutting edge technologies
              I have been deeply interested in the Cloud and server infrastructure since I was around 14 years old, I've managed to pursue this in my adulthood as a versatile Cloud Support & Dev Ops engineer
              which I have been in this sector for almost 7 years now.


            </p>
            <p>
              I have experience in leading technologies like MySQL, PHP, Ubuntu, Windows Servers, Apache2 and IIS, PHP-FPM, SoapAPI’s, AWS, Rackspace, Github and much more.
            </p>

			<div className="skills-section">
			    <h3><i className="fa fa-code"></i>Core Skills</h3>
			    <ul>
			    	<li>
				        <span>Customer Service</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '100%'}} />
				          </div>
				     </li>
			      	<li>
				        <span>GIT, Github, Bitbucket</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '95%'}} />
				          </div>
				     </li>
			      	<li>
				        <span>Linux, Ubuntu, Debian</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '95%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>Windows Server</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '85%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>Continous CI, Travis CI</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '75%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>Containers, Docker, Heroku</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '60%'}} />
				          </div>
				     </li>
	      			<li>
				        <span>Cloud, AWS, Rackspace, Azure</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '60%'}} />
				          </div>
				     </li>
	      			<li>
				        <span>Orchestration, Kubernetes</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '10%'}} />
				          </div>
				     </li>
			      </ul>
			</div>

			<div className="skills-section">
			    <h3><i className="fa fa-code"></i>Languages</h3>
			    <ul>
			    	<li>
				        <span>PHP</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '90%'}} />
				          </div>
				     </li>
			      	<li>
				        <span>MySQL</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '85%'}} />
				          </div>
				     </li>
		      		<li>
				        <span>Bash</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '70%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>HTML5</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '85%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>CSS3</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '65%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>Python</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '60%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>Javascript</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '10%'}} />
				          </div>
				    </li>
			      	<li>
				        <span>GoLang</span>
				          <div className="skills-bar">
				            <div className="bar" style={{width: '5%'}} />
				          </div>
				    </li>
			      </ul>
			</div>

		    <div className="work">
		      <h3><FaBriefcase /> Work Experience</h3>
		      <ul>
		        <li><span>Third Line / Cloud Support Consultant</span><small>Feb 2018 - Now</small></li>
		        <li><span>Second Line Support Engineer</span><small>Nov 2015 - Jan 2018 (2 yrs 3 mos)</small></li>
		        <li><span>Support Engineer</span><small>May 2014 - Nov 2015 (1 yr 7 mos)</small></li>
		        <li><span>Support Technician</span><small>Sep 2013 - Apr 2014 (8 mos)</small></li>
		      </ul>
		    </div>


            <h2 className="content-subhead">Things I have achieved</h2>

            
           	<div className="awards">
	            <div className="pure-g">
	        		<div className="pure-u-1-6">
	        			<img src={ibm} alt="IBM Logo" />
	        		</div>
	        		<div className="pure-u-1-2">
	        			<h4>IBM Customer Engagement Specialist Professional Certificate</h4>
	        			<p> Issued Jun 2019  Credential: NKKUCAJDSRQU </p>
	        		</div>

		  	    </div>
 				<div className="pure-g">
	        		<div className="pure-u-1-6">
	        			<img src={ibm} alt="IBM Logo" />
	        		</div>
	        		<div className="pure-u-1-2">
	        			<h4>IBM Customer Engagement - Problem Solving and Process Controls</h4>
	        			<p> Issued Jun 2019  Credential: NKKUCAJDSRQU </p>
	        		</div>
		  	    </div>
	            <div className="pure-g">
	        		<div className="pure-u-1-6">
	        			<img src={aws} alt="AWS Logo" />
	        		</div>
	        		<div className="pure-u-1-2">
	        			<h4>AWS Fundamentals: Building Serverless Applications</h4>
	        			<p> Issued Oct 2019  Credential: K9RVP4R39PBF </p>
	        		</div>
		  	    </div>
	            <div className="pure-g">
	        		<div className="pure-u-1-6">
	        			<img src={aws} alt="AWS Logo" />
	        		</div>
	        		<div className="pure-u-1-2">
	        			<h4>AWS Fundamentals: Going Cloud Native</h4>
	        			<p> Issued Jun 2019  Credential: RKWENYMECQZL </p>
	        		</div>
		  	    </div>
   				<div className="pure-g">
	        		<div className="pure-u-1-6">
	        			<img src={microsoft} alt="Microsoft Logo" />
	        		</div>
	        		<div className="pure-u-1-2">
	        			<h4>MCPS: Microsoft Certified Professional</h4>
	        			<p> Issued Jul 2015 </p>
	        		</div>
		  	    </div>
	  	    </div>



        </div>
    </div>
  )
}
 
export default About;
