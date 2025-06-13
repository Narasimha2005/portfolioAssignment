import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ScaleLoader, BeatLoader } from "react-spinners";
import ProjectCard from '../ProjectCard';
import ThemeContext from '../../context/ThemeContext';

import {
  Heading,
  MainContainer,
  Button,
  ProjectsContainer,
  CategoryBar,
  EachCategory,
  HighlightBar,
  Title,
  SubTitle,
  Loader,
  NoProjectsContainer,
} from './style.js';

// Constants for API call status
const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "IN_PROGRESS",
  initial: "INITIAL"
};

// Available project categories
const categories = ['React', 'HTML & CSS', 'JS', 'AI', 'CYBERSECURITY'];

const Projects = (props) => {
  const navigate = useNavigate();

  const [apiResponse, setApiResponse] = useState({
    status: null,
    data: null,
    errorMsg: null
  });

  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const categoryRefs = useRef([]);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  // Adjust category highlight bar on active tab change
  useEffect(() => {
    const activeEl = categoryRefs.current[activeIndex];
    if (activeEl) {
      setHighlightStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth
      });
    }
  }, [activeIndex]);

  // Fetch project data on category change
  useEffect(() => {
    const getProjects = async () => {
      setApiResponse(prev => ({ ...prev, status: apiStatusConstants.loading }));
      const category = encodeURIComponent(categories[activeIndex]);
      const apiUrl = `https://portfoliobackend-l8ac.onrender.com/projects?CATEGORY=${category}`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
          setApiResponse({ status: apiStatusConstants.success, data, errorMsg: null });
          setProjects(data);
        } else {
          setApiResponse({ status: apiStatusConstants.failure, data: null, errorMsg: data.error_msg });
        }
      } catch (error) {
        setApiResponse({ status: apiStatusConstants.failure, data: null, errorMsg: error.message });
      }
    };

    getProjects();
  }, [activeIndex]);

  // Navigate to full project page by category
  const onClickViewMore = () => {
    const category = encodeURIComponent(categories[activeIndex]);
    navigate(`/projects?CATEGORY=${category}`);
  };

  // Render failure UI
  const renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => (
        <h1 style={{ color: value.theme === 'light' ? '#5423a8' : '#FFFFFF' }}>
          Something went wrong
        </h1>
      )}
    </ThemeContext.Consumer>
  );

  // Render loader while fetching
  const renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => (
        <Loader>
          <ScaleLoader
            color={value.theme === 'light' ? '#5423a8' : '#FFFFFF'}
            width={10}
            height={40}
            speedMultiplier={2}
            barCount={4}
          />
        </Loader>
      )}
    </ThemeContext.Consumer>
  );

  // Render fetched projects or "Coming Soon" placeholder
  const renderSuccessView = () => {
    const filteredProjects = projects.length > 6 ? projects.slice(0, 6) : projects;

    if (filteredProjects.length === 0) {
      return (
        <ThemeContext.Consumer>
          {value => (
            <NoProjectsContainer>
              <Heading theme={value.theme}>Projects Coming Soon</Heading>
              <BeatLoader
                color={value.theme === 'light' ? '#5423a8' : '#FFFFFF'}
                width={10}
                height={40}
              />
            </NoProjectsContainer>
          )}
        </ThemeContext.Consumer>
      );
    }

    return (
      <>
        <ProjectsContainer>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} details={project} />
          ))}
        </ProjectsContainer>
        <Button onClick={onClickViewMore}>View More</Button>
      </>
    );
  };

  // Render view based on API status
  const renderProjects = () => {
    switch (apiResponse.status) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.loading:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return (
    <MainContainer>
      <Title>Projects</Title>
      <SubTitle>
        We turn your ideas and ambitions into unique digital experiences that inspire your audience.
      </SubTitle>

      <CategoryBar>
        <HighlightBar left={highlightStyle.left} width={highlightStyle.width} />
        {categories.map((cat, idx) => (
          <EachCategory
            key={cat}
            active={idx === activeIndex}
            ref={el => (categoryRefs.current[idx] = el)}
            onClick={() => setActiveIndex(idx)}
          >
            {cat}
          </EachCategory>
        ))}
      </CategoryBar>

      {renderProjects()}
    </MainContainer>
  );
};

export default Projects;
