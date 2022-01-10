import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get, ref } from 'firebase/database';

import './resume.style.css';
import { firebaseDatabase } from '../../backend/firebase-handler';
import { BsFillPersonFill,  } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillCalendar } from 'react-icons/ai';

const Resume = () => {
    const params = useParams();
    const [studentData, setStudentData] = useState({});
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const { brachId, studentId } = params;
        const studentRef = ref(firebaseDatabase, `STUDENTS_ARCHIVE/${brachId}/${studentId}`);
        get(studentRef).then(snapshot => {
            if (snapshot.exists()){
                const data = snapshot.val();
                setStudentData(data);
                setLoading(false);
            }
        })
    }, [])

    console.log(studentData);

    if (loading){
        return <h1>Hold up!</h1>
    }
    

    return(
        <div className='resume-container'>
            <div className='contact-container'>
                <img className='picture' src={studentData.picture} onLoad={_ => setImageLoaded(true)}  />
                {
                    imageLoaded
                    ?
                    <div className='loaded' />
                    :
                    null
                }
                <div className='side-details-container'>
                    <p className='side-details-title' style={{ marginTop:"30px" }} >Contact</p>
                    <div className='side-details-value'>
                        <p>{studentData.phoneNumber}</p>
                        <p>{studentData.emailId}</p>
                        <p>{studentData.linkedInUrl}</p>
                        <p>{studentData.address}</p>
                    </div>
                </div>  

                <div className='side-details-container' style={{marginTop:"30px"}}>
                    <p className='side-details-title'>Education</p>
                    <div className='side-details-value' style={{ marginTop:"10px" }} >
                        <p style={{fontWeight:'bold'}}>10th Education</p>
                        <p>{studentData.tenthSchool}</p>
                        <p>{studentData.tenthBoard}</p>
                        <p>{studentData.tenthPercentage} %</p>
                    </div>
                    <hr className='horizontal-rule' />

                    <div className='side-details-value' style={{ marginTop:"10px" }}  >
                        <p style={{fontWeight:'bold'}}>12th Education</p>
                        <p>{studentData.twelthSchool}</p>
                        <p>{studentData.twelthBoard}</p>
                        <p>{studentData.twelthPercentage} %</p>
                    </div>
                    <hr className='horizontal-rule' />

                    <div className='side-details-value' style={{ marginTop:"10px" }} >
                        <p style={{fontWeight:'bold'}}>College Education</p>
                        <p>{studentData.collegeName}</p>
                        <p>{studentData.department}</p>
                        <p>CGPA: {studentData.cgpa}</p>
                    </div>
                    {/* <hr className='horizontal-rule' /> */}
                    
                </div>
                <div className='side-details-container' style={{marginTop:"30px"}}>
                    <p className='side-details-title'>Skills</p>
                    <div className='side-details-value'>
                        <p>{studentData.prevalentTechnologies}</p>
                    </div>
                </div> 
   
            </div>

            
            <div className='resume-content-container'>
                <div style={{ marginTop:'20px' }} >
                    <h1>{studentData.name}</h1>
                    <p>{studentData.dateOfBirth}</p>
                </div>

                <div className='details-container'>
                    <h2>Project Details</h2>
                    <div className='details-list'>
                        {
                            studentData.projectDetails.map(item => {
                                return (
                                    <div className='project-details-container'>
                                        <h4>{item.name}</h4>
                                        <p style={{marginTop:"10px"}} >{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='details-container' style={{marginTop:"50px"}}>
                    <h2>Internships</h2>
                    <div className='details-list'>
                        {
                            studentData.internshipDetails.map(item => {
                                return (
                                    <div className='project-details-container'>
                                        <h4>{item.compName}</h4>
                                        <p style={{marginTop:"10px"}} >{item.description}</p>
                                        <div className='project-info'>
                                            <div style={{display:'flex', alignItems:'center'}}>
                                                <BsFillPersonFill size={16} color='#444' style={{marginRight:'5px'}} />
                                                <p>{item.role}</p>
                                            </div>

                                            <div style={{display:'flex', alignItems:'center'}}>
                                                <BiTimeFive size={16} color='#444' style={{marginRight:'5px'}} />
                                                <p>{item.duration}</p>
                                            </div>

                                            <div style={{display:'flex', alignItems:'center'}}>
                                                <AiFillCalendar size={16} color='#444' style={{marginRight:'5px'}} />
                                                <p>{item.date}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='details-container' style={{marginTop:"50px"}}>
                    <h2>Certificates</h2>
                    <div className='details-list'>
                        {
                            studentData.certificationDetails.map(item => {
                                return (
                                    <div className='project-details-container'>
                                        <h4>{item.agency}</h4>
                                        <p style={{marginTop:"10px"}} >{item.name}</p>
                                        <div style={{display:'flex', alignItems:'center', marginTop:'5px'}}>
                                            <AiFillCalendar size={16} color='#444' style={{marginRight:'5px'}} />
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='details-container' style={{marginTop:"50px"}}>
                    <h2>Research Papers</h2>
                    <div className='details-list'>
                        {
                            studentData.researchPapers.map(item => {
                                return (
                                    <div className='project-details-container'>
                                        <h4>{item.agency} - {item.title}</h4>
                                        <p style={{marginTop:"10px"}} >{item.description}</p>
                                        <div style={{display:'flex', alignItems:'center', marginTop:'5px'}}>
                                            <AiFillCalendar size={16} color='#444' style={{marginRight:'5px'}} />
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='details-container' style={{marginTop:"50px"}}>
                    <h2>Awards & Achievements</h2>
                    <div className='details-list'>
                        {
                            studentData.awards.map(item => {
                                return (
                                    <div className='project-details-container'>
                                        <h4>{item.name}</h4>
                                        <p style={{marginTop:"10px"}} >{item.description}</p>
                                        <div style={{display:'flex', alignItems:'center', marginTop:'5px'}}>
                                            <AiFillCalendar size={16} color='#444' style={{marginRight:'5px'}} />
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className='details-container' style={{marginTop:"50px"}}>
                    <h2>Additional Details</h2>
                    <div className='details-list'>
                        {
                            studentData.additionalDetails.map(item => {
                                return (
                                    <div className='project-details-container'>
                                        <h4>{item.name}</h4>
                                        <p style={{marginTop:"10px"}} >{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;