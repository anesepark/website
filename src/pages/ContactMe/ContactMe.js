import React from 'react';
import './ContactMe.scss'

function ContactMe(){
  function onMail(option){
    switch(option){
      case 'school':
        window.open(
          'mailto:parch-22@rhodes.edu'
        )
        break;
      case 'personal':
        window.open(
          'mailto:anesepark@gmail.com'
        )
        break;
      case 'linkedin':
        window.open(
          'https://www.linkedin.com/in/chae-youn-anese-park-02a5b7188', '_blank'
        )
        break;
      default:
        window.open();
        break;
    }

  }
  return(
    <div className = "tab-body">
      <h2>Contact Me!</h2>
      <figure className = "drawn-component">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7bcda425-e011-4eb3-ae73-311a3ddc3b5d/denzwy0-dfcf8464-4729-4684-a525-f3dc78eb0ddb.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiY2RhNDI1LWUwMTEtNGViMy1hZTczLTMxMWEzZGRjM2I1ZFwvZGVuend5MC1kZmNmODQ2NC00NzI5LTQ2ODQtYTUyNS1mM2RjNzhlYjBkZGIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.s3fcOcleOVJDN8tjM-TFpQlfIriXDT3ZcSe7twlfO4A" alt="no gif"/>
      </figure>
      <p>Please feel free to reach out to my school email, personal email, or LinkedIn. I love getting to know people and making new connections!</p>

      <br />
      <div className = "link-body">
        <button onClick={() => onMail('school')}>School Email</button>
        <button onClick={() => onMail('personal')}>Personal Email</button>
        <button onClick={() => onMail('linkedin')}>LinkedIn</button>
      </div>
    </div>
  )
}
export default ContactMe