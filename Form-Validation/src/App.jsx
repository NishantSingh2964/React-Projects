import './App.css'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const password = watch("password");

  async function onSubmit(data) {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(data);
    toast.success('Form submitted successfully!');
    reset(); 
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-card">
        <h2 className="form-title">Registration Form</h2>
        <ToastContainer />

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className={errors.firstname ? 'input-err' : ""}
            {...register('firstname', {
              required: "First name is required",
              minLength: { value: 3, message: "Name length should be at least three" }
            })}
          />
          {errors.firstname && <p className='error-msg'>{errors.firstname.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="middlename">Middle Name</label>
          <input
            type="text"
            className={errors.middlename ? 'input-err' : ""}
            {...register('middlename', {
              required: "Middle name is required",
              minLength: { value: 3, message: "Middle name should be at least 3 characters" },
              maxLength: { value: 6, message: "Middle name should not exceed 6 characters" }
            })}
          />
          {errors.middlename && <p className='error-msg'>{errors.middlename.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className={errors.lastname ? 'input-err' : ""}
            {...register('lastname', {
              required: "Last name is required",
              pattern: { value: /^[A-Za-z]+$/, message: "Invalid pattern for last name" }
            })}
          />
          {errors.lastname && <p className='error-msg'>{errors.lastname.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className={errors.email ? 'input-err' : ""}
            {...register('email', {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
            })}
          />
          {errors.email && <p className='error-msg'>{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            className={errors.phone ? 'input-err' : ""}
            {...register('phone', {
              required: "Phone is required",
              pattern: { value: /^[0-9]{10}$/, message: "Phone must be 10 digits" }
            })}
          />
          {errors.phone && <p className='error-msg'>{errors.phone.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className={errors.password ? 'input-err' : ""}
            {...register('password', {
              required: "Password is required",
              minLength: { value: 6, message: "Password should be at least 6 characters" }
            })}
          />
          {errors.password && <p className='error-msg'>{errors.password.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className={errors.confirmPassword ? 'input-err' : ""}
            {...register('confirmPassword', {
              required: "Please confirm password",
              validate: (value) => value === password || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <p className='error-msg'>{errors.confirmPassword.message}</p>}
        </div>
        
        <button type="submit" className="btn-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default App;

