import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../utils/fontawesome'

const Footer = () => (
  <footer>
    <div className="footer_links">
      <a href="https://twitter.com/tugsanunlu" rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={["fab", "twitter"]} />
      </a>    
      <a href="https://instagram.com/tugsanunlu" rel="noopener noreferrer" target="_blank">   
          <FontAwesomeIcon icon={["fab", "instagram"]} /> 
      </a>
      <a href="https://github.com/tugsanunlu" rel="noopener noreferrer" target="_blank">        
          <FontAwesomeIcon icon={["fab", "github"]} />  
      </a>  
      <a href="https://medium.com/@tugsanunlu" rel="noopener noreferrer" target="_blank">        
          <FontAwesomeIcon icon={["fab", "medium"]} />   
      </a>
      <a href="https://www.linkedin.com/in/tugsanunlu" rel="noopener noreferrer" target="_blank">         
          <FontAwesomeIcon icon={["fab", "linkedin"]} />          
      </a>
      <a href="https://tiyatrogunlugu.com" rel="noopener noreferrer" target="_blank">         
          <FontAwesomeIcon icon={["fas", "theater-masks"]} />          
      </a>
      <a href="mailto:unlutugsan@gmail.com" rel="noopener noreferrer" target="_blank">         
          <FontAwesomeIcon icon={["fas", "envelope"]} />          
      </a>
    </div>
  </footer>
)

export default Footer