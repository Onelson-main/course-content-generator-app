import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/images/SmarterU.svg"
import { Course_type } from "../core/types";
import { useEffect } from "react";

export default function Results() {
    let navigate = useNavigate();
    const course = useLocation().state.course as Course_type;

    // if no course is in memory, navigate to the home page
    useEffect(() => {
        if (!course) {
            navigate('')
        }
    }, [course])

    return (
        <div className="bg-ACCENT flex flex-col flex-1 h-full main">
            <div id="navbar">
                <img src={logo} alt="smarterU logo" />
                <button>JOIN NOW</button>
            </div>

            <div className="bg-ACCENT text-BACKGROUND_2 padded-x top-pad">
                <div className="inner">
                    <h1>{course.title}</h1>
                    {/* <p>{JSON.stringify(course)}</p> */}
                    <p>{course.overview}</p>
                    <button className="ml-auto inverted">ENROLL</button>
                    <div className="course-detail">
                        <div>
                            <p>Duration</p>
                            <b>{course.duration} weeks</b>
                        </div>
                        <div>
                            <p>Modules</p>
                            <b>{course.modules?.length} modules</b>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-BACKGROUND_2 padded-x flex-1 pt-20 pb-5">
                <h4>About Course</h4>
                <p>{course.overview}</p>
                <br />
                <h4>Modules</h4>
                {course.modules?.map((module, index) => {
                    return (
                        <>
                            <span><b>Module {index + 1}: </b>{module.title}</span>
                            <ul>
                                {module.topics?.map((topic) => (
                                    <li>· {topic}</li>
                                ))}
                                <li>· Steps</li>
                            </ul>
                            <br />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

// todo: use typing text