import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";    



const StudentPage = () =>{
    const student = [
        {id : 1, srcode: "12345", name: "Anita job", program: "BSIT"},
        {id : 2, srcode: "67890", name: "John Doe", program: "BSCS"},
        {id : 3, srcode: "54321", name: "Jane Smith", program: "BSIT"},
    ]
    return(
        <>
        <HeaderContainer />
        <FormContainer />
        <ListContainer  data={student}/>
        </>
    )
}

export default StudentPage;