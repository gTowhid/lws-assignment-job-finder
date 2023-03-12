import { useState, /* useEffect */ } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { changeJob, /* fetchJobs */ } from "../features/job/jobSlice";

export default function EditJob() {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  /* useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]); */
  
  const { jobs } = useSelector(state => state.job);

  const editJobArray = jobs?.filter(job => job.id === parseInt(param?.jobId));
  const jobToEdit = editJobArray.length > 0 ? editJobArray[0] : {};

  const { deadline, id, salary, title, type } = jobToEdit;

  const [newTitle, setNewTitle] = useState(title);
  const [newType, setNewType] = useState(type);
  const [newSalary, setNewSalary] = useState(salary);
  const [newDeadline, setNewDeadline] = useState(deadline);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeJob({
      id,
      data: {
        title: newTitle,
        type: newType,
        salary: newSalary,
        deadline: newDeadline
      }
    }));
    
    navigate('/');
  };
    

  return <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
  <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

  <div className="max-w-3xl mx-auto">
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="fieldContainer">
        <label className="text-sm font-medium text-slate-300">
          Job Title
        </label>
        <select id="lws-JobTitle" name="lwsJobTitle" required value={newTitle} onChange={(e) => setNewTitle(e.target.value)}>
          <option>
            Select Job
          </option>
          <option>Software Engineer</option>
          <option>Software Developer</option>
          <option>Full Stack Developer</option>
          <option>MERN Stack Developer</option>
          <option>DevOps Engineer</option>
          <option >QA Engineer</option>
          <option>Product Manager</option>
          <option>Social Media Manager</option>
          <option>Senior Executive</option>
          <option>Junior Executive</option>
          <option>Android App Developer</option>
          <option>IOS App Developer</option>
          <option>Frontend Developer</option>
          <option>Frontend Engineer</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label>Job Type</label>
        <select id="lws-JobType" name="lwsJobType" required value={newType} onChange={(e) => setNewType(e.target.value)}>
          <option value="" hidden>
            Select Job Type
          </option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <div className="fieldContainer">
        <label>Salary</label>
        <div className="flex border rounded-md shadow-sm border-slate-600">
          <span className="input-tag">BDT</span>
          <input
            type="number"
            name="lwsJobSalary"
            id="lws-JobSalary"
            required
            value={newSalary} onChange={(e) => setNewSalary(e.target.value)}
            className="!rounded-l-none !border-0"
            placeholder="20,00,000"
          />
        </div>
      </div>

      <div className="fieldContainer">
        <label>Deadline</label>
        <input
          type="date"
          name="lwsJobDeadline"
          id="lws-JobDeadline"
          value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)}
          required
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          id="lws-submit"
          className="cursor-pointer btn btn-primary w-fit"
        >
          Edit
        </button>
      </div>
    </form>
  </div>
</main>
}
