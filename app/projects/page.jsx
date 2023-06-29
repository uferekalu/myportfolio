'use client';

import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Media from '@/utils/media';
import ProjectCardList from '@/components/ProjectCardList';
import Loading from './loading';

export default function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Search states
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchProjects = async () => {
    setLoading(true);
    const response = await fetch('/api/project');
    const data = await response.json();

    setAllProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filterProjects = (searchtext) => {
    const regex = new RegExp(searchtext, 'i'); // 'i' flag for case-insensitive search
    return allProjects.filter(
      (item) =>
        regex.test(item.name) ||
        regex.test(item.link) ||
        regex.test(item.github)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    //debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterProjects(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const { mobile, tabletAndDesktop } = Media();
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          border: '0.5px solid rgba(0, 0, 0, 0.04)',
          boxShadow:
            '0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04)',
          padding: '20px',
          marginTop: '20px',
          marginBottom: '20px',
          height: loading ? '100vh' : undefined,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0px auto',
          }}
        >
          <Form.Label
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'black',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            My Projects
          </Form.Label>
        </div>
        <input
          style={{
            display: 'flex',
            padding: '10px',
            width: mobile ? '50%' : '30%',
            borderRadius: '7px',
            border: '1px solid gray',
            fontSize: '14px',
            marginTop: '10px',
            height: '40px',
          }}
          type="text"
          placeholder="Search project by name"
          value={searchText}
          onChange={handleSearchChange}
          required
        />
        {loading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 'auto',
            }}
          >
            <Loading />
          </div>
        )}
        {/* All Projects */}
        {searchText ? (
          <ProjectCardList
            data={searchedResults}
            setAllProjects={setAllProjects}
          />
        ) : (
          <ProjectCardList data={allProjects} setAllProjects={setAllProjects} />
        )}
      </div>
    </>
  );
}
