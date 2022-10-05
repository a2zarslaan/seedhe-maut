import {Group, FormInputLabel, Input} from './form-input.styles';

//spreading the rest of the props as they don't change here
const FormInput = ({label, ...otherProps}) => {
    return (
        <Group>
            <Input {...otherProps} />
            {/* ternary operator in class names to check if the user has typed anything. Shown only if label exists */}
            {label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput