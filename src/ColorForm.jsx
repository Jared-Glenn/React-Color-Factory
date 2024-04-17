import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function ColorForm({ addColor }) {

    const [ formData, setFormData ] = useState({ color: "Black", code: "#000000" });
    const navigate = useNavigate();


    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    const handleSubmit = evt => {
        evt.preventDefault();

        addColor( formData )
        navigate("/colors")

    }

  return (
    <>
        <h2>Add a New Color</h2>
        <form onSubmit={ handleSubmit }>
            <label htmlFor="color-name">Color Name</label>
            <input type="text" id="color-name" name="color" placeholder="Color" value={ formData.color } onChange={ handleChange } />
            <label htmlFor="color-code">Color Code</label>
            <input type="color" id="color-code" name="code" placeholder="#000000" value={ formData.code } onChange={ handleChange } />
            <button>Add Color</button>
        </form>
    </>
  );
}


export default ColorForm;





// import React, { useState } from "react";

// const MadForm = ({ partsOfSpeech, addResponse }) => {
//     // Store the form data in state.
//     const [ formData, setFormData ] = useState({});
    
//     // Store each change in state in real time.
//     const handleChange = evt => {
//         const { name, value } = evt.target;
//         setFormData(fData => ({
//             ...fData,
//             [name]: value
//         }));
//     }

//     // Submission function.
//     const handleSubmit = evt => {
//         evt.preventDefault();

//         // Check that all fields are filled in.
//         const allFieldsFilled = partsOfSpeech.every(part =>
//             formData[part] && formData[part].trim() !== ''
//             );

//         // If one or more fields are missing, do not make changes and alert the user.
//         if (!allFieldsFilled) {
//             alert("Please fill out the entire form to see your story.");
//             return;
//         }

//         // Add a response at the proper index in the response value array.
//         partsOfSpeech.forEach((part, index) => {
//             if(formData[part]) {
//                 addResponse(index, formData[part]);
//             }
//         });
//     }

//     // Create a form that will map each part of speech to its own input.
//     return (
//         <form onSubmit={handleSubmit}>
//             {partsOfSpeech.map((part, index) => (
//                 <div key={index}>
//                 <input
//                     id={part}
//                     name={part}
//                     type="text"
//                     placeholder={part}
//                     value={formData[part] || ''}
//                     onChange={handleChange}
//                 />
//                 <br />
//                 </div>
//             ))}
//             <button>Fill In!</button>
//         </form>
//     )
// }

// export default MadForm;