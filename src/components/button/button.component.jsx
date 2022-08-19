import './button.styles.scss'

// 3 types of buttons - default, inverted, google sign in
const BUTTON_TYPE_CLASSES = {
    google:'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return(
        // otherProps here represents things like button type
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>{children}</button>
    )
}

export default Button;