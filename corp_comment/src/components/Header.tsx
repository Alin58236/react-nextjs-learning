import Pattern from './Pattern'
import Logo from './Logo'
import PageHeading from './PageHeading'
import FeedbackForm from './FeedbackForm'

type THeaderProps = {
  handleAddToList: (text: string) => void;
};

const Header = ({handleAddToList}:THeaderProps) => {
  return (
    <header>

      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList}/>

    </header>
  )
}

export default Header