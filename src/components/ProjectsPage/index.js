import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ScaleLoader } from 'react-spinners';

import ProjectCard from '../ProjectCard';
import ThemeContext from '../../context/ThemeContext';

import {
  Homepage,
  MainContainer,
  Box,
  SubBox,
  Dot,
  ProjectsContainer,
  Button,
  Title,
  Loader,
} from './style.js';

// Constants for tracking API response states
const apiStatusConstants = {
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "IN_PROGRESS",
  initial: "INITIAL"
};

const ProjectsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const apiUrl = `https://portfoliobackend-l8ac.onrender.com${location.pathname}${location.search}`;

  const [projects, setProjects] = useState([]);
  const [apiResponse, setApiResponse] = useState({
    status: null,
    data: null,
    errorMsg: null
  });

  // Fetch project data when the component mounts or URL changes
  useEffect(() => {
    const getProjects = async () => {
      setApiResponse(prev => ({ ...prev, status: apiStatusConstants.loading }));
      
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
  }, [apiUrl]);

  // Handle back button click
  const onClickBack = () => {
    navigate('/');
  };

  // Render fallback UI on fetch failure
  const renderFailureView = () => (
    <h1 style={{ color: 'red' }}>Unable to load projects.</h1>
  );

  // Render loader while fetching
  const renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => (
        <Loader>
          <ScaleLoader
            color={value.theme === 'light' ? '#5423a8' : '#FFFFFF'}
            width={10}
            height={60}
            speedMultiplier={2}
            barCount={5}
          />
        </Loader>
      )}
    </ThemeContext.Consumer>
  );

  // Render list of project cards
  const renderSuccessView = () => (
    <ProjectsContainer>
      {projects.map(project => (
        <ProjectCard key={project.id} details={project} />
      ))}
    </ProjectsContainer>
  );

  // Determine which UI to show based on API status
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
    <ThemeContext.Consumer>
      {value => (
        <Homepage theme={value.theme}>
          <MainContainer>
            <Title>Projects</Title>
            {renderProjects()}
            <Button onClick={onClickBack}>Back</Button>
          </MainContainer>

          {/* Decorative dots grid */}
          <Box>
            {Array.from({ length: 10 }).map((_, idx) => (
              <SubBox key={idx}><Dot /></SubBox>
            ))}
          </Box>
        </Homepage>
      )}
    </ThemeContext.Consumer>
  );
};

export default ProjectsPage;
