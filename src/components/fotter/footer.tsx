import React from "react"
import "./footer.scss"

const Footer:React.FC = () => {
    return(
        <>
            <div>
                <div className="footer-upper">
                    <table>
                        <tr>
                            <th>Solutions</th>
                            <th>Company</th>
                            <th>Resources</th>
                        </tr>
                        <tr>
                            <td>Managment</td>
                            <td>Careers</td>
                            <td>Contact</td>
                        </tr>
                        <tr>
                            <td>Agencies</td>
                            <td>Legal</td>
                            <td>About us</td>
                        </tr>
                        <tr>
                            <td>Freelancers</td>
                            <td>Impressum</td>
                            <td>Newsletter</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Press</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="footer-lower">

                </div>
            </div>
        </>
    )
}

export default Footer