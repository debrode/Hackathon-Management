import {v4 as uuidv4} from "uuid";
let uuidArray=[uuidv4(),uuidv4(),uuidv4(),uuidv4()];
let initialFeeds={
     
    [uuidArray[0]] : 
    { 
        
        header: "Covid Tracker",
        project_manager: "Tanay Pratap",
        id: uuidArray[0],
        creationDate: "5/5/21",
        startTime: "10:00 a.m.",
        endTime: "2:00 p.m",
        location: "Bangalore",
        participants: "500",
        status: "ended"


    },
    [uuidArray[1]] :
    {
      header: "Smart india Hackathon",
      project_manager: "Naren Godi",
      id: uuidArray[1],
      creationDate: "10/5/21",
      startTime: "10:00 a.m.",
      endTime: "2:00 p.m",
      location: "Bangalore",
      participants: "2000",
      status: "Upcoming"
    },
    [uuidArray[2]] :
    {
      header: "Google developer Hackathon",
      project_manager: "Sundar Pichai",
      id: uuidArray[2],
      creationDate: "8/5/21",
      startTime: "10:00 a.m.",
      endTime: "2:00 p.m",
      location: "Kolkata",
      participants: "1000",
      status: "upcoming"
    },
    [uuidArray[3]] :
    {
      header: "Feminism",
      project_manager: "Feminist Priya",
      id: uuidArray[3],
      creationDate: "11/5/21",
      startTime: "10:00 a.m.",
      endTime: "2:00 p.m",
      location: "Delhi",
      participants: "500",
      status: "ended"
    }  
    

};
//header,project_manager,id,creationDate,startTime,endTime,location,participants,status,feedItems)
function feedItemGenerate(feedItems = {}, ...rest){
    
   
    // let obj= Object.keys(feedItems).length === 0 ? initialFeeds : feedItems; 
    if(rest?.length === 0) return initialFeeds;
   
    return{
        ...feedItems,
        [rest[2]]:{
        header: rest[0],
        project_manager: rest[1] ,
        id: rest[2],
        creationDate: rest[3],
        startTime:rest[4],
        endTime:rest[5],
        location:rest[6],
        participants:rest[7],
        status:rest[8]
        }

    }


    
}
export default feedItemGenerate;