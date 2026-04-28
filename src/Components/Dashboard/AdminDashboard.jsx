import AllTask from "../others/AllTask";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header"

const AdminDashborad =()=>{
    return(
        <div className="h-screen w-full p-15">
            <Header></Header>

        <CreateTask></CreateTask>
        <AllTask></AllTask>
        </div>
    )
}
export default AdminDashborad;