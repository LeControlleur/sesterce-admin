import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id:1,
       title : "Bots",
       value : 1,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">1</span> Building' 
    },
    {
        id:2,
        title : "Active assets",
        value : 132,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "Actions",
        value : 12,
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "Precision",
        value : '76%',
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">198</span> actions' 
     }
];
export default ProjectsStats;
