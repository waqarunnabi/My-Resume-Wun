import React from 'react'

export const Footer = () => {
  return (
    <section>
        <div>
            <div className="row">
                <div className="col-sm-5 copyright">
                    <p>
                        Copyright &copy; 2023 Waqar Un Nabi
                    </p>
                </div>
                <div className="col-sm-2 top">
                    <span id="to-top">
                        <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="col-sm-5 social">
                    <ul>
                        <li>
                            <a href="https://github.com/ows-ali" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/in/ows-ali" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ows_ali" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
						<li>
                            <a href="https://ows-ali.medium.com/" target="_blank"><i className="fa fa-medium" aria-hidden="true"></i></a> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
