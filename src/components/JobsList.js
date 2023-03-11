import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../features/job/jobSlice';
import JobItem from './JobItem';

export default function JobsList() {
  const { jobs, isLoading, isError, error } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <div>Loading...</div>;
  if (!isLoading && isError) content = <div>{error}</div>;
  if (!isLoading && !isError && jobs?.length === 0)
    content = <div>No job was found!</div>;
  if (!isLoading && !isError && jobs?.length > 0)
    content = jobs.map((job) => <JobItem key={job.id} job={job} />);

  return <div className="jobs-list">{content}</div>;
}
