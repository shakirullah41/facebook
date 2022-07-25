import './style.css';
import { useField } from 'formik';
export default function LoginInput({ placeholder, type, ...props }) {
  const { fields, meta } = useField(props);
  return (
    <div className='input_wrap'>
      <input type={type} placeholder={placeholder} {...fields} {...props} />
    </div>
  );
}
