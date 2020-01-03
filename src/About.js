import React from "react"
import { FaCloud, FaCode, FaHeadset, FaGuitar, FaPlane, FaUserNinja } from 'react-icons/fa';
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
              Hello Stanger,<br></br>
              Thanks for visiting my site, my name is James Wilson, I am from Bath in the United Kingdom, currently living just outside of Bath, I absolutley love new cutting edge technologies
              I have been deeply interested in the Cloud and server infrastructure since I was around 14 years old, I've managed to pursue this in my adulthood as a versatile Cloud Support & Dev Ops engineer
              which I have been in this sector for almost 7 years now.


            </p>
            <p>
              I have experience in leading technologies like MySQL, PHP, Ubuntu, Windows Servers, Apache2 and IIS, PHP-FPM, SoapAPI’s, AWS, Rackspace, Github and much more.
            </p>

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
	        			<p> Issued Jul 2015  Credential: RKWENYMECQZL </p>
	        		</div>
		  	    </div>
	  	    </div>



        </div>
    </div>
  )
}
 
export default About;
