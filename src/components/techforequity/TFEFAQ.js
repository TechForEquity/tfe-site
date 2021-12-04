import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import withWindowDimensions from '../people/withWindowDimensions';
import Logo from '../homepage/images/techforequity.png';

//Tech for Equity overall Website
class TFEFAQ extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);

    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }
  state = {};

  componentDidMount = async () => {
    // load animation?
    
  };

  render() {
    let window = this.props.windowWidth;
    let padding;

    // dynamically determine left and right padding around projects grid
    if (window >= 992) {
      // lg or xl
      padding = 5;
    } else if (window >= 768) {
      // m
      padding = 10;
    } else if (window >= 576) {
      // s
      padding = 10;
    } else {
      // xs
      padding = 10;
    }

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '85vh', padding: `0 ${padding}%` }}>
          <Container>
            <center className="title"> Organizations </center>
            <hr />
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
                fontSize: 17
              }}>
              <p>
              Fill out this <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEGE-a_-RXvQOzwMB08UJxdZ8QKKTdsz35vHIXVAucnoDcaQ/viewform"> non-binding form </a>, and a member of our committee will reach out to answer any questions you may have and discuss potential projects.{' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Do Tech for Equity fellows work in their own teams or do they work as individual interns for our organization?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> We have two models of fellowships: <br/><br />
Teams: If your organization has lesser capacity to supervise a tech intern, we will put together an independent team of 1-3 interns led by a student project manager. 
This team will work on creating an end-to-end project for your organization, and a supervisor from your end will communicate directly with our student project manager.
<br />
<br />
Interns: If your organization has the capacity and tech proficiency to directly supervise a tech intern, we will provide you with fellow(s) you can directly onboard and
 work through existing workflows in your organization.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: How are interns selected?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> We have a rolling student application and interview process. We will match you with a list of 4-5 interns with their resume, qualifications, and 
                passions as soon as mid-January for you to have the final say in choosing.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What kinds of projects can students work on?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Our fellows can work on teams of 1-4 on projects related to software engineering, data science, and policy research. You should expect the scope of the project to be such that 1-4 students can complete the project within a 10-week time frame.
<br/>
<br/>
Examples include: data visualization dashboards for trends in population/health/environmental data, an intelligent match-making tool for volunteers who want to connect with new opportunities, creation/management of databases, and data reports on healthcare access and rates of recidivism. 
 {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What qualifications do students have?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> All participants of the Tech for Equity Fellowship are Duke University undergraduate and graduate students studying computer science, mathematics, statistics, and/or engineering. Many students have industry experience working at companies like Google, Amazon, Microsoft, and IBM. 
                Students are experienced with independently setting and delivering goals. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What time commitment is expected from clients?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> As a project sponsor, you are expected to participate in weekly check-ins with the team working on your project. Project sponsors do not necessarily need technical capabilities. Rather, they need to be a representative from their organization with a solid idea of the final product that their 
                organizations want from our interns.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What can we expect upon completion of this program?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Fellows will work directly with problem sponsors to establish goals and a timeline for each project. Fellows will also be responsible for a set of deliverables to be presented on the last day of the program. This could include a full product (app, dashboard, etc.), research paper, and/or grant 
                application.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What is this program’s affiliation with Duke University?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> This program is being run through Duke University’s Applied Machine Learning Group and is backed by Duke Office of Durham and Community Affairs, Duke Law, Duke Computer Science Department, Pratt School of Engineering, and Duke Innovation & 
                Entrepreneurship.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Why should my organization participate?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Through conversations with different organizational leaders in the Durham area, we’ve come to realize that technical tools can be helpful to advocates and their organizational work. For instance, creating a relational database to organize and understand
                 donors can be helpful for grass-roots organizations looking to increase funding for their cause.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Will my organization have to pay to participate?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Community partners are encouraged to contribute a $3000 summer-long stipend for each full-time student working on their project. However, Duke has also provided limited amounts of funding to subsidize students working on unpaid projects. If this is difficult, 
                definitely contact us! We can try to organize some additional funding from Duke University to help cover some of the costs. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: How do fellows receive their payment?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> In order to minimize logistic difficulties, we ask you to directly pay the full-time fellows working on your projects $3000. This means writing a check/direct deposit to the fellows who work with you. If we’ve organized sponsorship from Duke, then some/all of the $3000 
                stipend will also be sent directly from the sponsor to the student. In other words, stipends will be sent directly from organizations (and sponsors, if applicable) to students. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What is Tech for Equity’s ethical stance on community engagement?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> We resist extractive forms of community engagement. By moving at the speed of trust and putting your organization’s needs first, we hope to foster sustained partnerships with the community long after this year.{' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: How do you find/choose your fellows?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Students through an application process to become a fellow. We have an early and regular application deadline. Each stage of the interview involves anti-bias discussions and training interviewers/application readers with DEI principles broadly practiced by other Duke Employers and fellowship admissions. 
 <br/><br/>
 Our selection process involves two stages: reviewing applications and conducting interviews. We have a team of 5 student leaders reviewing applications; each application is randomized and anonymized by an algorithm that we wrote for the initial application review to eliminate personal bias. If an application reader can identify the application they are reading, then they will switch reading the application with a different person on the selection committee. Each application is read by at least 2 application readers and given a score from 1-8 according to 3 selection criteria: program fit (passion for tech and social equity), technical skills, and teamwork skills. 
 <br/><br/>
 Two people on our selection committee provide 30-minute interviews for those applicants who scored a 6 or above. To choose the final list of fellows, we use the same selection criteria here, and we prioritize selecting students whose skills and interests best match the organizations’ projects and needs. 
 {' '}
              </p>
            </Row>
          </Container>
          <Container>
            <center className="title"> Students </center>
            <hr />
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
                fontSize: 17
              }}>
              <p>
              Fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSfe2TWRVU0S2knSE5uCn8j8SJlUWh0UORHAT6V3-Fd-oXBGfQ/viewform"> this application </a> by December 19 to be considered in the first round of admissions. 
              The deadline for the second round of admissions is January 16, and admissions are rolling thereafter.{' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Do I apply for the project or the program?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> You apply for the program in general. Once accepted, participants will receive a list of the program’s projects, 
                and you will be able to list your top choices of projects that you would like to work on. Placement is based on preference, 
                time zone, and skillset.{' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What does the application process look like?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> The application process will consist of two stages. The first is a basic application, linked above, where you'll submit 
                information about your work/project experience and interest in the program. The second stage consists of two interviews that we'll 
                use to get to know you and to gauge your technical expertise, program fit, and interests.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Is the application form binding?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> No. If you apply or interview with us, you do not have to join our program. However, once you officially accept your 
                project, you are expected to honor your commitment for the duration of the fellowship.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Do I need an advanced technical background?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Not exactly; we have policy research positions as well! If you are applying to a technical position, having comparable 
                experience to CS201 or STA210 would be great. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Are the start and end dates flexible?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> The program runs from Monday, May 24 to Friday, July 30th (10 weeks). These dates are not flexible. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Is the program remote?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Yes, the program will be remote with regular meetings, including team meetings, meetings with mentor groups, 
                pre-professional and technical workshops, and a speaker series. All participants will also have several virtual presentations 
                throughout the experience to demonstrate progress and the final outcome of their projects.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What is the time commitment?</b>
              </p>
              <br />
              <p>
                <b>A:</b> All positions are full-time at 40 hours a week.  {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Do I need to be in a certain time zone to participate?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Nope! We will work to ensure you and your team are in similar time zones.{' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What can I expect upon completion of this program?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> This program will be an invaluable experience as you leverage your tech knowledge to solve social, environmental, and human rights 
                issues. You will also have the opportunity to broaden your technical skill set, maintain an ongoing client relationship, and work with a team
                 to oversee a project from design to implementation. Additionally, you will continue to grow your personal network as you work with Duke students
                  and tech/policy leaders during the program. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: Will I be paid?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> Yes, we are currently working with our partner organizations and Duke University to provide all fellows with a stipend for their work. 
                However, a few part-time opportunities may be unfunded. {' '}
              </p>
            </Row>
            <Row
              className="vertical-align-outer"
              style={{
                fontFamily: 'Lora',
                display: 'flex',
                minHeight: '10vh',
                paddingTop: '3%',
              }}>
              <p>
                <b>Q: What is the admissions process?</b> 
              </p>
              <br />
              <p>
                <b>A:</b> We have an early and regular application deadline. Each stage of the interview involves anti-bias discussions and training interviewers/application 
                readers with DEI principles broadly practiced by other Duke Employers and fellowship admissions. <br/> <br />Our selection process involves two stages: reviewing applications 
                and conducting interviews. <br/><br /> We have a team of 5 student leaders reviewing applications; each application is randomized and anonymized by an algorithm (names are redacted) 
                that we wrote for the initial application review to eliminate personal bias. If an application reader can identify the application they are reading, then they will switch 
                reading the application with a different person on the selection committee. Each application is read by at least 2 application readers and given a score from 1-8 according to 
                3 selection criteria: program fit (passion for tech and social equity), technical skills, and teamwork skills. Two people on our selection committee provide 30-minute interviews 
                for those applicants who scored a 6 or above. To choose the final list of fellows, we use the same selection criteria here, and we prioritize selecting students whose skills and interests
                 best match the organizations’ projects and needs. {' '}
              </p>
            </Row>
          </Container>
          

          
            
          </Container>

          <br />

          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}
export default withWindowDimensions(TFEFAQ);
