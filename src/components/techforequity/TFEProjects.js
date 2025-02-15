import React from 'react';
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap';

import Navigation from '../tools/Navigation';
import Footer from '../tools/Footer';

import ProjectCard from './ProjectCard';
import withWindowDimensions from '../people/withWindowDimensions';

import { getTFEProjects } from '../../api/api.js';

class TFEProjects extends React.Component {
  state = {
    projects: [],
    loadingProjects: true,
    loadingPeople: true,
    selectedKey: -1,
  };

  componentDidMount = async () => {
    // Load and update projects
    const projects = await getTFEProjects();
    console.log(projects);
    this.setState({ projects: projects, loadingProjects: false });
  };

  selectedCallback = (key) => {
    this.setState({ selectedKey: key === this.state.selectedKey ? -1 : key });
  };

  render() {
    let window = this.props.windowWidth;
    let padding,
      renderPeople = true;

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
      renderPeople = false;
    } else {
      // xs
      padding = 10;
      renderPeople = false;
    }
    renderPeople &= !this.state.loadingPeople;

    const projectCards = this.state.projects.map((project, key) => (
      <Col
        lg={
          4 +
          (key === this.state.selectedKey ||
          (key + 1 === this.state.selectedKey && key + (1 % 3)) === 2
            ? 4
            : 0)
          // This logic sucks but basically it handles overflow cases
        }
        md={6 + (key === this.state.selectedKey ? 6 : 0)}
        style={{ padding: '1rem' }}>
        <ProjectCard
          key={key}
          index={key}
          title={project.Organization}
          description={project.Project_Details}
          projTitle={project.Project_Title}
          fellows={project['Team Size']}
          position={project.Position}
          img={project.Picture}
          link={project.link}
          isFeatured={key === this.state.selectedKey}
          shortDesc={project.short_description}
          callback={this.selectedCallback}
        />
      </Col>
    ));

    return (
      <div>
        <Navigation />
        <Container fluid style={{ padding: 0 }}>
          <Container style={{ minHeight: '85vh', padding: `0 ${padding}%` }}>
            <center>
              <div className="title"> 2021 Projects </div>
              <br />
            </center>

            <Row
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              {this.state.loadingProjects ? (
                <div
                  style={{ height: '10rem', padding: '2rem', margin: 'auto' }}>
                  <Spinner animation="grow" size="md" />
                  <Spinner animation="grow" size="md" />
                  <Spinner animation="grow" size="md" />
                </div>
              ) : (
                projectCards
              )}
            </Row>
          </Container>

          <br />

          <Footer style={{ margin: '2rem 0 0 0' }} />
        </Container>
      </div>
    );
  }
}
export default withWindowDimensions(TFEProjects);
