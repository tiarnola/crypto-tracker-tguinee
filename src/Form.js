import React from 'react';
const Form = props => {
    const [gender, setGender] = React.useState();
    const handleChange = e => {
      const target = e.target;
      if (target.checked) {
        setGender(target.value);
      }
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(gender);
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="radio" value="male" checked={gender === 'male'} 
                   onChange={handleChange} />
            <span>Male</span>
          </label>
          <label>
            <input type="radio" value="female" checked={gender === 'female'} 
                   onChange={handleChange} />
            <span>Female</span>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  const root = document.querySelector('#root');
//  ReactDOM.render(<Form />, root );
  export default Form;