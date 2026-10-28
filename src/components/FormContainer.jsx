const FormContainer = () => {
    return (
        <><section id = "formContainer">
        <form id="studentForm">

            <div className = "input-field">
                <label for="name">Student Name:</label>
                <input type="text" name="name" id="name"/>           
            </div>

            <div className="input-field">
                <label htmlFor="program">Program:</label>
                <input type="text" name="program" id="program"/>
            </div>

            <div>
                <button>Add Student</button>
            </div>
        </form>
 
    </section></>
    )
}

export default FormContainer