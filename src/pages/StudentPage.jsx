import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer"; 


import { useState } from "react";
const StudentPage = () =>{
    const [student, setStudent] = useState([]);
 

    const getData = async () =>{
        const response = await fetch('http://127.0.0.1:3000/students/');
        if(!response.ok){
            throw new Error('Unable to fetch data');
        }


        const data = await response.json();
        return data;
    }
    getData().then((result) =>{
        setStudent(result);
    }).catch((e) =>{
        console.log(e.message);
    })
    

    return(
        <>
        <HeaderContainer />
        <FormContainer />
        <ListContainer  data={student}/>
        </>
    )
}

export default StudentPage;