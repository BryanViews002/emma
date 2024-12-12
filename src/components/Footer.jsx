

const Footer = () => {

    const today = new Date();

  return (
    <footer>
        <p>This is the footer. Copyright, {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer