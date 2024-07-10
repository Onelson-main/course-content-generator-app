import { useNavigate } from "react-router-dom";
import logo from "../assets/images/SmarterU.svg"
import { colors } from "../core/style"
import { useEffect, useState } from "react";
import { getCourseByID, getCourseByName, getCourses } from "../services/course_service";
import { toast } from "react-toastify";

export default function Home() {
    let navigate = useNavigate();
    let [searchKey, setSearchKey] = useState("")
    let [loading, setLoading] = useState(false);
    let [courses, setCourses] = useState([])

    const search = async (id?: number) => {
        if (searchKey.length == 0) {
            toast("Please enter a course name",)
            return false
        }
        setLoading(true)
        let res
        if (id) {
            res = await getCourseByID(id)
        } else {
            res = await getCourseByName(searchKey)
        }

        if (res.status) {
            navigate("search-result", { state: { course: res.data } })
        } else {
            toast("Something went wrong, please try again later")
        }
        setLoading(false);
    }

    const setup = async () => {
        let res = await getCourses()
        setCourses(res);
    }

    useEffect(() => {
        setup()
    }, []);
    let suggestions = courses?.filter((sug: { title: string }) => sug.title.toLowerCase().includes(searchKey.toLowerCase()))
    return (
        <div className="bg-ACCENT flex flex-col flex-1 h-full">
            <div id="navbar">
                <img src={logo} alt="smarterU logo" />
                <button>JOIN NOW</button>
            </div>

            <div className="flex flex-1 flex-col justify-center items-stretch pb-20 padded-x">
                <div className="flex flex-col justify-center items-stretch">
                    <h1 className="text-center text-BACKGROUND_2">Find a Course</h1>
                    <div className="flex mt-5 bg-BACKGROUND_2 rounded-md items-center pr-2">
                        <input id="main_input" type="text"
                            value={searchKey} placeholder="Enter course name"
                            onChange={(ev) => setSearchKey(ev.target.value)}
                            className="flex-1 px-5"
                        />
                        <ion-icon name="search-outline"
                            onClick={() => search()}
                            style={{ color: colors.ACCENT, fontSize: 40 }} />
                    </div>
                </div>
                {suggestions?.length > 0 && searchKey
                    ? <div className="bg-BACKGROUND_2 max-h-52 round mt-4 flex flex-col gap-5 p-4 overflow-scroll">
                        {suggestions?.map((suggestion: { id: number, title: string }) => (
                            <>
                                <div className="flex items-center gap-2" onClick={() => {
                                    setSearchKey(suggestion.title);
                                    search(suggestion.id)
                                }}>
                                    <ion-icon name="book"
                                        onClick={() => search()}
                                        style={{ color: colors.ACCENT, fontSize: 40 }} />
                                    <p>{suggestion.title}</p>
                                </div>

                            </>
                        ))}
                    </div>
                    : null
                }
            </div>
            {loading ? <div className="loading">
                <div className="loader"></div>
            </div> : null}
        </div>
    )
}

// todo: use typing text