import './style.css';
import { ErrorMessage, useField } from 'formik';
export default function LoginInput({ placeholder, type, bottom, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <div className='input_wrap'>
      {meta.touched && meta.error && !bottom && (
        <div className='input_error'>
          <ErrorMessage name={field.name} />
          <div className='error_arrow_top'></div>
        </div>
      )}

      <input
        className={meta.touched && meta.error ? 'input_error_border' : ''}
        placeholder={placeholder}
        type={type}
        {...field}
        {...props}
      />
      {meta && meta.touched && meta.error && (
        <i className='error_icon' style={!bottom ? { top: '67%' } : {}}></i>
      )}
      {meta.touched && meta.error && bottom && (
        <div className='input_error'>
          <div className='error_arrow_bottom'></div>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
