import './style.css';
import { ErrorMessage, useField } from 'formik';
import { useMediaQuery } from 'react-responsive';
export default function LoginInput({ placeholder, type, bottom, ...props }) {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({
    query: '(min-width: 950px)',
  });
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
        <i
          className='error_icon'
          style={!bottom && !desktopView ? { top: '67%' } : {}}
        ></i>
      )}
      {meta.touched && meta.error && bottom && (
        <div className='input_error'>
          <div
            className={desktopView ? 'error_arrow_top' : 'error_arrow_bottom'}
          ></div>
          <ErrorMessage name={field.name} />
        </div>
      )}
    </div>
  );
}
