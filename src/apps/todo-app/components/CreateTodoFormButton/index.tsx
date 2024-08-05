import "./ui/styles.scss"
const CreateTodoFormButton = ({buttonTitle, func}) => {
  return (
    <button className="CreateTodoFormButton" onClick={func}>
        {buttonTitle}
    </button>
  )
}
export default CreateTodoFormButton