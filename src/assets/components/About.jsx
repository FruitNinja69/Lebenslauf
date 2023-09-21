import './components.css'
import { Icons } from './icons'
import { Link } from 'react-router-dom'
import logo from '../../photos/logo.png'

export function About() {
  return (
    <>
      <div id="about" className="about">
        <img className="about-img" src={logo} alt="Logo" />
        <div className="about-text">
          <div className="personal-text">
            Als Informatiker tauche ich täglich in die faszinierende Welt der
            Technologie ein. Für mich ist Code die Sprache, mit der ich meine
            kreativen Ideen in die Realität umsetze. Bereits in jungen Jahren
            habe ich mich gefragt, wie man eine Webseite programmiert. Jetzt bin
            ich in der Lage, dies selbstständig umzusetzen.
          </div>
          <div className="meta-informations">
            <ul className="personal-information">
              <li>
                <h3>Name</h3>
                <p> Thikalvannan Vincent Robert</p>
              </li>
              <li>
                <h3>Email</h3>
                <p>vincentrobert132@gmail.com</p>
              </li>
            </ul>
            <ul className="school-information">
              <li>
                <h3>Education</h3>
                <p> Ims </p>
              </li>
              <li>
                <h3>Nationalität</h3>
                <p>Sri Lanka</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="icon-grid">
          <Link
            to="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
            target="_blank"
            className="tool-icon"
          >
            <Icons.javascript />
          </Link>
          <Link
            to="https://aws.amazon.com/what-is-aws/?nc2=h_ql_le_int"
            target="_blank"
            className="tool-icon"
          >
            <Icons.aws />
          </Link>
          <Link
            to="https://www.mongodb.com/cloud/atlas/lp/try4?utm_content=controlhterms&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core_prosp-brand_gic-null_emea-ch_ps-all_desktop_eng_lead&utm_term=mongodb%20database&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624569&adgroup=115749721183&cq_cmp=12212624569&gad=1&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw3YUTaNwN4ZKpzbh37CydniTVFe66iorlQuZsdjdvALMzlekGmz7t8aAoywEALw_wcB"
            target="_blank"
            className="tool-icon"
          >
            <Icons.mongoDb />
          </Link>
          <Link
            to="https://www.w3schools.com/html/html_intro.asp"
            target="_blank"
            className="tool-icon"
          >
            <Icons.html />
          </Link>
          <Link
            to="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
            target="_blank"
            className="tool-icon"
          >
            <Icons.csharp />
          </Link>
          <Link to="https://git-scm.com/" target="_blank" className="tool-icon">
            <Icons.git />
          </Link>
          <Link
            to="https://en.wikipedia.org/wiki/Microsoft_SQL_Server"
            target="_blank"
            className="tool-icon"
          >
            <Icons.sql />
          </Link>
          <Link
            to="https://www.w3schools.com/css/css_intro.asp"
            target="_blank"
            className="tool-icon"
          >
            <Icons.css />
          </Link>
          <Link
            to="https://opensource.com/resources/what-docker"
            target="_blank"
            className="tool-icon"
          >
            <Icons.docker />
          </Link>
          <Link
            to="https://github.com/about"
            target="_blank"
            className="tool-icon"
          >
            <Icons.github />
          </Link>
          <Link
            to="https://about.gitlab.com/why-gitlab/"
            target="_blank"
            className="tool-icon"
          >
            <Icons.gitlab />
          </Link>
          <Link
            to="https://www.figma.com/about/"
            target="_blank"
            className="tool-icon"
          >
            <Icons.figma />
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
