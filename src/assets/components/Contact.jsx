import { Icons } from './icons'
import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="items">
          <Icons.mail />
          <h4>vincentrobert132@gmail.com</h4>
          <Link to="https://github.com/FruitNinja69" target="_blank">
            <Icons.githubIcon />
          </Link>
        </div>
      </div>
    </>
  )
}
export default Contact
