import './form-input.styles.scss';

//spreading the rest of the props as they don't change here
const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input className='form-input' {...otherProps} />
            {/* ternary operator in class names to check if the user has typed anything. Shown only if label exists */}
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    )
}

export default FormInput