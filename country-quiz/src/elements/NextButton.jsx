export default function NextButton (props) {

    const handleClick = () => {
        props.handleClick()
    }

    return (
        <div onClick={handleClick} className="button button--next">
            Next
        </div>
    )
}